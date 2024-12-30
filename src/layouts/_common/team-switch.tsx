import { useMemo, useState } from "react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { Iconify } from "@/components/icon";
import team1 from "@/assets/images/team-1.webp";
import team2 from "@/assets/images/team-2.webp";
import team3 from "@/assets/images/team-3.webp";

const list = [
  {
    id: "1",
    name: "Team 1",
    icon: team1,
    type: "Free",
  },
  {
    id: "2",
    name: "Team 2",
    icon: team2,
    type: "Pro",
  },
  {
    id: "3",
    name: "Team 3",
    icon: team3,
    type: "Pro",
  },
];

const TeamSwitch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");

  const items: MenuProps["items"] = list.map((item) => ({
    key: item.id,
    label: (
      <div className="flex items-center justify-between">
        <span className="flex items-center h-full font-medium">
          {item.name}
        </span>
        <span
          className={`px-2 text-[#637381] bg-[${
            item.type === "Free"
              ? "rgba(145,158,171,0.16)"
              : "rgba(0,184,217,0.16)"
          }] rounded-md flex items-center h-[22px] font-bold`}
        >
          {item.type}
        </span>
      </div>
    ),
    icon: <img width={24} src={item.icon} />,
  }));

  const selectedItem = useMemo(() => {
    return list.find((item) => item.id === selectedKey);
  }, [selectedKey]);

  return (
    <Dropdown
      arrow
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: [selectedKey],
        onClick: ({ key }) => {
          setSelectedKey(key);
        },
      }}
      align={{ offset: [-10, 6] }}
      trigger={["click"]}
      overlayClassName="lyx-dropdown"
      overlayStyle={{ minWidth: 248 }}
      onOpenChange={(open: boolean) => setIsOpen(open)}
    >
      <div className="relative w-auto h-8 rounded-lg cursor-pointer">
        {/* 背景层 */}
        <div
          className={`w-[calc(100%+8px)] h-full bg-[#63738114] absolute -left-1 rounded-lg ${
            isOpen ? "" : "hidden"
          }`}
        ></div>

        {/* 内容 */}
        <div className="flex items-center justify-between w-full h-full gap-2">
          <div className="flex items-center flex-1 h-full gap-2">
            <img width={24} src={selectedItem?.icon} />
            <span className="flex items-center h-full font-medium">
              {selectedItem?.name}
            </span>
            <span
              className={`px-2 text-[#637381] bg-[${
                selectedItem?.type === "Free"
                  ? "rgba(145,158,171,0.16)"
                  : "rgba(0,184,217,0.16)"
              }] rounded-md flex items-center h-[22px] font-bold`}
            >
              {selectedItem?.type}
            </span>
          </div>

          <Iconify
            icon="gravity-ui:chevrons-expand-vertical"
            size={14}
            color="#919EAB"
          />
        </div>
      </div>
    </Dropdown>
  );
};

export default TeamSwitch;
