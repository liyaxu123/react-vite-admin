import { useState } from "react";
import { Button, Menu, Tooltip, Drawer, Avatar, type MenuProps } from "antd";
import { NavLink } from "react-router";
import { motion } from "motion/react";
import { useRouter } from "@/router/hooks";
import { useUserActions, useUserInfo } from "@/store/userStore";
import { IconButton, Iconify } from "@/components/icon";
import defaultAvatar from "@/assets/images/avatar-25.webp";
import avatar2 from "@/assets/images/avatar-2.webp";
import avatar3 from "@/assets/images/avatar-3.webp";
import avatar4 from "@/assets/images/avatar-4.webp";
import huojian from "@/assets/images/huojian.webp";

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

const AccountDropdown = () => {
  const { replace } = useRouter();
  const { username, email, avatar } = useUserInfo();
  const { clearUserInfoAndToken } = useUserActions();
  const [open, setOpen] = useState(false);

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
          <div className="flex items-center gap-4">
            <Iconify
              icon="solar:document-add-bold-duotone"
              size={24}
              color="rgb(99, 115, 129)"
            />
            文档
          </div>
        </NavLink>
      ),
      key: "0",
      onClick: () => {
        setOpen(false);
      },
    },
    {
      label: (
        <NavLink to={HOMEPAGE}>
          <div className="flex items-center gap-4">
            <Iconify
              icon="solar:home-angle-bold-duotone"
              size={24}
              color="rgb(99, 115, 129)"
            />
            首页
          </div>
        </NavLink>
      ),
      key: "1",
      onClick: () => {
        setOpen(false);
      },
    },
    {
      label: (
        <div className="flex items-center gap-4">
          <Iconify
            icon="solar:notes-bold-duotone"
            size={24}
            color="rgb(99, 115, 129)"
          />
          项目
          <div className="rounded-md bg-[rgba(255,86,48,0.16)] w-6 h-6 flex items-center justify-center text-xs font-bold text-[rgb(183,29,24)]">
            3
          </div>
        </div>
      ),
      key: "2",
      onClick: () => {
        setOpen(false);
      },
    },
    {
      label: (
        <div className="flex items-center gap-4">
          <Iconify
            icon="solar:shield-keyhole-bold-duotone"
            size={24}
            color="rgb(99, 115, 129)"
          />
          锁屏
        </div>
      ),
      key: "4",
      onClick: () => {
        setOpen(false);
      },
    },
    {
      label: (
        <div className="flex items-center gap-4">
          <Iconify
            icon="solar:settings-bold-duotone"
            size={24}
            color="rgb(99, 115, 129)"
          />
          账户设置
        </div>
      ),
      key: "5",
      onClick: () => {
        setOpen(false);
      },
    },
  ];

  return (
    <>
      <IconButton className="w-10 h-10 p-0" onClick={() => setOpen(true)}>
        <Avatar
          className="cursor-pointer"
          size={40}
          src={<img src={avatar || defaultAvatar} alt="头像" />}
        />
      </IconButton>

      <Drawer
        closeIcon={null}
        open={open}
        width={320}
        classNames={{
          body: "lyx-account-drawer-body",
        }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="p-3 mb-2">
          <IconButton className="w-8 h-8" onClick={() => setOpen(false)}>
            <Iconify
              icon="material-symbols:close-rounded"
              size={20}
              color="rgb(99, 115, 129)"
            />
          </IconButton>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="p-1 mb-4 overflow-hidden rounded-full"
            style={{ boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.1)" }}
          >
            <Avatar
              size={84}
              src={<img src={avatar || defaultAvatar} alt="头像" />}
            />
          </div>
          <h6 className="mt-4 text-xl font-semibold">{username}</h6>
          <p className="mt-1 text-[14px] text-[#637381]">{email}</p>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-2 p-6">
          <Tooltip title="切换到：Lucian Obrien" placement="bottom">
            <Avatar size={40} src={<img src={avatar2} alt="头像" />} />
          </Tooltip>
          <Tooltip title="切换到：Deja Brady" placement="bottom">
            <Avatar size={40} src={<img src={avatar3} alt="头像" />} />
          </Tooltip>
          <Tooltip title="切换到：哈利撒旦" placement="bottom">
            <Avatar size={40} src={<img src={avatar4} alt="头像" />} />
          </Tooltip>
          <Tooltip title="添加账户" placement="bottom">
            <div className="rounded-full bg-[rgba(145,158,171,0.08)] flex items-center justify-center w-10 h-10 cursor-pointer border-dashed border border-[rgba(145,158,171,0.32)]">
              <Iconify
                icon="ant-design:plus-outlined"
                size={20}
                color="rgb(99, 115, 129)"
              />
            </div>
          </Tooltip>
        </div>

        <div className="px-5 py-6 border-dashed border-y border-[rgba(145,158,171,0.2)]">
          <Menu
            items={items}
            style={{ borderInlineEnd: "none" }}
            className="bg-color-bg-elevated"
          />
        </div>

        <div className="px-5 py-6">
          <div
            className="px-6 py-8 h-[164px] rounded-2xl flex items-center justify-between"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(255, 172, 130, 0.92), rgba(81, 25, 183, 0.92)), url(https://assets.minimals.cc/public/assets/background/background-7.webp)",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <div>
              <p className="text-[19px] text-white font-bold">35% 折扣</p>
              <p className="mt-1 mb-4 text-white">提高生产力!</p>
              <Button type="primary" size="small">
                升级至专业版
              </Button>
            </div>
            <motion.div
              animate={{ y: [0, 10, 0, -10, 0] }}
              transition={{
                duration: 5,
                ease: "linear",
                times: [0, 0.25, 0.5, 0.75, 1],
                repeat: Infinity,
              }}
            >
              <img
                src={huojian}
                alt="小火箭"
                style={{ width: 112, height: 112 }}
              />
            </motion.div>
          </div>
        </div>

        <div className="p-5">
          <Button
            block
            type="primary"
            style={{
              height: 48,
              backgroundColor: "rgba(255, 86, 48, 0.16)",
              color: "rgb(183, 29, 24)",
              fontWeight: 700,
            }}
            onClick={logout}
          >
            退出登录
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default AccountDropdown;
