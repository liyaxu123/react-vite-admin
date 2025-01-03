import React from "react";
import { cn } from "@/utils";

interface Props {
  children: React.ReactNode;
  // 页面正常状态（无拉伸）的样式类名
  normalClassName?: string;
}

const PageContainer: React.FC<Props> = ({ children, normalClassName }) => {
  // 主题是否拉伸
  const themeStretch = true;

  // xl:max-w-[1200px] 2xl:max-w-[1536px]
  return (
    <div
      className={cn(
        "m-auto min-h-full w-full flex-grow sm:px-10 sm:pt-2 sm:pb-16 transition-all duration-1000",
        themeStretch ? "" : normalClassName
      )}
    >
      {children}
    </div>
  );
};

export default PageContainer;
