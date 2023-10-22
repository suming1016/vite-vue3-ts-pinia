<template>
  <div>
    <span>{{ userInfo.userInfo?.username }}</span>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/user";
const userInfo = useUserStore();
userInfo.$patch({
  userInfo: {
    userId: "11",
    username: "张山",
  },
});
console.log("userInfo", userInfo);
</script>
