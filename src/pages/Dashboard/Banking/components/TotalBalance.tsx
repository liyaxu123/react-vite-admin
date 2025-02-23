import { useState } from "react";
import Card from "@/components/card";
import CountUp from "react-countup";
import { Button, theme } from "antd";
import { Iconify } from "@/components/icon";
import { PlusOutlined } from "@ant-design/icons";
import { motion } from "motion/react";
import { cn } from "@/utils";
import { Avatar } from "antd";
import { FallOutlined, RiseOutlined } from "@ant-design/icons";
import { Line } from "@ant-design/plots";
import { useSettings } from "@/store/settingStore";
import { ThemeMode } from "@/types/enum";

const TotalBalance = () => {
  const { token } = theme.useToken();
  const settings = useSettings();
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  const config = {
    data: isOn
      ? [
          { year: "1991", value: 10 },
          { year: "1992", value: 15 },
          { year: "1993", value: 40 },
          { year: "1994", value: 38 },
          { year: "1995", value: 50 },
          { year: "1996", value: 70 },
          { year: "1997", value: 80 },
          { year: "1998", value: 85 },
          { year: "1999", value: 90 },
        ]
      : [
          { year: "1991", value: 10 },
          { year: "1992", value: 40 },
          { year: "1993", value: 45 },
          { year: "1994", value: 88 },
          { year: "1995", value: 50 },
          { year: "1996", value: 64 },
          { year: "1997", value: 70 },
          { year: "1998", value: 90 },
          { year: "1999", value: 103 },
        ],
    axis: {
      x: {
        tick: false,
      },
      y: {
        tick: false,
      },
    },
    xField: "year",
    yField: "value",
    shapeField: "smooth",
    theme: settings.themeMode === ThemeMode.Dark ? "classicDark" : "classic",
    colorField: isOn ? "#b76e00" : token.colorPrimary,
    style: {
      lineWidth: 3,
    },
  };

  return (
    <Card>
      <div className="w-full">
        <div className="flex justify-between w-full">
          <div>
            <div className="text-[rgb(99,115,129)] font-semibold mb-2">
              总资产
            </div>
            <div className="h-12">
              <CountUp
                end={980989}
                prefix="￥"
                className="font-bold text-[32px]"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              color="default"
              variant="filled"
              autoInsertSpace={false}
              icon={<Iconify icon="solar:arrow-up-linear" size={16} />}
              className="font-bold"
            >
              发送
            </Button>
            <Button
              color="default"
              variant="filled"
              autoInsertSpace={false}
              icon={<PlusOutlined />}
              className="font-bold"
            >
              添加卡片
            </Button>
            <Button
              color="default"
              variant="filled"
              autoInsertSpace={false}
              icon={<Iconify icon="solar:arrow-down-outline" size={16} />}
              className="font-bold"
            >
              要求
            </Button>
          </div>
        </div>

        <div className="p-2 w-full h-[130px] bg-[rgb(244,246,248)] my-6 rounded-2xl relative">
          {/* 滑块 */}
          <div
            className={cn(
              "absolute top-0 left-0 w-full h-full p-2 flex items-center",
              isOn ? "justify-end" : "justify-start"
            )}
          >
            <motion.div
              layout
              transition={{
                type: "spring",
                visualDuration: 0.2,
                bounce: 0.2,
              }}
              className="w-1/2 h-full bg-white rounded-2xl"
            ></motion.div>
          </div>

          <div
            className="absolute top-0 left-0 flex items-center justify-between w-full h-full p-2 cursor-pointer"
            onClick={toggleSwitch}
          >
            <div className="relative flex-1 h-full p-4">
              <div className="flex items-center h-full gap-5">
                <Avatar
                  size={48}
                  icon={<FallOutlined />}
                  style={{ backgroundColor: token.colorPrimary }}
                />
                <div className={cn(!isOn ? "" : "text-[rgb(99,115,129)]")}>
                  <p className="mb-2 font-semibold">收入</p>
                  <CountUp
                    end={9990}
                    className="text-2xl font-bold"
                    prefix="￥"
                  />
                </div>
              </div>
              <div className="absolute top-2 right-6 flex items-center px-[6px] bg-[rgba(34,197,94,0.16)] rounded-md">
                <Iconify
                  icon="solar:double-alt-arrow-up-bold-duotone"
                  size={16}
                  color="rgb(17,141,87)"
                />
                <span className="font-semibold ml-1 text-[rgb(17,141,87)]">
                  + 8.1%
                </span>
              </div>
            </div>
            <div className="relative flex-1 h-full p-4">
              <div className="flex items-center h-full gap-5">
                <Avatar
                  size={48}
                  icon={<RiseOutlined />}
                  style={{ backgroundColor: "rgb(122, 65, 0)" }}
                />
                <div className={cn(isOn ? "" : "text-[rgb(99,115,129)]")}>
                  <p className="mb-2 font-semibold">开支</p>
                  <CountUp
                    end={1989}
                    className="text-2xl font-bold"
                    prefix="￥"
                  />
                </div>
              </div>
              <div className="absolute top-2 right-6 flex items-center px-[6px] bg-[rgba(255,86,48,0.16)] rounded-md">
                <Iconify
                  icon="solar:double-alt-arrow-down-bold-duotone"
                  size={16}
                  color="rgb(183,29,24)"
                />
                <span className="font-semibold ml-1 text-[rgb(183,29,24)]">
                  - 6.6%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[270px]">
          <Line {...config} />
        </div>
      </div>
    </Card>
  );
};

export default TotalBalance;
