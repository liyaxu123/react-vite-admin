import { memo } from "react";
import { Layout, Menu, Button, theme, ConfigProvider } from "antd";
import SimpleBar from "simplebar-react";
import { Iconify } from "@/components/icon";
import MotionContainer from "@/components/animate/motion-container";
import { getVariant, AnimateEnum } from "@/components/animate/variants";
import { motion } from "motion/react";
import { useRouter } from "@/router/hooks";
import { useSettingActions, useSettings } from "@/store/settingStore";
import { cn } from "@/utils";
import { ThemeLayout } from "@/types/enum";

const { Sider } = Layout;

const NavVertical = () => {
  const settings = useSettings();
  const { setSettings } = useSettingActions();
  const router = useRouter();
  const { token } = theme.useToken();
  // console.log("token:", token);

  const items = [
    {
      key: "1",
      label: "仪表",
      icon: (
        <Iconify
          icon="solar:pie-chart-2-bold-duotone"
          size={24}
          style={{ color: "rgb(99, 115, 129)" }}
        />
      ),
      children: [
        {
          key: "1-1",
          label: "工作台",
          onClick: () => {
            router.push("/home");
          },
        },
        {
          key: "1-2",
          label: "分析页",
          onClick: () => {
            router.push("/about");
          },
        },
      ],
    },
    {
      key: "2",
      label: "管理",
      icon: (
        <Iconify
          icon="solar:folder-with-files-bold-duotone"
          size={24}
          style={{ color: "rgb(99, 115, 129)" }}
        />
      ),
      children: [
        {
          key: "2-1",
          label: "用户",
          type: "group",
          children: [
            {
              key: "2-1-1",
              label: "个人中心",
            },
            {
              key: "2-1-2",
              label: "账户设置",
            },
          ],
        },
        {
          key: "2-2",
          label: "系统",
          type: "group",
          children: [
            {
              key: "2-2-1",
              label: "用户管理",
            },
            {
              key: "2-2-2",
              label: "角色管理",
            },
            {
              key: "2-2-3",
              label: "权限管理",
            },
          ],
        },
      ],
    },
    {
      key: "3",
      label: "异常页",
      icon: (
        <Iconify
          icon="solar:shield-warning-bold-duotone"
          size={24}
          style={{ color: "rgb(99, 115, 129)" }}
        />
      ),
      children: [
        {
          key: "3-1",
          label: "403",
        },
        {
          key: "3-2",
          label: "404",
        },
        {
          key: "3-3",
          label: "500",
        },
      ],
    },
    {
      key: "4",
      label: "多级菜单",
      icon: (
        <Iconify
          icon="solar:hamburger-menu-bold-duotone"
          size={24}
          style={{ color: "rgb(99, 115, 129)" }}
        />
      ),
      children: [
        {
          key: "4-1",
          label: "403",
        },
        {
          key: "4-2",
          label: "404",
        },
        {
          key: "4-3",
          label: "500",
        },
        {
          key: "4-4",
          label: "501",
        },
        {
          key: "4-5",
          label: "502",
        },
      ],
    },
  ];

  return (
    <Sider
      collapsible
      trigger={null}
      collapsed={settings.themeLayout === ThemeLayout.Mini}
      width={300}
      className={cn(
        "border-r border-r-[rgba(145,158,171,0.08)] bg-color-bg-container",
        settings.darkSidebar ? "bg-[rgb(0,21,41)]" : "bg-color-bg-container"
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
                subMenuItemBg: "transparent",
              },
            },
          }}
        >
          <Menu
            theme={settings.darkSidebar ? "dark" : "light"}
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            style={{ borderInlineEnd: "none" }}
          />
        </ConfigProvider>
      </SimpleBar>
    </Sider>
  );
};

export default memo(NavVertical);
