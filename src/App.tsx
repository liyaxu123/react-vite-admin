import Router from "./router/index";
import { ConfigProvider, App as AntdApp } from "antd";
import Toast from "@/components/toast";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // f4a261 4772fa
          colorPrimary: "#f4a261",
        },
        components: {},
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
