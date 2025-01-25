import { Button, theme } from "antd";
import BannerSvg from "./BannerSvg";
import Card from "@/components/card";
import { hexToRgb, darkenRGB } from "@/utils";

const BannerCard = () => {
  const { token } = theme.useToken();
  const primaryColorRGB = hexToRgb(token.colorPrimary);
  const darkenColor = darkenRGB(primaryColorRGB, 40);

  return (
    <Card className="h-[320px] relative">
      <div
        className="absolute top-0 left-0 flex items-center justify-between w-full h-full gap-10 p-10 pr-6"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(20, 26, 33) 25%, rgba(${darkenColor.r}, ${darkenColor.g}, ${darkenColor.b}, 0.88)), url(/src/assets/images/background-6.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col flex-1 text-white">
          <h4 className="mb-2 text-2xl font-bold w-[204px]">
            <div>祝贺 🎉</div> Jaydon Frankie
          </h4>
          <p className="w-[360px] mb-6 opacity-60">
            本月畅销书 您今天的销售额增加了 57.6%
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
