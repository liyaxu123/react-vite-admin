import { Layout } from "antd";
const { Sider } = Layout;

const Nav = () => {
  return (
    <Sider
      width={300}
      className="bg-white pt-5 pl-5 pr-5 border-r border-r-[rgba(145,158,171,0.08)]"
    >
      Sider
    </Sider>
  );
};

export default Nav;
