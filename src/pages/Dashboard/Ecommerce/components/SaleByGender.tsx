import Card from "@/components/card";
import { useSettings } from "@/store/settingStore";
import { ThemeMode } from "@/types/enum";
import { RadialBar } from "@ant-design/plots";
import { theme } from "antd";

const SaleByGender = () => {
  const settings = useSettings();
  const { token } = theme.useToken();

  const config = {
    data: [
      { name: "男士", star: 25 },
      { name: "女士", star: 50 },
      { name: "儿童", star: 75 },
    ],
    xField: "name",
    yField: "star",
    padding: 0,
    margin: 0,
    theme: settings.themeMode === ThemeMode.Dark ? "classicDark" : "classic",
    maxAngle: 380,
    radius: 1,
    innerRadius: 0.3,
    tooltip: {
      items: ["star"],
    },
    legend: false,
    axis: {
      y: false,
    },
    markBackground: {
      opacity: 0.25,
    },
    scale: {
      y: {
        domain: [0, 100], // 设定范围用于背景图的渲染获取最大值
      },
    },
    sizeField: 50,
    style: {
      radius: 180,
      fill: ({ name }: { name: string }) => {
        if (name === "男士") {
          return `linear-gradient(to left, #5be49b, ${token.colorPrimary})`;
        } else if (name === "女士") {
          return "linear-gradient(to left, #fddc83, #fdba32)";
        }
        return "linear-gradient(to left, #fdbb9a, #fd9b7b)";
      },
    },
  };

  return (
    <Card className="h-[472.5px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="px-6 pt-6">
          <div className="text-[18px] font-bold">按性别销售</div>
        </div>
        <div className="w-[320px] h-[320px] mx-auto my-3">
          <RadialBar {...config} />
        </div>
        <hr className="border-dashed border-color-border-secondary" />
        <div className="flex items-center justify-center gap-4 p-6">
          <div className="flex gap-[6px] items-center justify-center">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: token.colorPrimary }}
            ></span>
            <span className="font-bold text-[rgb(28,37,46)] dark:text-white">
              男士
            </span>
          </div>
          <div className="flex gap-[6px] items-center justify-center">
            <span className="w-3 h-3 bg-[#ffbc33] rounded-full"></span>
            <span className="font-bold text-[rgb(28,37,46)] dark:text-white">
              女士
            </span>
          </div>
          <div className="flex gap-[6px] items-center justify-center">
            <span className="w-3 h-3 bg-[#ff7859] rounded-full"></span>
            <span className="font-bold text-[rgb(28,37,46)] dark:text-white">
              儿童
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SaleByGender;
