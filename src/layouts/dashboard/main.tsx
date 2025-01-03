import { Outlet } from "react-router";

const Main = () => {
  return (
    <div className="w-full h-full">
      <Outlet />
    </div>
  );
};

export default Main;
