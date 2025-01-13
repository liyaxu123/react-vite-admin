import Router from "./router/index";
import { ConfigProvider, App as AntdApp, theme } from "antd";
import Toast from "@/components/toast";
import { useSettings } from "@/store/settingStore";
import { themePresets } from "@/layouts/_common/setting-button";
import { ThemeMode } from "@/types/enum";

function App() {
  const settings = useSettings();

  const colorPrimary = themePresets.find(
    (item) => item.key === settings.themeColorPresets
  )?.color;

  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        // 1. 单独使用暗色算法
        algorithm:
          settings.themeMode === ThemeMode.Dark
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
        token: {
          colorPrimary,
        },
      }}
    >
      <AntdApp className="h-screen">
        {/* 一个好看的提示组件：https://sonner.emilkowal.ski/ */}
        <Router />
        <Toast />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
