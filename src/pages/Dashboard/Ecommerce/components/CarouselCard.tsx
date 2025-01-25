import { Button, Carousel } from "antd";
import Card from "@/components/card";

const data = [
  {
    title: "新品上架",
    description: "Urban Explorer 运动鞋",
    image: "/src/assets/images/product/product-1.webp",
  },
  {
    title: "新品上架",
    description: "Classic 皮革乐福鞋",
    image: "/src/assets/images/product/product-2.webp",
  },
  {
    title: "新品上架",
    description: "山地徒步靴",
    image: "/src/assets/images/product/product-3.webp",
  },
  {
    title: "新品上架",
    description: "Elegance 细高跟鞋",
    image: "/src/assets/images/product/product-4.webp",
  },
];

const CarouselCard = () => {
  return (
    <Card className="h-[320px] relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Carousel draggable adaptiveHeight autoplay>
          {data.map((item) => {
            return (
              <div key={item.title}>
                <div
                  className="w-full h-[320px] text-white relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 75%), url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center, 0px -40px",
                  }}
                >
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="mb-2 text-xs font-bold text-white opacity-60">
                      {item.title}
                    </div>
                    <div className="mb-6 overflow-hidden text-xl font-bold text-ellipsis whitespace-nowrap">
                      {item.description}
                    </div>
                    <Button type="primary">立即购买</Button>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </Card>
  );
};

export default CarouselCard;
