import { Outlet } from "react-router";
import SimpleBar from "simplebar-react";
import MotionContainer from "@/components/animate/motion-container";

const Main = () => {
  return (
    <div className="w-full bg-color-bg-base">
      <MotionContainer>
        <SimpleBar autoHide={false} className="h-full">
          <Outlet />
        </SimpleBar>
      </MotionContainer>
    </div>
  );
};

export default Main;
