import { Menu, ConfigProvider } from "antd";
import { useSettings } from "@/store/settingStore";
import useMenuData from "./menuData";

const NavHorizontal = () => {
  const settings = useSettings();
  const items = useMenuData();

  return (
    <div className="flex-1 h-full px-3">
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              subMenuItemBg: "transparent",
            },
          },
        }}
      >
        <Menu
          theme={settings.darkSidebar ? "dark" : "light"}
          defaultSelectedKeys={["1"]}
          mode="horizontal"
          items={items}
          style={{
            borderInlineEnd: "none",
            height: 72,
            backgroundColor: "transparent",
            borderBottom: "none",
          }}
        />
      </ConfigProvider>
    </div>
  );
};

export default NavHorizontal;
