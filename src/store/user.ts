import { defineStore } from "pinia";
export const userStore = defineStore({
  id: "user", // id必填，且需要唯一
  state: () => {
    return {
      name: "张三",
    };
  },
  getters: {
    fullName: (state) => {
      return state.name + "丰";
    },
  },
  actions: {
    updateName(name: string) {
      this.name = name;
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    // 自定义 key
    strategies: [
      {
        key: "my_user",
        storage: localStorage,
        // 或者 持久化部分 state
        paths: ["name"],
      },
    ],
  },
});
