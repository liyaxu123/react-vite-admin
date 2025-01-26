import { Table, Avatar, Image } from "antd";
import Card from "@/components/card";
import CountUp from "react-countup";

const data = [
  {
    seller: "Jayvion Simon",
    avatarUrl: "/src/assets/images/avatar-2.webp",
    product: "CAP",
    country: "/src/assets/images/country/DE.svg",
    total: 83.74,
    rank: "Top 1",
  },
  {
    seller: "Lucian Obrien",
    avatarUrl: "/src/assets/images/avatar-3.webp",
    product: "CAP",
    country: "/src/assets/images/country/FR.svg",
    total: 97.14,
    rank: "Top 2",
  },
  {
    seller: "Deja Brady",
    avatarUrl: "/src/assets/images/avatar-4.webp",
    product: "Headphone",
    country: "/src/assets/images/country/GB.svg",
    total: 68.71,
    rank: "Top 3",
  },
  {
    seller: "Harrison Stein",
    avatarUrl: "/src/assets/images/avatar-5.webp",
    product: "Cell phone",
    country: "/src/assets/images/country/KR.svg",
    total: 85.21,
    rank: "Top 4",
  },
  {
    seller: "Reece Chung",
    avatarUrl: "/src/assets/images/avatar-6.webp",
    product: "Earings",
    country: "/src/assets/images/country/US.svg",
    total: 52.17,
    rank: "Top 5",
  },
];

const topColor: any = {
  "Top 1": "rgb(0, 120, 103)",
  "Top 2": "rgb(81, 25, 183)",
  "Top 3": "rgb(0, 108, 156)",
  "Top 4": "rgb(183, 110, 0)",
  "Top 5": "rgb(183, 29, 24)",
};
const topBg: any = {
  "Top 1": "rgba(0, 167, 111, 0.16)",
  "Top 2": "rgba(142, 51, 255, 0.16)",
  "Top 3": "rgba(0, 184, 217, 0.16)",
  "Top 4": "rgba(255, 171, 0, 0.16)",
  "Top 5": "rgba(255, 86, 48, 0.16)",
};
const BestSalesman = () => {
  const columns = [
    {
      title: "Seller",
      dataIndex: "seller",
      key: "seller",
      render: (text: string, recoder: any) => (
        <div className="flex items-center gap-4">
          <Avatar src={recoder.avatarUrl} size={40} />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      render: (text: string) => <Image src={text} width={40} preview={false} />,
    },
    {
      title: "Total",
      key: "total",
      dataIndex: "total",
      render: (text: number) => <CountUp end={text} decimals={2} prefix="$" />,
    },
    {
      title: "Rank",
      key: "rank",
      dataIndex: "rank",
      render: (text: string) => (
        <div
          className="font-bold text-xs px-[6px] h-6 inline-flex items-center rounded-md"
          style={{ backgroundColor: topBg[text], color: topColor[text] }}
        >
          {text}
        </div>
      ),
    },
  ];

  return (
    <Card className="h-[498px] relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="font-bold text-[18px] p-6 pb-0 mb-6">Best salesman</div>

        <div className="h-[422px]">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </Card>
  );
};

export default BestSalesman;
