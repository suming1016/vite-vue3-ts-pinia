import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "virtual:svg-icons-register"; // 导入全局的svg图标 https://github.com/vbenjs/vite-plugin-svg-icons
import { i18n } from "./locales/index";

import { initAppConfigStore } from "@/logics/initAppConfig";

createApp(App).use(store).use(router).use(ElementPlus).use(i18n).mount("#app");

// 初始化内部系统配置
initAppConfigStore();
