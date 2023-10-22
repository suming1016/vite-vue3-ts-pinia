/// <reference types="vite/client" />
declare module "element-plus/dist/locale/zh-cn.mjs";
declare module "@iconify/iconify";
interface ImportMetaEnv {
  readonly VITE_GLOB_APP_TITLE: string;
  readonly VITE_APP_PORT: number;
  readonly VITE_APP_BASE_API: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
