import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const CurrentBalance = () => {
  return (
    <div
      className="h-[240px] relative before:h-10 before:absolute before:left-0 before:right-0 before:-bottom-4 before:opacity-[0.16] before:mx-7 before:bg-[rgb(145,158,171)] before:rounded-xl before:-z-[2] after:mx-4 after:h-10 after:absolute after:left-0 after:right-0 after:-bottom-2 after:opacity-[0.32] after:bg-[rgb(145,158,171)] after:rounded-xl after:-z-[2] rounded-2xl bg-cover text-white"
      style={{
        backgroundImage: "url(/src/assets/images/background-4.jpg)",
      }}
    >
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="h-[240px] rounded-2xl overflow-hidden bg-cover"
        style={{
          backgroundImage: "url(/src/assets/images/background-4.jpg)",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="rounded-2xl">
          <div className="h-full p-6">
            <div>
              <div>当前余额</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl">Slide 2</SwiperSlide>
        <SwiperSlide className="rounded-2xl">Slide 3</SwiperSlide>
        <SwiperSlide className="rounded-2xl">Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CurrentBalance;
