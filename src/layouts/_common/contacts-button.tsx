import { IconButton, Iconify } from "@/components/icon";
import { Popover, Menu, Avatar, Badge, ConfigProvider } from "antd";
import { ClockCircleFilled, MinusCircleFilled } from "@ant-design/icons";
import SimpleBar from "simplebar-react";

import avatar1 from "@/assets/images/avatar-1.webp";
import avatar2 from "@/assets/images/avatar-2.webp";
import avatar3 from "@/assets/images/avatar-3.webp";
import avatar4 from "@/assets/images/avatar-4.webp";
import avatar5 from "@/assets/images/avatar-5.webp";
import avatar6 from "@/assets/images/avatar-6.webp";
import avatar7 from "@/assets/images/avatar-7.webp";
import avatar8 from "@/assets/images/avatar-8.webp";
import avatar9 from "@/assets/images/avatar-9.webp";
import avatar10 from "@/assets/images/avatar-10.webp";
import avatar11 from "@/assets/images/avatar-11.webp";
import avatar12 from "@/assets/images/avatar-12.webp";
import avatar13 from "@/assets/images/avatar-13.webp";
import avatar14 from "@/assets/images/avatar-14.webp";
import avatar15 from "@/assets/images/avatar-15.webp";
import avatar16 from "@/assets/images/avatar-16.webp";
import avatar17 from "@/assets/images/avatar-17.webp";
import avatar18 from "@/assets/images/avatar-18.webp";
import avatar19 from "@/assets/images/avatar-19.webp";
import avatar20 from "@/assets/images/avatar-20.webp";

const contacts = [
  {
    name: "Jayvion Simon",
    avatar: avatar1,
    status: "online",
  },
  {
    name: "Lucian Obrien",
    avatar: avatar2,
    status: "online",
  },
  {
    name: "Deja Brady",
    avatar: avatar3,
    status: "waiting",
  },
  {
    name: "Zain Chen",
    avatar: avatar4,
    status: "offline",
  },
  {
    name: "Amelia Patel",
    avatar: avatar5,
    status: "online",
  },
  {
    name: "Kai Nakamura",
    avatar: avatar6,
    status: "online",
  },
  {
    name: "Freya Andersen",
    avatar: avatar7,
    status: "online",
  },
  {
    name: "Omar Al-Farsi",
    avatar: avatar8,
    status: "offline",
  },
  {
    name: "Lena Schmidt",
    avatar: avatar9,
    status: "online",
  },
  {
    name: "Mateo Rodriguez",
    avatar: avatar10,
    status: "online",
  },
  {
    name: "Aisha Nkosi",
    avatar: avatar11,
    status: "online",
  },
  {
    name: "Yuki Tanaka",
    avatar: avatar12,
    status: "offline",
  },
  {
    name: "Soren Larsen",
    avatar: avatar13,
    status: "online",
  },
  {
    name: "Zara Malik",
    avatar: avatar14,
    status: "online",
  },
  {
    name: "Liam O'Connor",
    avatar: avatar15,
    status: "online",
  },
  {
    name: "Mei Ling",
    avatar: avatar16,
    status: "offline",
  },
  {
    name: "Ava Kowalski",
    avatar: avatar17,
    status: "online",
  },
  {
    name: "Raj Patel",
    avatar: avatar18,
    status: "online",
  },
  {
    name: "Sofia Morales",
    avatar: avatar19,
    status: "online",
  },
  {
    name: "Elijah Nguyen",
    avatar: avatar20,
    status: "offline",
  },
];

const statusIcon: any = {
  online: <div className="w-2.5 h-2.5 rounded-full bg-[rgb(34,197,94)]"></div>,
  waiting: (
    <ClockCircleFilled style={{ color: "rgb(255, 171, 0)", fontSize: 10 }} />
  ),
  offline: (
    <MinusCircleFilled style={{ color: "rgb(255, 86, 48)", fontSize: 10 }} />
  ),
};

const ContactsButton = () => {
  const items = contacts.map((item, index) => {
    return {
      label: (
        <div className="flex items-center gap-4">
          <Badge offset={[-4, 32]} count={statusIcon[item.status]}>
            <Avatar size={40} src={<img src={item.avatar} alt="头像" />} />
          </Badge>
          {item.name}
        </div>
      ),
      key: "" + index,
    };
  });

  const content = (
    <SimpleBar className="h-[320px]">
      <ConfigProvider
        theme={{
          token: {},
          components: {
            Menu: {
              itemHeight: 56,
            },
          },
        }}
      >
        <Menu
          selectable={false}
          items={items}
          style={{ borderInlineEnd: "none", background: "transparent" }}
        />
      </ConfigProvider>
    </SimpleBar>
  );

  return (
    <IconButton className="w-10 h-10">
      <Popover
        placement="bottomLeft"
        content={content}
        title={
          <h6 className="p-4 pb-3 h-[56px] text-[18px] font-semibold w-[320px]">
            联系人 (20)
          </h6>
        }
        trigger="click"
        overlayClassName="lyx-popover"
      >
        <Iconify
          icon="solar:users-group-rounded-bold-duotone"
          size={24}
          color="rgb(99, 115, 129)"
          className="transition-all hover:scale-110"
        />
      </Popover>
    </IconButton>
  );
};

export default ContactsButton;
