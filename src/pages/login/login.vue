<template>
  <div>
    <span>{{ userInfo.name }}</span>
  </div>
</template>

<script setup lang="ts">
import { userStore } from "@/store/user";
const userInfo = userStore();
userInfo.updateName("李四");
</script>
