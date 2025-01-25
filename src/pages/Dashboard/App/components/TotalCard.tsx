import React from "react";
import Card from "@/components/card";
import { Iconify } from "@/components/icon";
import CountUp from "react-countup";
import { Column } from "@ant-design/plots";
import { useSettings } from "@/store/settingStore";
import { ThemeMode } from "@/types/enum";

type Props = {
  title: string;
  increase: boolean;
  percent: string;
  count: number;
  chartData: any[];
  chartColor: string;
};

const TotalCard: React.FC<Props> = ({
  title,
  increase,
  percent,
  count,
  chartData,
  chartColor,
}) => {
  const settings = useSettings();

  const config = {
    data: chartData,
    width: 60,
    height: 40,
    margin: 0,
    padding: 0,
    inset: 0,
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
    style: {
      fill: chartColor,
      maxWidth: 5,
      radiusTopLeft: 10,
      radiusTopRight: 10,
    },
  };

  return (
    <Card>
      <div className="h-[114px] flex items-center w-full">
        <div className="flex-1 h-full">
          <div className="text-[rgb(28,37,46)] dark:text-white font-semibold">
            {title}
          </div>
          <div className="text-[32px] font-bold mt-3 mb-2">
            <CountUp end={count} />
          </div>
          <div className="flex gap-1">
            <Iconify
              icon={
                increase
                  ? "solar:double-alt-arrow-up-bold-duotone"
                  : "solar:double-alt-arrow-down-bold-duotone"
              }
              size={24}
              color={
                increase ? "var(--ant-color-success)" : "var(--ant-color-error)"
              }
            />
            <span className="font-semibold">
              {`${increase ? "+" : "-"}${percent}`}
            </span>
            <span className="text-[rgb(99,115,129)]">过去 7 天</span>
          </div>
        </div>
        <div className="h-10 w-[60px]">
          <Column {...config} />
        </div>
      </div>
    </Card>
  );
};

export default TotalCard;
