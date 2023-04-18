<script setup lang="ts">
import { userStore } from "@/store/user";

const userInfo = userStore();
userInfo.updateName("李四");
</script>

<template>
  <div>
    <router-view class="router-view"></router-view>
  </div>
</template>

<style scoped></style>
