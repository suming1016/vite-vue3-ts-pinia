import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  const env = loadEnv(mode, process.cwd());
  console.log("配置", command, mode, env);
  return {
    base: "./",
    esbuild: {
      drop: ["console", "debugger"],
    },
    resolve: {
      //设置别名
      alias: {
        "@": resolve(__dirname, "src"),
        "@imgPath": resolve(__dirname, "./src/assets/images"),
        "@iconPath": resolve(__dirname, "./src/assets/icons"),
        "@components": resolve(__dirname, "./src/components"),
      },
    },
    plugins: [
      vue(),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: [
          "vue", // 导入内置的所有api
          "vue-router",
          "pinia",
          "@vueuse/core",
          {
            "vue-router": ["createRouter"], // 导入指定的api
            /* 自定义模块 */
            // "@/hooks/api.ts": ["defineApi"], // 导入指定文件下的指定api
            // "@/api/index.ts": [["*", "api"]], // 导入指定文件下的api，并重命名
            "@/store/index.ts": [["*", "store"]],
          },
        ],
        resolvers: [
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: "Icon",
          }),
        ],
        dts: resolve(__dirname, "auto-imports.d.ts"),
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: "icon", // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
            // {prefix}-{collection}-{icon} 使用组件解析器时，您必须遵循名称转换才能正确推断图标。
            // alias: { park: 'icon-park' } 集合的别名
            // enabledCollections: ["ep"], // 这是可选的，默认启用 Iconify 支持的所有集合['mdi']
          }),
        ],
      }),
      createSvgIconsPlugin({
        // 要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), "src/assets/icons")],
        // 执行 icon name 的格式
        symbolId: "icon-[dir]-[name]",
        //svgo额外配置，具体配置参考https://github.com/svg/svgo
        svgoOptions: true,
      }),
      Icons({
        // scale: 1, // 缩放
        compiler: "vue3", // 编译方式
        // defaultClass: '', // 默认类名
        // defaultStyle: '', // 默认样式
        autoInstall: true,
        // jsx: 'react' // jsx支持
      }),
    ],
    build: {
      target: "esnext",
      outDir: "dist", // 指定打包路径，默认为项目根目录下的 dist 目录
      // https://www.rollupjs.com/configuration-options/#output-entryfilenames
      rollupOptions: {
        output: {
          entryFileNames: "js/app.[hash].js",
          chunkFileNames: "js/[name].[hash].js",
          assetFileNames(assetInfo) {
            if (assetInfo.name.endsWith(".css")) {
              return "css/[name].[hash].css";
            }
            if ([".png", ".jpg", ".jpeg", ".svg", "gif"].some((ext) => assetInfo.name.endsWith(ext))) {
              return "img/[name].[hash].[ext]";
            }
            return "assets/[name].[hash].[ext]";
          },
          // manualChunks: { // 分包 方法一，
          // a: ["lodash", "vue"],
          // lodash: ["lodash"],
          // },
          manualChunks(id) {
            // 静态资源分拆打包  // 分包 方法二
            if (id.includes("node_modules")) {
              return "vendor";
              // return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          },
        },
      },
      // minify: "terser",
      // terserOptions: {
      //   //对 js 进行一定的压缩，减少打包文件体积
      //   compress: {
      //     keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
      //     drop_console: true, // 生产环境去除 console
      //     drop_debugger: true, // 生产环境去除 debugger
      //   },
      // },
      chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）默认为500
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: `@import '@/assets/style/variables.scss';`,
        },
      },
    },
    server: {
      port: 8080, //启动端口
      open: true, //当该值为字符串时，它将被用作 URL 的路径名。
      host: "0.0.0.0",
      // hmr: {
      //   //禁用或配置 HMR 连接（用于 HMR websocket 必须使用不同的 http 服务器地址的情况）。
      //   host: "127.0.0.1",
      //   port: 8080,
      // },
      // 设置 https 代理
      proxy: {
        "/api": {
          target: "your https address",
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ""),
        },
        // 代理 websockets 或 socket.io 写法：ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
        "/socket.io": {
          target: "ws://localhost:5174",
          ws: true,
        },
      },
    },
  };
});
