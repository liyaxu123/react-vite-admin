import React from "react";
import Card from "@/components/card";
import { Iconify } from "@/components/icon";
import CountUp from "react-countup";

type Props = {
  title: string;
  increase: boolean;
  percent: string;
  count: number;
  chartData: number[];
};

const TotalCard: React.FC<Props> = ({
  title,
  increase,
  percent,
  count,
  chartData,
}) => {
  return (
    <Card>
      <div className="h-[114px] flex items-center w-full">
        <div className="flex-1 h-full">
          <div className="text-[rgb(28,37,46)] font-semibold">{title}</div>
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
            <span className="text-[rgb(99,115,129)]">last 7 days</span>
          </div>
        </div>
        <div className="h-10 bg-red-400 w-[60px]">{chartData}</div>
      </div>
    </Card>
  );
};

export default TotalCard;
