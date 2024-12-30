import React from "react";
import {
  Dropdown,
  Avatar,
  Divider,
  theme,
  type MenuProps,
  type DropdownProps,
} from "antd";
import { NavLink } from "react-router";
import { useRouter } from "@/router/hooks";
import { useUserActions, useUserInfo } from "@/store/userStore";
import defaultAvatar from "@/assets/images/avatar-25.webp";

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

const AccountDropdown = () => {
  const { token } = theme.useToken();
  const { colorBgElevated, borderRadiusLG, boxShadowSecondary } = token;
  const { replace } = useRouter();
  const { username, email, avatar } = useUserInfo();
  const { clearUserInfoAndToken } = useUserActions();

  const logout = () => {
    try {
      clearUserInfoAndToken();
    } catch (error) {
      console.log(error);
    } finally {
      replace("/login");
    }
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <NavLink to="https://docs-admin.slashspaces.com/" target="_blank">
          文档
        </NavLink>
      ),
      key: "0",
    },
    {
      label: <NavLink to={HOMEPAGE}>仪表盘</NavLink>,
      key: "1",
    },
    {
      label: <NavLink to="/management/user/profile">个人资料</NavLink>,
      key: "2",
    },
    {
      label: <NavLink to="/management/user/account">账户</NavLink>,
      key: "3",
    },
    { type: "divider" },
    {
      label: (
        <button className="font-bold text-warning" type="button">
          退出
        </button>
      ),
      key: "4",
      onClick: logout,
    },
  ];

  const dropdownRender: DropdownProps["dropdownRender"] = (menu) => (
    <div
      style={{
        backgroundColor: colorBgElevated,
        borderRadius: borderRadiusLG,
        boxShadow: boxShadowSecondary,
      }}
    >
      <div className="flex flex-col items-start p-4">
        <div>{username}</div>
        <div className="text-gray">{email}</div>
      </div>
      <Divider style={{ margin: 0 }} />
      {React.cloneElement(menu as React.ReactElement, {
        style: {
          boxShadow: "none",
        },
      })}
    </div>
  );

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      dropdownRender={dropdownRender}
    >
      <Avatar className="cursor-pointer" size={40} src={<img src={avatar || defaultAvatar} alt="头像" />} />
    </Dropdown>
  );
};

export default AccountDropdown;
