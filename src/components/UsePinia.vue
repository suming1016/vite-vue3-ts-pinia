<template>
  <h2>欢迎使用vite+vue3+ts+pinia+vue-router4</h2>
  <div>{{ userInfo.userInfo?.realName }}</div>
  <div :class="$attrs.class">{{ $attrs }}</div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from "vue";
import { useUserStore } from "@/store/user";

const userInfo = useUserStore();

// proxy 就是当前组件实例，可以理解为组件级别的 this，没有全局的、路由、状态管理之类的
const instance = getCurrentInstance();
console.log("🚀 ~ file: UsePinia.vue:16 ~ proxy:", instance?.proxy?.$attrs);

// 这个 global 就是全局实例
const global = instance?.appContext.config.globalProperties;
</script>
