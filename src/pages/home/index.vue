<template>
  <div>
    <span>{{ userInfo.userInfo }}</span>

    1<span class="iconify" data-icon="material-symbols:add-notes-rounded" data-inline="false"></span> 2<span
      class="iconify"
      data-icon="material-symbols:ad-group"
      data-inline="false"
    ></span>
    3<el-icon :size="20" :color="'#409EFC'">
      <IconEpFold class="v-icon" />
    </el-icon>
    4<el-icon><IconEpPlus /></el-icon> 5<IconEpEdit style="width: 1em; height: 1em; margin-right: 8px" /> 6<IconEpFold
      class="v-icon"
    />
    7 <icon-material-symbols-activity-zone-outline /> 8<SvgIcon name="svg01" size="100px" :color="'#1e80ff'"></SvgIcon>

    9<Icon icon="material-symbols:3p-outline" size="100px" :color="'#1e80ff'"></Icon> 10<SvgIcon
      name="svg01"
      size="100px"
      :color="'#1e80ff'"
    ></SvgIcon>
    <Icon icon="svg01|svg" size="100px" :color="'#1e80ff'"></Icon>
    <UsePinia class="pp" v-bind="$attrs"></UsePinia>
    <!-- <I18n v-bind="$attrs" class="i18n"></I18n> -->
    <div>
      <div>
        <span>{{ t("user.age") }}:</span>
        <span>5</span>
      </div>
    </div>
  </div>
  <img src="@imgPath/demo.png" />
  <img src="@iconPath/sun.svg" />
  <img src="@iconPath/moon.svg" />
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/user";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
const userInfo = useUserStore();

userInfo.$patch({
  userInfo: {
    userId: "11",
    username: "张山",
  },
});
console.log("userInfo", userInfo);
console.log(import.meta.env);
</script>
<style lang="scss" scoped>
.iconify {
  color: var(--primary);
}
</style>
