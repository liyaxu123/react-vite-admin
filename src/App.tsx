import Router from "./router/index";
import { ConfigProvider } from "antd";

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
      <Router />
    </ConfigProvider>
  );
}

export default App;
