import { Progress } from "antd";
import Card from "@/components/card";
import CountUp from "react-countup";

const data = [
  {
    title: "Total profit",
    percent: 10.1,
    value: 8374,
    color: "var(--ant-color-primary)",
  },
  {
    title: "Total income",
    percent: 13.6,
    value: 9715,
    color: "var(--ant-cyan)",
  },
  {
    title: "Total expenses",
    percent: 28.2,
    value: 6871,
    color: "var(--ant-color-warning)",
  },
];
const SalesOverview = () => {
  return (
    <Card className="h-[294px] relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="font-bold text-[18px] p-6 pb-0">Sales overview</div>

        <div className="px-6 py-8 h-[242px] flex flex-col gap-8">
          {data.map((item) => {
            return (
              <div key={item.title} className="h-[38px]">
                <div className="flex gap-1 mb-2">
                  <span className="flex-1 font-bold">{item.title}</span>
                  <span className="font-bold">
                    <CountUp end={item.value} prefix="$" />
                  </span>
                  <span className="text-[rgb(99,115,129)]">
                    ({item.percent}%)
                  </span>
                </div>
                <Progress
                  percent={item.percent}
                  showInfo={false}
                  strokeColor={item.color}
                  status="active"
                />
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default SalesOverview;
