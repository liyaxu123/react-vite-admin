import Card from "@/components/card";
import { Timeline } from "antd";

const OrderTimeline = () => {
  return (
    <Card>
      <div className="w-full">
        <div className="text-[18px] font-semibold mb-6">订单数据</div>
        <Timeline
          items={[
            {
              color: "green",
              children: (
                <>
                  <p className="font-semibold">2024 年，订单 4220 万元</p>
                  <p className="text-xs text-[rgb(145,158,171)] mt-1">
                    2025 年 2 月 7 日 晚上 9:55
                  </p>
                </>
              ),
            },
            {
              color: "rgb(34, 197, 94)",
              children: (
                <>
                  <p className="font-semibold">12 张发票已支付</p>
                  <p className="text-xs text-[rgb(145,158,171)] mt-1">
                    2025 年 2 月 6 日 晚上 8:55
                  </p>
                </>
              ),
            },
            {
              color: "rgb(0, 184, 217)",
              children: (
                <>
                  <p className="font-semibold">9 月份的订单号 #37745</p>
                  <p className="text-xs text-[rgb(145,158,171)] mt-1">
                    2025 年 2 月 5 日 晚上 7:55
                  </p>
                </>
              ),
            },
            {
              color: "gold",
              children: (
                <>
                  <p className="font-semibold">已下新订单 #XF-2356</p>
                  <p className="text-xs text-[rgb(145,158,171)] mt-1">
                    2025 年 2 月 5 日 晚上 7:55
                  </p>
                </>
              ),
            },
            {
              color: "red",
              children: (
                <>
                  <p className="font-semibold">已下新订单 #XF-2346</p>
                  <p className="text-xs text-[rgb(145,158,171)] mt-1">
                    2025 年 2 月 5 日 晚上 7:55
                  </p>
                </>
              ),
            },
          ]}
        />
      </div>
    </Card>
  );
};

export default OrderTimeline;
