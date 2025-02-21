import { useState } from "react";
import Card from "@/components/card";
import CountUp from "react-countup";
import { Button } from "antd";
import { Iconify } from "@/components/icon";
import { PlusOutlined } from "@ant-design/icons";
import { motion } from "motion/react";
import { cn } from "@/utils";
import { Avatar } from "antd";
import { FallOutlined, RiseOutlined } from "@ant-design/icons";

const TotalBalance = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

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

        <div className="p-2 w-full h-[130px] bg-[rgb(244,246,248)] my-6 rounded-2xl relative">
          {/* 滑块 */}
          <div
            className={cn(
              "absolute top-0 left-0 w-full h-full p-2 flex items-center",
              isOn ? "justify-end" : "justify-start"
            )}
          >
            <motion.div
              layout
              transition={{
                type: "spring",
                visualDuration: 0.2,
                bounce: 0.2,
              }}
              className="w-1/2 h-full bg-white rounded-2xl"
            ></motion.div>
          </div>

          <div
            className="w-full h-full flex items-center justify-between absolute top-0 left-0 cursor-pointer p-2"
            onClick={toggleSwitch}
          >
            <div className="flex-1 h-full p-4 relative">
              <div className="h-full flex items-center gap-5">
                <Avatar
                  size={48}
                  icon={<FallOutlined />}
                  style={{ backgroundColor: "rgb(0, 75, 80)" }}
                />
                <div className={cn(!isOn ? "" : "text-[rgb(99,115,129)]")}>
                  <p className="font-semibold mb-2">收入</p>
                  <CountUp
                    end={9990}
                    className="font-bold text-2xl"
                    prefix="￥"
                  />
                </div>
              </div>
              <div className="absolute top-2 right-6 flex items-center px-[6px] bg-[rgba(34,197,94,0.16)] rounded-md">
                <Iconify
                  icon="solar:double-alt-arrow-up-bold-duotone"
                  size={16}
                  color="rgb(17,141,87)"
                />
                <span className="font-semibold ml-1 text-[rgb(17,141,87)]">
                  + 8.1%
                </span>
              </div>
            </div>
            <div className="flex-1 h-full p-4 relative">
              <div className="h-full flex items-center gap-5">
                <Avatar
                  size={48}
                  icon={<RiseOutlined />}
                  style={{ backgroundColor: "rgb(122, 65, 0)" }}
                />
                <div className={cn(isOn ? "" : "text-[rgb(99,115,129)]")}>
                  <p className="font-semibold mb-2">开支</p>
                  <CountUp
                    end={1989}
                    className="font-bold text-2xl"
                    prefix="￥"
                  />
                </div>
              </div>
              <div className="absolute top-2 right-6 flex items-center px-[6px] bg-[rgba(255,86,48,0.16)] rounded-md">
                <Iconify
                  icon="solar:double-alt-arrow-down-bold-duotone"
                  size={16}
                  color="rgb(183,29,24)"
                />
                <span className="font-semibold ml-1 text-[rgb(183,29,24)]">
                  - 6.6%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TotalBalance;
