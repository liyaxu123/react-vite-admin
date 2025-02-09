import { Menu, ConfigProvider } from "antd";
import { useSettings } from "@/store/settingStore";
import useMenuData from "./menuData";
import { useRouter, usePathname } from "@/router/hooks";

const NavHorizontal = () => {
  const settings = useSettings();
  const items = useMenuData();
  const router = useRouter();
  const pathname = usePathname();

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
          defaultSelectedKeys={[pathname]}
          selectedKeys={[pathname]}
          mode="horizontal"
          items={items}
          style={{
            borderInlineEnd: "none",
            height: 72,
            backgroundColor: "transparent",
            borderBottom: "none",
          }}
          onSelect={(data) => {
            router.push(data.key);
          }}
        />
      </ConfigProvider>
    </div>
  );
};

export default NavHorizontal;
