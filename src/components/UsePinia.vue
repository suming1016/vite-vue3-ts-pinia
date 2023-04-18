<template>
  <h2>欢迎使用vite+vue3+ts+pinia+vue-router4</h2>
  <div>{{ userInfo.name }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { userStore } from "@/store/user";

export default defineComponent({
  name: "UsePinia",
  setup() {
    const userInfo = userStore();

    return {
      userInfo,
    };
  },
});
</script>
