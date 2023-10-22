import type { LocaleSetting, LocaleType } from "@/types/config";
import { defineStore } from "pinia";
import { localeSetting } from "@/settings/localeSetting";
interface LocaleState {
  localInfo: LocaleSetting;
}

export const useLocaleStore = defineStore("locale", {
  state: (): LocaleState => {
    return {
      localInfo: localeSetting,
    };
  },
  getters: {
    getLocale(state): LocaleType {
      return state.localInfo?.locale ?? "zh_CN";
    },
  },
  actions: {
    /**
     * Set up multilingual information and cache
     * @param info multilingual info
     */
    setLocaleInfo(info: Partial<LocaleSetting>) {
      this.localInfo = { ...this.localInfo, ...info };
    },
    initLocale() {
      this.setLocaleInfo({
        ...localeSetting,
        ...this.localInfo,
      });
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    // 自定义 key
    strategies: [
      {
        key: "locale",
        storage: localStorage,
        // 或者 持久化部分 state
        // paths: ["userInfo"],
      },
    ],
  },
});
