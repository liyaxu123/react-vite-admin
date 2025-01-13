import { Outlet } from "react-router";
import { theme } from "antd";
import SimpleBar from "simplebar-react";
import useDynamicTheme from "@/hooks/useDynamicTheme";

const Main = () => {
  const { token } = theme.useToken();
  const mainStyle = useDynamicTheme({
    dark: {
      backgroundColor: token.colorBgContainer,
    },
    light: {
      backgroundColor: "rgba(249,250,251,0.8)",
    },
  });

  return (
    <div className={`w-full h-full overflow-auto`} style={mainStyle}>
      <SimpleBar autoHide={false} className="h-full">
        <Outlet />
      </SimpleBar>
    </div>
  );
};

export default Main;
