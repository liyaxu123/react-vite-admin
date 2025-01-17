import React from "react";
import { cn } from "@/utils";
import { useSettings } from "@/store/settingStore";
import { motion } from "motion/react";
import { getVariant, AnimateEnum } from "@/components/animate/variants";

interface Props {
  children: React.ReactNode;
  // 页面正常状态（无拉伸）的样式类名
  normalClassName?: string;
}

const PageContainer: React.FC<Props> = ({ children, normalClassName }) => {
  const settings = useSettings();

  // xl:max-w-[1200px] 2xl:max-w-[1536px]
  return (
    <div
      className={cn(
        "m-auto min-h-full w-full flex-grow sm:px-10 sm:pt-2 sm:pb-16 transition-all duration-1000",
        settings.themeStretch ? normalClassName : ""
      )}
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
        variants={getVariant(AnimateEnum.fadeInLeft)}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageContainer;
