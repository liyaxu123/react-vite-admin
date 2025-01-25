import { Button } from "antd";
import BannerSvg from "./BannerSvg";
import Card from "@/components/card";

const BannerCard = () => {
  return (
    <Card className="h-[320px] relative">
      <div
        className="absolute top-0 left-0 flex items-center justify-between w-full h-full gap-10 p-10 pr-6"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(20, 26, 33, 0.88) 0%, rgb(20, 26, 33) 75%), url(/src/assets/images/background-5.webp)",
        }}
      >
        <div className="flex flex-col flex-1 text-white">
          <h4 className="mb-2 text-2xl font-bold w-[204px]">
            欢迎回来 👋 Jaydon Frankie
          </h4>
          <p className="w-[360px] mb-6 opacity-60">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything.
          </p>
          <Button type="primary" className="self-start">
            Go now
          </Button>
        </div>
        <div className="w-[260px]">
          <BannerSvg />
        </div>
      </div>
    </Card>
  );
};

export default BannerCard;
