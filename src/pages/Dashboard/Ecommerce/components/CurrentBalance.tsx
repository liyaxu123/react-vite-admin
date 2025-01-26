import { Button } from "antd";
import Card from "@/components/card";
import CountUp from "react-countup";

const CurrentBalance = () => {
  return (
    <Card className="h-[294px]">
      <div className="w-full h-full">
        <div className="mb-2 font-bold">Current balance</div>

        <div className="flex flex-col gap-4">
          <div className="text-[32px] font-bold">
            <CountUp end={187650} prefix="$" />
          </div>

          <div className="h-[22px] flex justify-between items-center">
            <span className="text-[rgb(99,115,129)]">Order total</span>
            <CountUp end={287650} prefix="$" />
          </div>
          <div className="h-[22px] flex justify-between items-center">
            <span className="text-[rgb(99,115,129)]">Earning</span>
            <CountUp end={25500} prefix="$" />
          </div>
          <div className="h-[22px] flex justify-between items-center">
            <span className="text-[rgb(99,115,129)]">Refunded</span>
            <CountUp end={1600} prefix="$" />
          </div>
          <div className="flex items-center justify-between gap-4 h-9">
            <Button type="primary" danger block>
              Request
            </Button>
            <Button type="primary" block>
              Transfer
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CurrentBalance;
