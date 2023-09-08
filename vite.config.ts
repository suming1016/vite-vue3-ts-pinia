import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
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
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  build: {
    outDir: "dist", // 指定打包路径，默认为项目根目录下的 dist 目录
    minify: "terser",
    terserOptions: {
      //对 js 进行一定的压缩，减少打包文件体积
      compress: {
        keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true, // 生产环境去除 console
        drop_debugger: true, // 生产环境去除 debugger
      },
    },
    chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）默认为500
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve("@/assets/style/variables.less")}";`,
        },
        math: "strict",
        javascriptEnabled: true,
        // charset: false,
        // additionalData: `@import "${resolve(__dirname, "src/assets/style/variable.less")}";`,
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
});
