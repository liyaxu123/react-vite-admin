import Card from "@/components/card";
import { useSettings } from "@/store/settingStore";
import { ThemeMode } from "@/types/enum";
import { Pie } from "@ant-design/plots";
import { theme } from "antd";

const CurrentDownloadCard = () => {
  const settings = useSettings();
  const { token } = theme.useToken();

  const config = {
    data: [
      { type: "Android", value: 78343 },
      { type: "iOS", value: 44313 },
      { type: "Window", value: 53345 },
      { type: "Mac", value: 12244 },
    ],
    margin: 0,
    padding: 0,
    inset: 0,
    angleField: "value",
    colorField: "type",
    innerRadius: 0.7,
    theme: settings.themeMode === ThemeMode.Dark ? "classicDark" : "classic",
    annotations: [
      {
        type: "text",
        style: {
          text: "总计\n188,245",
          x: "50%",
          y: "50%",
          textAlign: "center",
          fontSize: 16,
          fontStyle: "bold",
          fill: token.colorText,
        },
      },
    ],
    tooltip: {
      title: "type",
    },
    interaction: {
      elementHighlight: true,
    },
    state: {
      inactive: { opacity: 0.5 },
    },
    style: {
      fill: ({ type }: { type: string }) => {
        if (type === "Android") return "rgb(22 101 52 / 1)";
        if (type === "iOS") return "rgb(22 163 74 / 1)";
        if (type === "Window") return "rgb(74 222 128 / 1)";
        if (type === "Mac") return "rgb(187 247 208 / 1)";
      },
    },
  };

  return (
    <Card className="h-[510px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="px-6 pt-6">
          <div className="text-[18px] font-bold">当前下载</div>
          <div className="text-[rgb(99,115,129)] mt-1">通过操作系统下载</div>
        </div>
        <div className="w-[260px] h-[260px] mx-auto my-12">
          <Pie {...config} />
        </div>
        <hr className="border-dashed border-color-border-secondary" />
        <div className="flex items-center justify-center gap-4 p-6">
          <div className="flex gap-[6px] items-center justify-center">
            <span className="w-3 h-3 bg-green-200 rounded-full"></span>
            <span className="font-bold text-[rgb(28,37,46)]">Mac</span>
          </div>
          <div className="flex gap-[6px] items-center justify-center">
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            <span className="font-bold text-[rgb(28,37,46)]">Window</span>
          </div>
          <div className="flex gap-[6px] items-center justify-center">
            <span className="w-3 h-3 bg-green-600 rounded-full"></span>
            <span className="font-bold text-[rgb(28,37,46)]">iOS</span>
          </div>
          <div className="flex gap-[6px] items-center justify-center">
            <span className="w-3 h-3 bg-green-800 rounded-full"></span>
            <span className="font-bold text-[rgb(28,37,46)]">Android</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CurrentDownloadCard;
