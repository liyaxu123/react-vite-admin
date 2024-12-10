import { Layout } from "antd";
const { Header: AntdHeader } = Layout;

const Header = () => {
  return (
    <AntdHeader className="h-[72px] bg-[rgba(249,250,251,0.8)] backdrop-blur-[6px] sticky top-0 left-auto right-0 z-50">
      Header
    </AntdHeader>
  );
};

export default Header;
