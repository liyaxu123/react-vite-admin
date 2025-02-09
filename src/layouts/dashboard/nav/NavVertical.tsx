import { memo, useMemo } from "react";
import { Layout, Menu, Button, theme, ConfigProvider } from "antd";
import SimpleBar from "simplebar-react";
import { Iconify } from "@/components/icon";
import MotionContainer from "@/components/animate/motion-container";
import { getVariant, AnimateEnum } from "@/components/animate/variants";
import { motion } from "motion/react";
import { useSettingActions, useSettings } from "@/store/settingStore";
import { cn } from "@/utils";
import { ThemeLayout } from "@/types/enum";
import useMenuData from "./menuData";
import { useRouter, usePathname } from "@/router/hooks";

const { Sider } = Layout;

const NavVertical = () => {
  const settings = useSettings();
  const { setSettings } = useSettingActions();
  const { token } = theme.useToken();
  const items = useMenuData();
  const router = useRouter();
  const pathname = usePathname();
  const defaultOpenKey = useMemo(() => {
    return "/" + pathname.split("/")[1];
  }, [pathname]);

  return (
    <Sider
      collapsible
      trigger={null}
      collapsed={settings.themeLayout === ThemeLayout.Mini}
      width={300}
      className={cn(
        "border-r border-r-color-split bg-color-bg-base",
        settings.darkSidebar ? "bg-[rgb(0,21,41)]" : "bg-color-bg-base"
      )}
    >
      {/* logo */}
      <div className="h-[72px] flex gap-2 items-center justify-center">
        <Iconify icon="solar:code-bold" size={46} color={token.colorPrimary} />
        {settings.themeLayout === ThemeLayout.Mini ? null : (
          <MotionContainer className="flex text-2xl font-bold">
            {"React Admin".split("").map((letter) => (
              <motion.div
                key={letter}
                variants={getVariant(AnimateEnum.fadeIn)}
                style={{ color: token.colorPrimary, minWidth: 8 }}
              >
                {letter}
              </motion.div>
            ))}
          </MotionContainer>
        )}
      </div>

      {/* 自定义 trigger */}
      <Button
        shape="circle"
        size="small"
        className="absolute -translate-x-1/2 -translate-y-1/2 top-9 left-full z-[100]"
        icon={
          <Iconify
            icon={
              settings.themeLayout === ThemeLayout.Mini
                ? "solar:alt-arrow-right-line-duotone"
                : "solar:alt-arrow-left-line-duotone"
            }
            size={16}
            color="rgb(99, 115, 129)"
            className="transition-all hover:scale-110"
          />
        }
        onClick={() => {
          let val = ThemeLayout.Vertical;
          if (settings.themeLayout === ThemeLayout.Mini) {
            val = ThemeLayout.Vertical;
          } else if (settings.themeLayout === ThemeLayout.Vertical) {
            val = ThemeLayout.Mini;
          }

          setSettings({
            ...settings,
            themeLayout: val,
          });
        }}
      />

      <SimpleBar className="px-4" style={{ height: "calc(100vh - 72px)" }}>
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemBg: "var(--ant-color-bg-base)",
                subMenuItemBg: "transparent",
                darkSubMenuItemBg: "var(--ant-menu-dark-sub-menu-item-bg)",
              },
            },
          }}
        >
          <Menu
            theme={settings.darkSidebar ? "dark" : "light"}
            defaultSelectedKeys={[pathname]}
            defaultOpenKeys={[defaultOpenKey]}
            selectedKeys={[pathname]}
            mode="inline"
            items={items}
            style={{ borderInlineEnd: "none" }}
            onSelect={(data) => {
              router.push(data.key);
            }}
          />
        </ConfigProvider>
      </SimpleBar>
    </Sider>
  );
};

export default memo(NavVertical);
