import Card from "@/components/card";
import CountUp from "react-countup";
import { Button } from "antd";
import { Iconify } from "@/components/icon";
import { PlusOutlined } from "@ant-design/icons";
import { Segmented, Avatar } from "antd";

const TotalBalance = () => {
  return (
    <Card>
      <div className="w-full">
        <div className="flex justify-between w-full">
          <div>
            <div className="text-[rgb(99,115,129)] font-semibold mb-2">
              总资产
            </div>
            <div className="h-12">
              <CountUp
                end={980989}
                prefix="￥"
                className="font-bold text-[32px]"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              color="default"
              variant="filled"
              autoInsertSpace={false}
              icon={<Iconify icon="solar:arrow-up-linear" size={16} />}
              className="font-bold"
            >
              发送
            </Button>
            <Button
              color="default"
              variant="filled"
              autoInsertSpace={false}
              icon={<PlusOutlined />}
              className="font-bold"
            >
              添加卡片
            </Button>
            <Button
              color="default"
              variant="filled"
              autoInsertSpace={false}
              icon={<Iconify icon="solar:arrow-down-outline" size={16} />}
              className="font-bold"
            >
              要求
            </Button>
          </div>
        </div>

        <Segmented
          className="w-full p-2 mt-4 rounded-2xl"
          block
          options={[
            {
              label: (
                <div className="p-6">
                  <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                  <div>User 1</div>
                </div>
              ),
              value: "user1",
              className: "!rounded-2xl",
            },
            {
              label: (
                <div className="p-6 rounded-2xl">
                  <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                  <div>User 2</div>
                </div>
              ),
              value: "user2",
              className: "!rounded-2xl",
            },
          ]}
          onChange={(value) => {
            console.log(value); // string
          }}
        />
      </div>
    </Card>
  );
};

export default TotalBalance;
