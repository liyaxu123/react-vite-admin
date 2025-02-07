import React, { useState } from "react";
import { IconButton, Iconify } from "@/components/icon";
import { Tooltip, Drawer, theme, Select } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import SimpleBar from "simplebar-react";
import { motion } from "motion/react";
import styled from "styled-components";
import { cn } from "@/utils";
import { ThemeColorPresets, ThemeLayout, ThemeMode } from "@/types/enum";
import { useSettings, useSettingActions } from "@/store/settingStore";
import type { GlobalToken } from "antd";

interface ToggleButtonProps {
  title: string;
  icon: React.ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
  tips?: string;
  onChange?: (value: boolean) => void;
}

const SwitchWrap = styled.div<{ $theme: GlobalToken }>`
  width: 30px;
  height: 18px;
  /* background-color: rgba(145, 158, 171, 0.48); */
  background-color: ${(props) => {
    if (document.documentElement.classList.contains("dark")) {
      return props.$theme.colorBgContainer;
    } else {
      return "rgba(145, 158, 171, 0.48)";
    }
  }};
  display: flex;
  justify-content: flex-start;
  border-radius: 20px;
  padding: 4px;
  cursor: pointer;

  &[data-ison="true"] {
    justify-content: flex-end;
    background-color: #000;
  }

  .handle {
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
  }
`;

const ToggleButton: React.FC<ToggleButtonProps> = ({
  title,
  icon,
  onChange,
  tips,
  defaultChecked = false,
  disabled = false,
}) => {
  const [isOn, setIsOn] = useState(defaultChecked);
  const toggleSwitch = () => {
    const newVal = !isOn;
    setIsOn(newVal);
    onChange?.(newVal);
  };

  return (
    <button
      disabled={disabled}
      className={cn(
        "px-5 py-4 border rounded-2xl border-[rgba(145,158,171,0.12)] h-[100px] w-[152px] hover:bg-[rgba(145,158,171,0.08)]",
        isOn ? "bg-[rgba(145,158,171,0.08)]" : ""
      )}
      onClick={toggleSwitch}
    >
      <div className="flex items-center justify-between mb-6">
        {icon}

        <SwitchWrap data-ison={isOn} $theme={theme.useToken().token}>
          <motion.div
            className="handle"
            layout
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 30,
            }}
          />
        </SwitchWrap>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-left text-[rgb(28,37,46)] dark:text-white text-[13px]">
          {title}
        </span>

        {tips ? (
          <Tooltip title={tips} placement="bottom">
            <InfoCircleOutlined />
          </Tooltip>
        ) : null}
      </div>
    </button>
  );
};

// 预设主题色
export const themePresets = [
  {
    key: ThemeColorPresets.Green,
    color: "rgb(0,167,111)",
    bg: "rgba(0,167,111,0.08)",
  },
  {
    key: ThemeColorPresets.Cyan,
    color: "rgb(7,141,238)",
    bg: "rgba(7,141,238,0.08)",
  },
  {
    key: ThemeColorPresets.Purple,
    color: "rgb(118,53,220)",
    bg: "rgba(118,53,220,0.08)",
  },
  {
    key: ThemeColorPresets.Blue,
    color: "rgb(12,104,233)",
    bg: "rgba(12,104,233,0.08)",
  },
  {
    key: ThemeColorPresets.Orange,
    color: "rgb(253,169,45)",
    bg: "rgba(253,169,45,0.08)",
  },
  {
    key: ThemeColorPresets.Red,
    color: "rgb(255,48,48)",
    bg: "rgba(255,48,48,0.08)",
  },
];

const SettingButton = () => {
  const settings = useSettings();

  const { setSettings } = useSettingActions();
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton className="w-10 h-10" onClick={() => setOpen(true)}>
        <Iconify
          icon="solar:settings-bold-duotone"
          size={24}
          color="rgb(99, 115, 129)"
          className="transition-all hover:scale-110"
        />
      </IconButton>

      <Drawer
        closeIcon={null}
        open={open}
        width={360}
        classNames={{
          body: "lyx-account-drawer-body",
        }}
        onClose={() => {
          setOpen(false);
        }}
      >
        {/* 头部区域 */}
        <div className="flex items-center justify-between py-4 pl-5 pr-2">
          <h6 className="text-[18px] font-bold text-[rgb(28,37,46)] dark:text-white">
            设置
          </h6>

          <div className="flex items-center">
            {/* 全屏按钮 */}
            {/* solar:quit-full-screen-square-outline */}
            <IconButton className="w-8 h-8" onClick={() => setOpen(false)}>
              <Tooltip title="进入全屏" placement="bottom">
                <Iconify
                  icon="solar:full-screen-square-outline"
                  size={20}
                  className="text-[rgb(99,115,129)] dark:text-[rgb(145,158,171)]"
                />
              </Tooltip>
            </IconButton>

            {/* 重置设置 */}
            <IconButton className="w-8 h-8" onClick={() => setOpen(false)}>
              <Tooltip title="重置设置" placement="bottom">
                <Iconify
                  icon="solar:restart-bold"
                  size={20}
                  className="text-[rgb(99,115,129)] dark:text-[rgb(145,158,171)]"
                />
              </Tooltip>
            </IconButton>

            <IconButton className="w-8 h-8" onClick={() => setOpen(false)}>
              <Tooltip title="关闭" placement="bottom">
                <Iconify
                  icon="material-symbols:close-rounded"
                  size={20}
                  className="text-[rgb(99,115,129)] dark:text-[rgb(145,158,171)]"
                />
              </Tooltip>
            </IconButton>
          </div>
        </div>

        {/* 主体区域 */}
        <div style={{ height: "calc(100% - 64px)" }}>
          <SimpleBar className="h-full">
            <div className="flex flex-col gap-12 px-5 pb-10">
              {/* 设置按钮 */}
              <div className="grid grid-cols-2 gap-4">
                <ToggleButton
                  title="暗黑模式"
                  defaultChecked={settings.themeMode === ThemeMode.Dark}
                  icon={
                    <Iconify
                      icon="solar:moon-fog-bold-duotone"
                      size={24}
                      className="dark:text-white text-[#1c252e]"
                    />
                  }
                  onChange={(value: boolean) => {
                    document.documentElement.classList.toggle("dark", value);

                    setSettings({
                      ...settings,
                      themeMode: value ? ThemeMode.Dark : ThemeMode.Light,
                    });
                  }}
                />

                <ToggleButton
                  title="紧促布局"
                  tips="仅限仪表盘，分辨率大于1600px(xl)"
                  defaultChecked={settings.themeStretch}
                  icon={
                    <Iconify
                      icon="codex:stretch"
                      size={24}
                      className="dark:text-white text-[#1c252e]"
                    />
                  }
                  onChange={(value: boolean) => {
                    setSettings({
                      ...settings,
                      themeStretch: value,
                    });
                  }}
                />
              </div>

              {/* 预设主题色 */}
              <div className="p-4 pt-8 border-[rgba(145,158,171,0.12)] h-[190px] border rounded-2xl relative">
                <span className="px-[10px] h-[22px] bg-[rgb(28,37,46)] text-white rounded-[22px] text-[13px] leading-[22px] font-semibold absolute -top-3">
                  预设主题色
                </span>
                <div className="grid h-full grid-cols-3 gap-3">
                  {themePresets.map((item) => (
                    <button
                      key={item.key}
                      className={cn(
                        "rounded-xl",
                        settings.themeColorPresets === item.key ? "shadow" : ""
                      )}
                      style={{
                        backgroundColor:
                          settings.themeColorPresets === item.key
                            ? item.bg
                            : "",
                      }}
                      onClick={() => {
                        setSettings({
                          ...settings,
                          themeColorPresets: item.key,
                        });
                      }}
                    >
                      <Iconify
                        icon="solar:pallete-2-bold"
                        size={28}
                        color={item.color}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* 导航设置 */}
              <div className="p-4 pt-8 border-[rgba(145,158,171,0.12)] border rounded-2xl relative">
                <span className="px-[10px] h-[22px] bg-[rgb(28,37,46)] text-white rounded-[22px] text-[13px] leading-[22px] font-semibold absolute -top-3">
                  导航设置
                </span>
                <p className="text-[rgb(99,115,129)] pb-[10px]">布局</p>
                <div className="grid h-16 grid-cols-3 gap-3">
                  <button
                    className={cn(
                      "flex items-center justify-center border border-[rgba(145,158,171,0.08)] rounded-xl overflow-hidden",
                      settings.themeLayout === ThemeLayout.Vertical
                        ? "shadow"
                        : ""
                    )}
                    onClick={() => {
                      setSettings({
                        ...settings,
                        themeLayout: ThemeLayout.Vertical,
                      });
                    }}
                  >
                    <span
                      className="inline-flex w-full h-full"
                      style={{
                        background:
                          settings.themeLayout === ThemeLayout.Vertical
                            ? "linear-gradient(135deg, var(--ant-color-primary-border), var(--ant-color-primary))"
                            : "rgb(145, 158, 171)",
                        mask: `url(/src/assets/images/ic-nav-vertical.svg) center center / contain no-repeat`,
                      }}
                    ></span>
                  </button>
                  <button
                    className={cn(
                      "flex items-center justify-center border border-[rgba(145,158,171,0.08)] rounded-xl overflow-hidden",
                      settings.themeLayout === ThemeLayout.Horizontal
                        ? "shadow"
                        : ""
                    )}
                    onClick={() => {
                      setSettings({
                        ...settings,
                        themeLayout: ThemeLayout.Horizontal,
                      });
                    }}
                  >
                    <span
                      className="inline-flex w-full h-full"
                      style={{
                        background:
                          settings.themeLayout === ThemeLayout.Horizontal
                            ? "linear-gradient(135deg, var(--ant-color-primary-border), var(--ant-color-primary))"
                            : "rgb(145, 158, 171)",
                        mask: `url(/src/assets/images/ic-nav-horizontal.svg) center center / contain no-repeat`,
                      }}
                    ></span>
                  </button>
                  <button
                    className={cn(
                      "flex items-center justify-center border border-[rgba(145,158,171,0.08)] rounded-xl overflow-hidden",
                      settings.themeLayout === ThemeLayout.Mini ? "shadow" : ""
                    )}
                    onClick={() => {
                      setSettings({
                        ...settings,
                        themeLayout: ThemeLayout.Mini,
                      });
                    }}
                  >
                    <span
                      className="inline-flex w-full h-full"
                      style={{
                        background:
                          settings.themeLayout === ThemeLayout.Mini
                            ? "linear-gradient(135deg, var(--ant-color-primary-border), var(--ant-color-primary))"
                            : "rgb(145, 158, 171)",
                        mask: `url(/src/assets/images/ic-nav-mini.svg) center center / contain no-repeat`,
                      }}
                    ></span>
                  </button>
                </div>
                <p className="text-[rgb(99,115,129)] pt-5 pb-[10px]">颜色</p>
                <div className="flex gap-3">
                  <button
                    className={cn(
                      "border-[rgba(145,158,171,0.08)] rounded-xl overflow-hidden h-14 w-[137px] flex items-center justify-center gap-3 font-semibold",
                      settings.darkSidebar
                        ? "text-[rgb(145,158,171)]"
                        : "border shadow bg-color-bg-base"
                    )}
                    onClick={() => {
                      setSettings({
                        ...settings,
                        darkSidebar: false,
                      });
                    }}
                  >
                    <div
                      className="w-6 h-6"
                      style={{
                        background: settings.darkSidebar
                          ? "rgb(145, 158, 171)"
                          : "linear-gradient(135deg, var(--ant-color-primary-border), var(--ant-color-primary))",
                        mask: `url(/src/assets/images/ic-sidebar-outline.svg) center center / contain no-repeat`,
                      }}
                    ></div>
                    一体
                  </button>
                  <button
                    className={cn(
                      "border-[rgba(145,158,171,0.08)] rounded-xl overflow-hidden h-14 w-[137px] flex items-center justify-center gap-3 font-semibold",
                      settings.darkSidebar
                        ? "border shadow bg-color-bg-base"
                        : "text-[rgb(145,158,171)]"
                    )}
                    onClick={() => {
                      setSettings({
                        ...settings,
                        darkSidebar: true,
                      });
                    }}
                  >
                    <div
                      className="w-6 h-6"
                      style={{
                        background: settings.darkSidebar
                          ? "linear-gradient(135deg, var(--ant-color-primary-border), var(--ant-color-primary))"
                          : "rgb(145, 158, 171)",
                        mask: `url(/src/assets/images/ic-sidebar-filled.svg) center center / contain no-repeat`,
                      }}
                    ></div>
                    突出
                  </button>
                </div>
              </div>

              {/* 页面切换动画 */}
              <div className="p-4 pt-8 border-[rgba(145,158,171,0.12)] border rounded-2xl relative">
                <span className="px-[10px] h-[22px] bg-[rgb(28,37,46)] text-white rounded-[22px] text-[13px] leading-[22px] font-semibold absolute -top-3">
                  页面切换动画
                </span>
                <div className="h-full">
                  <Select
                    variant="filled"
                    defaultValue={settings.pageTransition}
                    showSearch
                    suffixIcon={
                      <Iconify icon="gravity-ui:chevrons-expand-vertical" />
                    }
                    placeholder="选择页面切换动画"
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    onChange={(value) => {
                      setSettings({
                        ...settings,
                        pageTransition: value,
                      });
                    }}
                    options={[
                      {
                        label: "Fade",
                        options: [
                          { label: "fadeIn", value: "fadeIn" },
                          { label: "fadeInUp", value: "fadeInUp" },
                          {
                            label: "fadeInDown",
                            value: "fadeInDown",
                          },
                          {
                            label: "fadeInLeft",
                            value: "fadeInLeft",
                          },
                          {
                            label: "fadeInRight",
                            value: "fadeInRight",
                          },
                        ],
                      },
                      {
                        label: "Zoom",
                        options: [
                          { label: "zoomIn", value: "zoomIn" },
                          { label: "zoomInUp", value: "zoomInUp" },
                          { label: "zoomInDown", value: "zoomInDown" },
                          { label: "zoomInLeft", value: "zoomInLeft" },
                          { label: "zoomInRight", value: "zoomInRight" },
                        ],
                      },
                      {
                        label: "Slide",
                        options: [
                          { label: "slideIn", value: "slideIn" },
                          { label: "slideInUp", value: "slideInUp" },
                          { label: "slideInDown", value: "slideInDown" },
                          { label: "slideInLeft", value: "slideInLeft" },
                          { label: "slideInRight", value: "slideInRight" },
                        ],
                      },
                      {
                        label: "Bounce",
                        options: [
                          { label: "bounceIn", value: "bounceIn" },
                          { label: "bounceInUp", value: "bounceInUp" },
                          { label: "bounceInDown", value: "bounceInDown" },
                          { label: "bounceInLeft", value: "bounceInLeft" },
                          { label: "bounceInRight", value: "bounceInRight" },
                        ],
                      },
                      {
                        label: "Flip",
                        options: [
                          { label: "flipInX", value: "flipInX" },
                          { label: "flipInY", value: "flipInY" },
                        ],
                      },
                      {
                        label: "Scale",
                        options: [
                          { label: "scaleInX", value: "scaleInX" },
                          { label: "scaleInY", value: "scaleInY" },
                        ],
                      },
                    ]}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </SimpleBar>
        </div>
      </Drawer>
    </>
  );
};

export default SettingButton;
