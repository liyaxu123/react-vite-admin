import Card from "@/components/card";
import { Progress, ConfigProvider } from "antd";
import CountUp from "react-countup";
import { Iconify } from "@/components/icon";
import { motion } from "motion/react";

const Applications = () => {
  return (
    <Card className="h-[128px]">
      <div className="absolute top-0 left-0 w-full h-full bg-[rgb(0,108,156)] flex gap-6 p-6 items-center">
        <div className="relative flex items-center justify-center w-20 h-20">
          <ConfigProvider
            theme={{
              components: {
                Progress: {
                  circleTextColor: "#fff",
                },
              },
            }}
          >
            <Progress
              type="circle"
              percent={75}
              size={80}
              strokeLinecap="round"
              trailColor="rgba(255,255,255,0.1)"
              strokeWidth={10}
              strokeColor="#23cee2"
              style={{
                position: "relative",
                zIndex: 1,
              }}
            />
          </ConfigProvider>

          {/* 遮罩层 */}
          <motion.span
            className="w-[200px] h-[200px] absolute bg-[rgb(97,243,243)]"
            style={{
              mask: "url(/src/assets/images/shape-circle-3.svg) center center / contain no-repeat",
            }}
            animate={{
              scale: [1, 2, 1],
              rotate: [360, 180, 0],
              opacity: [0.05, 0.5, 0.05],
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              // 设置 opacity 的过渡效果
              opacity: {
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          ></motion.span>
        </div>
        <div className="h-[58px] w-[86.5px]">
          <div className="text-2xl font-bold text-white">
            <CountUp end={55566} />
          </div>
          <div className="font-semibold text-white opacity-[0.64]">
            Applications
          </div>
        </div>
        <div className="absolute text-white -right-10 opacity-[0.08]">
          <Iconify icon="solar:letter-bold" size={120} />
        </div>
      </div>
    </Card>
  );
};

export default Applications;
