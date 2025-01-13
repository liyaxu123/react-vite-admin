import { Layout, theme } from "antd";
const { Header: AntdHeader } = Layout;
import { IconButton, Iconify } from "@/components/icon";
import SettingButton from "@/layouts/_common/setting-button";
import AccountDropdown from "@/layouts/_common/account-dropdown";
import NoticeButton from "@/layouts/_common/notice";
import SearchButton from "@/layouts/_common/search-button";
import TeamSwitch from "@/layouts/_common/team-switch";
import ContactsButton from "@/layouts/_common/contacts-button";
import useDynamicTheme from "@/hooks/useDynamicTheme";

const Header = () => {
  const { token } = theme.useToken();
  const headerStyle = useDynamicTheme({
    dark: {
      backgroundColor: token.colorBgContainer,
    },
    light: {
      backgroundColor: "rgba(249,250,251,0.8)",
    },
  });

  return (
    <AntdHeader
      className={`h-[72px] flex items-center justify-between backdrop-blur-[6px] sticky top-0 left-auto right-0 z-50 px-10`}
      style={headerStyle}
    >
      <div>
        <TeamSwitch />
      </div>
      <div className="flex items-center h-full gap-2">
        <SearchButton />
        <IconButton className="w-10 h-10">
          <Iconify
            icon="ant-design:github-filled"
            size={24}
            color="rgb(99, 115, 129)"
            className="transition-all hover:scale-110"
          />
        </IconButton>
        <NoticeButton />
        <ContactsButton />
        <SettingButton />
        <AccountDropdown />
      </div>
    </AntdHeader>
  );
};

export default Header;
