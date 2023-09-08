<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>
<script setup lang="ts">
import zhCn from "element-plus/dist/locale/zh-cn.mjs"; // Element Plus 默认的是英文，这里使用中文主题

const locale = zhCn;
</script>

<style scoped></style>
