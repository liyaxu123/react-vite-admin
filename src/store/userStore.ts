import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { StorageEnum } from "@/types/enum";
import type { UserInfo, UserToken } from "@/types/entity";

type UserStore = {
  userInfo: Partial<UserInfo>;
  userToken: UserToken;
  // 使用 actions 命名空间来存放所有的 action
  actions: {
    setUserInfo: (userInfo: UserInfo) => void;
    setUserToken: (token: UserToken) => void;
    clearUserInfoAndToken: () => void;
  };
};

const useUserStore = create<UserStore>()(
  persist(
    (set) => {
      return {
        // 用户信息
        userInfo: {},
        // token
        userToken: {},

        actions: {
          setUserInfo: (userInfo) => {
            set({ userInfo });
          },
          setUserToken: (userToken) => {
            set({ userToken });
          },
          clearUserInfoAndToken() {
            set({ userInfo: {}, userToken: {} });
          },
        },
      };
    },
    {
      // 存储项的名称（必须是唯一的）
      name: "userStore",
      // 设置数据存储的位置，（可选）默认情况下，使用‘localStorage’
      storage: createJSONStorage(() => localStorage),
      // 需要存储的值
      partialize: (state) => ({
        [StorageEnum.UserInfo]: state.userInfo,
        [StorageEnum.UserToken]: state.userToken,
      }),
    }
  )
);

export const useUserInfo = () => useUserStore((state) => state.userInfo);
export const useUserToken = () => useUserStore((state) => state.userToken);
export const useUserPermission = () =>
	useUserStore((state) => state.userInfo.permissions);
export const useUserActions = () => useUserStore((state) => state.actions);

export default useUserStore;
