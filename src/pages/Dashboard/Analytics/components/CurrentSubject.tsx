import Card from "@/components/card";
import { useSettings } from "@/store/settingStore";
import { ThemeMode } from "@/types/enum";
import { Pie } from "@ant-design/plots";

const CurrentSubject = () => {
  const settings = useSettings();
  const config = {
    data: {
      type: "fetch",
      value:
        "https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/pie-doughnut.json",
    },
    margin: 0,
    padding: 0,
    inset: 0,
    angleField: "value",
    colorField: "name",
    theme: settings.themeMode === ThemeMode.Dark ? "classicDark" : "classic",
    legend: false,
    innerRadius: 0.6,
    labels: [
      { text: "name", style: { fontSize: 10, fontWeight: "bold" } },
    ],
    style: {
      stroke: "#fff",
      inset: 1,
      radius: 10,
    },
    scale: {
      color: {
        palette: "spectral",
        offset: (t: number) => t * 0.8 + 0.1,
      },
    },
  };

  return (
    <Card className="h-[510px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="px-6 pt-6">
          <div className="text-[18px] font-bold">当前主题</div>
        </div>
        <div className="w-[300px] h-[300px] mx-auto my-12">
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

export default CurrentSubject;
