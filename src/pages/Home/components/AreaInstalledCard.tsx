import Card from "@/components/card";
import { Select, theme } from "antd";
import CountUp from "react-countup";
import { Column } from "@ant-design/plots";
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
const country = ["亚洲", "欧洲", "美洲"];
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

const AreaInstalledCard = () => {
  const settings = useSettings();
  const { token } = theme.useToken();

  const config = {
    data,
    xField: "year",
    yField: "value",
    colorField: "country",
    theme: settings.themeMode === ThemeMode.Dark ? "classicDark" : "classic",
    stack: true,
    autoFit: true,
    padding: 12,
    inset: 0,
    axis: {
      y: {
        tick: false,
        gridStrokeOpacity: 0.2,
      },
      x: {
        tick: false,
      },
    },
    legend: false,
    style: {
      maxWidth: 25,
      radius: 5,
      fill: ({ country }: { country: string }) => {
        if (country === "亚洲") return token.colorPrimary;
        if (country === "欧洲") return token.colorWarning;
        if (country === "美洲") return "rgb(0,184,217)";
      },
    },
  };

  return (
    <Card>
      <div className="w-full">
        <div className="flex justify-between mb-6">
          <div>
            <div className="text-[18px] font-bold">区域安装</div>
            <div className="text-[rgb(99,115,129)] mt-1">
              较去年同期增加 43%
            </div>
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
              <span className="text-[13px]">亚洲</span>
            </div>
            <div className="font-bold text-[18px] mt-2">
              <CountUp end={1234} />
            </div>
          </div>
          <div>
            <div className="flex gap-[6px] items-center">
              <span className="w-3 h-3 rounded-full bg-[var(--ant-color-warning)]"></span>
              <span className="text-[13px]">欧洲</span>
            </div>
            <div className="font-bold text-[18px] mt-2">
              <CountUp end={6789} />
            </div>
          </div>
          <div>
            <div className="flex gap-[6px] items-center">
              <span className="w-3 h-3 rounded-full bg-[rgb(0,184,217)]"></span>
              <span className="text-[13px]">美洲</span>
            </div>
            <div className="font-bold text-[18px] mt-2">
              <CountUp end={1012} />
            </div>
          </div>
        </div>

        <div className="mt-5 h-[300px]">
          <Column {...config} />
        </div>
      </div>
    </Card>
  );
};

export default AreaInstalledCard;
