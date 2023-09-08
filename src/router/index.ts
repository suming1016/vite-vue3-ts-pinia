import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "IndexPage",
    meta: {
      title: "首页",
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import("@/pages/home/index.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    meta: {
      title: "登录",
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import("@/pages/login/login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
