import { Carousel } from "antd";
import Card from "@/components/card";

const CarouselCard = () => {
  return (
    <Card className="h-[320px] relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Carousel draggable adaptiveHeight arrows autoplay>
          <div>
            <div
              className="w-full h-[320px] text-white relative"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 75%), url(/src/assets/images/cover/cover-4.webp)",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="text-[rgb(91,228,155)] font-bold text-xs uppercase mb-2">
                  Featured App
                </div>
                <div className="mb-2 overflow-hidden text-xl font-bold text-ellipsis whitespace-nowrap">
                  The Rise of Remote Work: Benefits, Challenges, and Future
                  Trends
                </div>
                <div className="mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                  The aroma of freshly brewed coffee filled the air, awakening
                  my senses.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="w-full h-[320px] text-white relative"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 75%), url(/src/assets/images/cover/cover-5.webp)",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="text-[rgb(91,228,155)] font-bold text-xs uppercase mb-2">
                  Featured App
                </div>
                <div className="mb-2 overflow-hidden text-xl font-bold text-ellipsis whitespace-nowrap">
                  Understanding Blockchain Technology: Beyond Cryptocurrency
                </div>
                <div className="mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                  The children giggled with joy as they ran through the
                  sprinklers on a hot summer day.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="w-full h-[320px] text-white relative"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 75%), url(/src/assets/images/cover/cover-6.webp)",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="text-[rgb(91,228,155)] font-bold text-xs uppercase mb-2">
                  Featured App
                </div>
                <div className="mb-2 overflow-hidden text-xl font-bold text-ellipsis whitespace-nowrap">
                  Mental Health in the Digital Age: Navigating Social Media and
                  Well-being
                </div>
                <div className="mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                  He carefully crafted a beautiful sculpture out of clay, his
                  hands skillfully shaping the intricate details.
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </Card>
  );
};

export default CarouselCard;
