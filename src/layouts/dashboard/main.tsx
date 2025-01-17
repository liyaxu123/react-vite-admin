import { Outlet } from "react-router";
import SimpleBar from "simplebar-react";
import MotionContainer from "@/components/animate/motion-container";

const Main = () => {
  return (
    <div className="w-full bg-[rgba(249,250,251,0.8)] dark:bg-color-bg-container">
      <MotionContainer>
        <SimpleBar autoHide={false} className="h-full">
          <Outlet />
        </SimpleBar>
      </MotionContainer>
    </div>
  );
};

export default Main;
