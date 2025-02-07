import Card from "@/components/card";
import { Avatar, List, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 5",
  },
];

const News = () => {
  return (
    <Card>
      <div className="w-full">
        <div className="text-[18px] font-semibold mb-2">消息</div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item
              actions={[<span key="list-loadmore-edit">{index + 1}分钟</span>]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    shape="square"
                  />
                }
                title={<a>{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />

        <div className="flex justify-end items-center mt-2">
          <Button type="text">查看全部 <RightOutlined /></Button>
        </div>
      </div>
    </Card>
  );
};

export default News;
