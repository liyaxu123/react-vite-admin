import { Avatar } from "antd";
import Card from "@/components/card";
import { cn } from "@/utils";

const data = [
  {
    title: "Urban Explorer Sneakers",
    price: 83.74,
    imgurl: "/src/assets/images/product/product-1.webp",
  },
  {
    title: "Classic Leather Loafers",
    price: 110,
    newPrice: 97.14,
    imgurl: "/src/assets/images/product/product-2.webp",
  },
  {
    title: "Mountain Trekking Boots",
    price: 68.71,
    imgurl: "/src/assets/images/product/product-3.webp",
  },
  {
    title: "Elegance Stiletto Heels",
    price: 98.74,
    newPrice: 85.22,
    imgurl: "/src/assets/images/product/product-4.webp",
  },
  {
    title: "Comfy Running Shoes",
    price: 52.17,
    imgurl: "/src/assets/images/product/product-5.webp",
  },
];
const LatestProducts = () => {
  return (
    <Card className="h-[436px]">
      <div className="w-full h-full">
        <div className="font-bold text-[18px] mb-6">Latest products</div>

        <div className="flex flex-col gap-6">
          {data.map((item) => (
            <div key={item.title} className="flex items-center h-12 gap-4">
              <Avatar src={item.imgurl} size={48} shape="square" />
              <div className="flex flex-col flex-1 gap-1">
                <a className="font-semibold hover:underline">{item.title}</a>
                <div className="flex gap-1">
                  <span
                    className={cn(
                      "text-[rgb(99,115,129)]",
                      item.newPrice ? "line-through" : ""
                    )}
                  >
                    ${item.price}
                  </span>
                  {item.newPrice && (
                    <span className="text-[var(--ant-color-error)]">
                      ${item.newPrice}
                    </span>
                  )}
                </div>
              </div>
              <div className="h-[22px]">
                <Avatar.Group>
                  <Avatar
                    style={{ backgroundColor: "rgb(255, 159, 28)" }}
                    size={16}
                  />
                  <Avatar style={{ backgroundColor: "#87d068" }} size={16} />
                  <Avatar style={{ backgroundColor: "purple" }} size={16} />
                </Avatar.Group>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default LatestProducts;
