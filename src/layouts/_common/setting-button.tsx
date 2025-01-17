import React, { useState, useEffect } from "react";
import { IconButton, Iconify } from "@/components/icon";
import { Tooltip, Drawer, theme } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import SimpleBar from "simplebar-react";
import { motion } from "motion/react";
import styled from "styled-components";
import { cn } from "@/utils";
import { ThemeColorPresets, ThemeMode } from "@/types/enum";
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
    console.log(props.$theme);
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

  useEffect(() => {
    if (settings.themeMode === ThemeMode.Dark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

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
                    console.log(value);
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
                      className="rounded-xl"
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
            </div>
          </SimpleBar>
        </div>
      </Drawer>
    </>
  );
};

export default SettingButton;
