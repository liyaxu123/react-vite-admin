import Router from "./router/index";
import { ConfigProvider } from "antd";
import { Toaster } from "sonner";

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
      {/* 一个好看的提示组件：https://sonner.emilkowal.ski/ */}
      <Toaster />
      <Router />
    </ConfigProvider>
  );
}

export default App;
