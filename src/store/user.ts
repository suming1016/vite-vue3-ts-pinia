import { defineStore } from "pinia";
import { UserInfo, RoleEnum } from "@/types/user";
interface UserState {
  userInfo: Nullable<UserInfo>;
  token?: string;
  roleList: RoleEnum[];
  sessionTimeout?: boolean;
  lastUpdateTime: number;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => {
    return {
      userInfo: null,
      token: undefined,
      roleList: [],
      lastUpdateTime: 0,
    };
  },
  getters: {
    getRoleList(state): RoleEnum[] {
      return state.roleList;
    },
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info ? info : ""; // for null or undefined value
    },
    setRoleList(roleList: RoleEnum[]) {
      this.roleList = roleList;
    },
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info;
      this.lastUpdateTime = new Date().getTime();
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    // 自定义 key
    strategies: [
      {
        key: "user",
        storage: localStorage,
        // 或者 持久化部分 state
        // paths: ["userInfo"],
      },
    ],
  },
});
