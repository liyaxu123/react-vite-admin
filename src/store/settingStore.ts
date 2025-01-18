import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import {
  StorageEnum,
  ThemeColorPresets,
  ThemeLayout,
  ThemeMode,
} from "@/types/enum";

type SettingsType = {
  themeColorPresets: ThemeColorPresets;
  themeMode: ThemeMode;
  themeLayout: ThemeLayout;
  themeStretch: boolean;
  darkSidebar: boolean;
  pageTransition: string;
};

type SettingStore = {
  settings: SettingsType;
  actions: {
    setSettings: (settings: SettingsType) => void;
    clearSettings: () => void;
  };
};

const useSettingStore = create<SettingStore>()(
  persist(
    (set) => {
      return {
        settings: {
          // 主题色
          themeColorPresets: ThemeColorPresets.Orange,
          // 主题
          themeMode: ThemeMode.Light,
          // 布局
          themeLayout: ThemeLayout.Vertical,
          // 是否拉伸
          themeStretch: false,
          // 是否黑暗主题菜单
          darkSidebar: false,
          // 页面过渡动画
          pageTransition: "fadeInLeft",
        },

        actions: {
          setSettings: (settings) => {
            set({ settings });
          },
          clearSettings() {
            useSettingStore.persist.clearStorage();
          },
        },
      };
    },
    {
      name: StorageEnum.Settings,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        [StorageEnum.Settings]: state.settings,
      }),
    }
  )
);

export const useSettings = () => useSettingStore((state) => state.settings);
export const useSettingActions = () =>
  useSettingStore((state) => state.actions);
