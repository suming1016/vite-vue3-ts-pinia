<template>
  <div :class="$attrs.class">
    <span>{{ t("user.name") }}:</span>
    <span>皮卡丘</span>
  </div>
  <div>
    <span>{{ t("user.age") }}:</span>
    <span>5</span>
  </div>
  <div>
    <span>{{ t("user.weight") }}:</span>
    <span>50</span>
  </div>
  <div>
    <span>{{ t("user.height") }}:</span>
    <span>100</span>
  </div>
</template>
<script setup lang="ts">
// 导入useI18n
import { useI18n } from "vue-i18n";
const { t } = useI18n();
console.log("🚀 ~ file: i18n.vue:23 ~ useI18n():", useI18n());
</script>
