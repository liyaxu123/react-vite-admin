import { Outlet } from "react-router";

const Main = () => {
  return (
    <div className="px-10 pt-2 pb-16">
      <Outlet />
    </div>
  );
};

export default Main;
