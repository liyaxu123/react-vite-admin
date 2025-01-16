import { Outlet } from "react-router";
import SimpleBar from "simplebar-react";

const Main = () => {
  return (
    <div className="w-full h-full overflow-auto bg-[rgba(249,250,251,0.8)] dark:bg-color-bg-container">
      <SimpleBar autoHide={false} className="h-full">
        <Outlet />
      </SimpleBar>
    </div>
  );
};

export default Main;
