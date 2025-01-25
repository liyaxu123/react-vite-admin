import Card from "@/components/card";
import { Table, Tag, Dropdown, Button } from "antd";
import type { TableProps } from "antd";
import { RightOutlined } from "@ant-design/icons";

import { Iconify, IconButton } from "@/components/icon";

const data = [
  {
    key: "1",
    invoiceID: "INV-1990",
    category: "Android",
    price: 83.74,
    status: "Paid",
  },
  {
    key: "2",
    invoiceID: "INV-1991",
    category: "Mac",
    price: 97.14,
    status: "Out of date",
  },
  {
    key: "3",
    invoiceID: "INV-1992",
    category: "Windows",
    price: 68.71,
    status: "Progress",
  },
  {
    key: "4",
    invoiceID: "INV-1993",
    category: "Android",
    price: 85.21,
    status: "Paid",
  },
  {
    key: "5",
    invoiceID: "INV-1994",
    category: "Mac",
    price: 52.17,
    status: "Paid",
  },
];

interface DataType {
  key: string;
  invoiceID: string;
  category: string;
  price: number;
  status: string;
}

const NewInvoice = () => {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Invoice ID",
      dataIndex: "invoiceID",
      key: "invoiceID",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => {
        return `￥${text}`;
      },
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => {
        const co: any = {
          Paid: {
            color: "rgb(17, 141, 87)",
            bg: "rgba(34, 197, 94, 0.16)",
          },
          "Out of date": {
            color: "rgb(183, 29, 24)",
            bg: "rgba(255, 86, 48, 0.16)",
          },
          Progress: {
            color: "rgb(183, 110, 0)",
            bg: "rgba(255, 171, 0, 0.16)",
          },
        };
        return (
          <Tag
            style={{
              height: 24,
              color: co[status].color,
              backgroundColor: co[status].bg,
              border: "none",
              padding: "0 6px",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: () => (
        <Dropdown
          placement="bottomCenter"
          trigger={["click"]}
          arrow
          menu={{
            items: [
              {
                key: "1",
                label: "Download",
                icon: <Iconify icon="solar:cloud-download-bold" size={20} />,
              },
              {
                key: "2",
                label: "Print",
                icon: <Iconify icon="solar:printer-bold" size={20} />,
              },
              {
                key: "3",
                label: "Share",
                icon: <Iconify icon="solar:share-bold" size={20} />,
              },
              {
                type: "divider",
              },
              {
                key: "4",
                label: "Delete",
                danger: true,
                icon: <Iconify icon="solar:trash-bin-trash-bold" size={20} />,
              },
            ],
          }}
        >
          <div className="flex justify-center">
            <IconButton className="h-7 w-7">
              <Iconify
                icon="solar:menu-dots-bold"
                size={20}
                color="#637381"
                className="rotate-90"
              />
            </IconButton>
          </div>
        </Dropdown>
      ),
    },
  ];

  return (
    <Card className="h-[518px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="p-6 pb-0 mb-6 font-bold text-[18px] h-13">
          New invoice
        </div>

        <Table columns={columns} dataSource={data} pagination={false} />

        <div className="flex items-center justify-end p-6">
          <Button>
            View all <RightOutlined style={{ fontSize: 12 }} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default NewInvoice;
