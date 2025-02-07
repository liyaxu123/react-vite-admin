import Card from "@/components/card";
import { useSettings } from "@/store/settingStore";
import { ThemeMode } from "@/types/enum";
import { Pie } from "@ant-design/plots";

const CurrentVisits = () => {
  const settings = useSettings();

  const config = {
    data: [
      { type: "上海", value: 78343 },
      { type: "北京", value: 44313 },
      { type: "深圳", value: 53345 },
      { type: "广州", value: 12244 },
    ],
    margin: 0,
    padding: 0,
    inset: 0,
    angleField: "value",
    colorField: "type",
    theme: settings.themeMode === ThemeMode.Dark ? "classicDark" : "classic",
    tooltip: {
      title: "type",
    },
    label: {
      text: "value",
      textAlign: "center",
      style: {
        fontWeight: 'bold',
      },
    },
    style: {
      fill: ({ type }: { type: string }) => {
        if (type === "上海") return "#00A76F";
        if (type === "北京") return "#FFD666";
        if (type === "深圳") return "#006C9C";
        if (type === "广州") return "#FF5630";
      },
    },
  };

  return (
    <Card className="h-[510px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="px-6 pt-6">
          <div className="text-[18px] font-bold">当前访问量</div>
        </div>
        <div className="w-[260px] h-[260px] mx-auto my-12">
          <Pie {...config} />
        </div>
        <hr className="border-dashed border-color-border-secondary" />
        <div className="flex items-center justify-center gap-4 p-6">
          <div className="flex gap-[6px] items-center justify-center">
            <span className="w-3 h-3 bg-[#00A76F] rounded-full"></span>
            <span className="font-bold text-[rgb(28,37,46)] dark:text-white">
              上海
            </span>
          </div>
          <div className="flex gap-[6px] items-center justify-center">
            <span className="w-3 h-3 bg-[#FFD666] rounded-full"></span>
            <span className="font-bold text-[rgb(28,37,46)] dark:text-white">
              北京
            </span>
          </div>
          <div className="flex gap-[6px] items-center justify-center">
            <span className="w-3 h-3 bg-[#006C9C] rounded-full"></span>
            <span className="font-bold text-[rgb(28,37,46)] dark:text-white">
              深圳
            </span>
          </div>
          <div className="flex gap-[6px] items-center justify-center">
            <span className="w-3 h-3 bg-[#FF5630] rounded-full"></span>
            <span className="font-bold text-[rgb(28,37,46)] dark:text-white">
              广州
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CurrentVisits;
