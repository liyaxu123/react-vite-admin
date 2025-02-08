import { useState } from "react";
import Card from "@/components/card";
import SimpleBar from "simplebar-react";
import { Checkbox, Dropdown } from "antd";
import { Iconify, IconButton } from "@/components/icon";
import { cn } from "@/utils";
import confetti from "canvas-confetti";

const data = [
  {
    title: "准备月度财务报告",
    checked: false,
  },
  {
    title: "设计新的营销活动",
    checked: true,
  },
  {
    title: "分析客户反馈",
    checked: false,
  },
  {
    title: "更新网站内容",
    checked: false,
  },
  {
    title: "进行市场调研",
    checked: false,
  },
  {
    title: "进行销售分析",
    checked: false,
  },
  {
    title: "进行客户分析",
    checked: false,
  },
];

const Tasks = () => {
  const [tasks, setTasks] = useState(data);

  const confettiEffect = () => {
    const canvas = document.getElementById("confetti-canvas") as any;
    canvas.confetti =
      canvas.confetti || confetti.create(canvas, { resize: true });

    canvas.confetti({
      spread: 70,
      origin: { y: 1.2 }, // 控制粒子的发射位置
    });
  };

  return (
    <Card className="h-[382px]">
      <canvas
        id="confetti-canvas"
        className="absolute top-0 left-0 w-full h-full"
      ></canvas>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="px-6 pt-6 mb-2">
          <div className="text-[18px] font-bold">代办清单</div>
        </div>

        <div className="h-[320px]">
          <SimpleBar className="h-full">
            {tasks.map((item, index) => (
              <div
                key={item.title}
                className="flex items-center py-3 pl-4 pr-2 cursor-pointer"
                style={{
                  borderBottom:
                    index !== data.length - 1
                      ? "1px dashed var(--ant-color-border-secondary)"
                      : "none",
                }}
              >
                <div
                  className="flex items-center flex-1"
                  onClick={() => {
                    setTasks((prevTasks) =>
                      prevTasks.map((task, i) =>
                        i === index ? { ...task, checked: !task.checked } : task
                      )
                    );
                    confettiEffect();
                  }}
                >
                  <div className="flex items-center justify-center w-9 h-9">
                    <Checkbox checked={item.checked} />
                  </div>
                  <div
                    className={cn(
                      "flex-1",
                      item.checked ? "line-through text-[rgb(145,158,171)]" : ""
                    )}
                  >
                    {item.title}
                  </div>
                </div>
                <Dropdown
                  placement="bottomCenter"
                  trigger={["click"]}
                  arrow
                  menu={{
                    items: [
                      {
                        key: "1",
                        label: "标记完成",
                        icon: (
                          <Iconify icon="solar:check-circle-bold" size={20} />
                        ),
                      },
                      {
                        key: "2",
                        label: "编辑",
                        icon: <Iconify icon="solar:pen-bold" size={20} />,
                      },
                      {
                        key: "3",
                        label: "分享",
                        icon: <Iconify icon="solar:share-bold" size={20} />,
                      },
                      {
                        type: "divider",
                      },
                      {
                        key: "4",
                        label: "删除",
                        danger: true,
                        icon: (
                          <Iconify
                            icon="solar:trash-bin-trash-bold"
                            size={20}
                          />
                        ),
                      },
                    ],
                  }}
                >
                  <div className="flex justify-center">
                    <IconButton className="h-9 w-9">
                      <Iconify
                        icon="solar:menu-dots-bold"
                        size={20}
                        color="#637381"
                        className="rotate-90"
                      />
                    </IconButton>
                  </div>
                </Dropdown>
              </div>
            ))}
          </SimpleBar>
        </div>
      </div>
    </Card>
  );
};

export default Tasks;
