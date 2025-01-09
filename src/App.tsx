import Router from "./router/index";
import { ConfigProvider, App as AntdApp } from "antd";
import Toast from "@/components/toast";
import { useSettings } from "@/store/settingStore";

function App() {
  const settings = useSettings();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: settings.themeColorPresets,
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
