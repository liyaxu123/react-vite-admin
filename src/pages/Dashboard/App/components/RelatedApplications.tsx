import Card from "@/components/card";
import { Segmented } from "antd";
import { Iconify } from "@/components/icon";
import { cn } from "@/utils";

const data = [
  {
    img: "/src/assets/images/apps/ic-app-1.webp",
    price: "Free",
    name: "Microsoft office 365",
    download: "9911",
    storage: "9.68 Mb",
    star: "9911",
  },
  {
    img: "/src/assets/images/apps/ic-app-2.webp",
    price: "Free",
    name: "Opera",
    download: "1947",
    storage: "1.9 Mb",
    star: "1947",
  },
  {
    img: "/src/assets/images/apps/ic-app-3.webp",
    price: "￥68.71",
    name: "Adobe acrobat reader DC",
    download: "9124",
    storage: "8.91 Mb",
    star: "9124",
  },
  {
    img: "/src/assets/images/apps/ic-app-4.webp",
    price: "Free",
    name: "Joplin",
    download: "6984",
    storage: "6.82 Mb",
    star: "6984",
  },
  {
    img: "/src/assets/images/apps/ic-app-5.webp",
    price: "￥52.17",
    name: "Topaz photo AI",
    download: "8488",
    storage: "8.29 Mb",
    star: "8488",
  },
];

const RelatedApplications = () => {
  return (
    <Card className="h-[518px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="p-6 pb-0 mb-6 font-bold text-[18px] h-13">
          Related applications
        </div>

        <Segmented
          block
          options={[
            {
              label: (
                <div className="flex items-center justify-center h-full">
                  Top 7 days
                </div>
              ),
              value: "top 7",
            },
            {
              label: (
                <div className="flex items-center justify-center h-full">
                  Top 30 days
                </div>
              ),
              value: "top 30",
            },
            {
              label: (
                <div className="flex items-center justify-center h-full">
                  All times
                </div>
              ),
              value: "All times",
            },
          ]}
          className="lyxSegmented"
        />

        <div className="p-6 h-[384px] flex flex-col gap-6">
          {data.map((item) => {
            return (
              <div key={item.name} className="flex h-12 gap-4">
                <div className="p-2 bg-[rgb(244,246,248)] rounded-xl">
                  <img src={item.img} className="w-8 h-8" />
                </div>

                <div>
                  <div className="flex gap-2 mb-2 h-[22px] items-center">
                    <h6 className="font-semibold text-[rgb(28,37,46)] dark:text-white">
                      {item.name}
                    </h6>
                    <span
                      className={cn(
                        "px-[6px] rounded-md font-bold text-[12px] flex items-center justify-center",
                        item.price === "Free"
                          ? "bg-[rgba(145,158,171,0.16)] text-[rgb(99,115,129)]"
                          : "bg-[rgba(34,197,94,0.16)] text-[rgb(17,141,87)]"
                      )}
                    >
                      {item.price}
                    </span>
                  </div>
                  <div className="flex gap-2 h-[18px] text-xs items-center">
                    <div className="flex items-center gap-1">
                      <Iconify
                        icon="solar:download-bold"
                        size={16}
                        color="rgb(145, 158, 171)"
                      />
                      {item.download}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-[rgb(145,158,171)]"></div>
                    <div className="flex items-center gap-1">
                      <Iconify
                        icon="solar:ssd-square-bold"
                        size={16}
                        color="rgb(145, 158, 171)"
                      />
                      {item.storage}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-[rgb(145,158,171)]"></div>
                    <div className="flex items-center gap-1">
                      <Iconify
                        icon="solar:star-bold"
                        size={16}
                        color="var(--ant-color-warning)"
                      />
                      {item.star}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default RelatedApplications;
