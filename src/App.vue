<template>
  <el-config-provider :locale="lang">
    <router-view></router-view>
  </el-config-provider>
</template>
<script setup lang="ts">
import { unref } from "vue";
import { i18n } from "./locales";
import { useLocaleStore } from "@/store/locale";
const localInfo = useLocaleStore();

const getLocale = localInfo.localInfo.locale;
console.log("i18n", i18n, i18n.global, i18n.global.getLocaleMessage(unref(getLocale)));
const lang = (i18n.global.getLocaleMessage(unref(getLocale)) as any)?.elementLocale ?? {};
</script>
