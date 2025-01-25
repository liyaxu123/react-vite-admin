import Card from "@/components/card";
import { Select, theme } from "antd";
import CountUp from "react-countup";
import { Area } from "@ant-design/plots";
import { ThemeMode } from "@/types/enum";
import { useSettings } from "@/store/settingStore";

const type = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const country = ["总收入", "总费用"];
const data: any = [];
country.forEach((co) => {
  type.forEach((item) => {
    data.push({
      year: item,
      country: co,
      value: Math.floor(Math.random() * 44) + 6,
    });
  });
});

const YearlySales = () => {
  const settings = useSettings();
  const { token } = theme.useToken();

  const config = {
    data,
    xField: "year",
    yField: "value",
    seriesField: "format",
    colorField: "group",
    shapeField: "smooth",
    stack: {
      orderBy: "maxIndex",
      reverse: true,
    },
    line: {
      style: {
        stroke: "darkgreen",
        strokeWidth: 40,
      },
    },
    theme: settings.themeMode === ThemeMode.Dark ? "classicDark" : "classic",
    axis: {
      y: {
        labelFormatter: "~s",
      },
    },
    style: {
      fill: ({ country }: { country: string }) => {
        if (country === "总收入") return token.colorPrimary;
        if (country === "总费用")
          return "linear-gradient(-90deg, white 0%, darkgreen 100%)";
      },
    },
  };

  return (
    <Card>
      <div className="w-full">
        <div className="flex justify-between mb-6">
          <div>
            <div className="text-[18px] font-bold">年销售额</div>
            <div className="text-[rgb(99,115,129)] mt-1">比去年高 （+43%）</div>
          </div>
          <Select
            defaultValue="2022"
            style={{ width: 85 }}
            onChange={() => {}}
            options={[
              { value: "2022", label: "2022" },
              { value: "2023", label: "2023" },
              { value: "2024", label: "2024" },
            ]}
          />
        </div>

        <div className="flex gap-6">
          <div>
            <div className="flex gap-[6px] items-center">
              <span className="w-3 h-3 rounded-full bg-color-primary"></span>
              <span className="text-[13px]">总收入</span>
            </div>
            <div className="font-bold text-[18px] mt-2">
              <CountUp end={1234} />
            </div>
          </div>
          <div>
            <div className="flex gap-[6px] items-center">
              <span className="w-3 h-3 rounded-full bg-[var(--ant-color-warning)]"></span>
              <span className="text-[13px]">总费用</span>
            </div>
            <div className="font-bold text-[18px] mt-2">
              <CountUp end={6789} />
            </div>
          </div>
        </div>

        <div className="mt-5 h-[300px]">
          <Area {...config} />
        </div>
      </div>
    </Card>
  );
};

export default YearlySales;
