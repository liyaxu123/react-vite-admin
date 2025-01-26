import React from "react";
import { Iconify } from "@/components/icon";
import CountUp from "react-countup";
import { Line } from "@ant-design/plots";
import { useSettings } from "@/store/settingStore";
import { ThemeMode } from "@/types/enum";
import { motion } from "motion/react";

type Props = {
  title: string;
  count: string;
  icon: string;
  percent: number;
  increase: boolean;
  lineData: any[];
  bgColor: string;
  textColor: string;
  lineColor: string;
};

const DataCard: React.FC<Props> = ({
  title,
  count,
  icon,
  percent,
  increase,
  lineData,
  lineColor,
  bgColor,
  textColor,
}) => {
  const settings = useSettings();

  const config = {
    data: lineData,
    width: 84,
    height: 56,
    margin: 0,
    padding: 0,
    inset: 0,
    shapeField: "smooth",
    xField: "label",
    yField: "value",
    theme: settings.themeMode === ThemeMode.Dark ? "classicDark" : "classic",
    axis: {
      x: {
        line: false,
        tick: false,
        tickFilter: false,
        label: false,
        grid: false,
      },
      y: {
        line: false,
        tick: false,
        tickFilter: false,
        label: false,
        grid: false,
      },
    },
    colorField: lineColor,
    style: {
      lineWidth: 3,
    },
  };

  return (
    <div
      className="h-[186px] p-6 rounded-2xl relative overflow-hidden bg-white"
      style={{ backgroundImage: bgColor, color: textColor }}
    >
      <div className="w-12 h-12 mb-6">
        <img src={icon} alt="icon" />
      </div>

      <div className="absolute top-4 right-4 gap-1 flex items-center w-[66px] h-[22px] z-10">
        <Iconify
          icon={
            increase
              ? "material-symbols:trending-up-rounded"
              : "material-symbols:trending-down-rounded"
          }
          size={20}
        />
        <CountUp
          end={percent}
          prefix={increase ? "+" : "-"}
          suffix="%"
          decimals={1}
          className="font-semibold"
        />
      </div>

      <div className="relative z-10 flex">
        <div className="min-w-[112px] flex-1">
          <div className="mb-2 font-semibold">{title}</div>
          <div className="text-2xl font-bold">{count}</div>
        </div>
        <div className="w-[84px] h-14">
          <Line {...config} />
        </div>
      </div>

      {/* 遮罩层 */}
      <motion.span
        className="w-[240px] h-[240px] absolute top-0 -left-5 bg-current"
        style={{
          mask: "url(/src/assets/images/shape-square.svg) center center / contain no-repeat",
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.28, 0.5, 0.28],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          // 设置 opacity 的过渡效果
          opacity: {
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      ></motion.span>
    </div>
  );
};

export default DataCard;
