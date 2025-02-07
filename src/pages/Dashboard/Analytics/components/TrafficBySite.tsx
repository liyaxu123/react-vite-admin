import Card from "@/components/card";
import {
  AlipayOutlined,
  WechatOutlined,
  TikTokOutlined,
  BilibiliOutlined,
} from "@ant-design/icons";
import CountUp from "react-countup";

const data = [
  {
    title: "支付宝",
    count: 9981,
    icon: <AlipayOutlined style={{ fontSize: 32, color: "#00A0EA" }} />,
  },
  {
    title: "微信",
    count: 1998,
    icon: <WechatOutlined style={{ fontSize: 32, color: "#28C445" }} />,
  },
  {
    title: "抖音",
    count: 2131,
    icon: <TikTokOutlined style={{ fontSize: 32, color: "#040000" }} />,
  },
  {
    title: "哔哩哔哩",
    count: 4345,
    icon: <BilibiliOutlined style={{ fontSize: 32, color: "#F16C8D" }} />,
  },
];

const TrafficBySite = () => {
  return (
    <Card>
      <div className="w-full">
        <div className="text-[18px] font-semibold mb-6">按网站划分的流量</div>
        <div className="h-[328px] grid grid-cols-2 gap-4">
          {data.map((item) => (
            <div
              key={item.title}
              className="py-5 border rounded-xl border-color-border-secondary flex flex-col items-center justify-center"
            >
              {item.icon}
              <CountUp
                end={item.count}
                className="mt-2 text-[18px] font-semibold"
              />
              <div className="text-[rgb(99,115,129)]">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default TrafficBySite;
