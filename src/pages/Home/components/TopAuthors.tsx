import Card from "@/components/card";
import { Iconify } from "@/components/icon";

const data = [
  {
    avatarUrl: "src/assets/images/avatar-1.webp",
    name: "Jayvion Simon",
    like: 9911,
  },
  {
    avatarUrl: "src/assets/images/avatar-2.webp",
    name: "Deja Brady",
    like: 9124,
  },
  {
    avatarUrl: "src/assets/images/avatar-3.webp",
    name: "Lucian Obrien",
    like: 1947,
  },
];

const TopAuthors = () => {
  return (
    <Card className="h-[295px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="p-6 pb-0 font-bold text-[18px] h-13">Top authors</div>

        <div className="flex flex-col gap-6 p-6">
          {data.map((item, index) => {
            const colors = [
              "rgb(0, 167, 111)",
              "rgb(0, 184, 217)",
              "rgb(255, 86, 48)",
            ];
            const bgcs = [
              "rgba(0, 167, 111, 0.08)",
              "rgba(0, 184, 217, 0.08)",
              "rgba(255, 86, 48, 0.08)",
            ];
            return (
              <div key={item.name} className="flex gap-4 h-[49px] items-center">
                <div>
                  <img
                    src={item.avatarUrl}
                    alt="头像"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-[rgb(28,37,46)] dark:text-white font-semibold">
                    {item.name}
                  </div>
                  <div className="flex gap-1 mt-1 text-xs">
                    <Iconify
                      icon="solar:heart-bold"
                      size={14}
                      color="rgb(99, 115, 129)"
                    />
                    <span className="text-[rgb(99,115,129)]">{item.like}</span>
                  </div>
                </div>
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full"
                  style={{ backgroundColor: bgcs[index] }}
                >
                  <Iconify
                    icon="solar:cup-star-bold"
                    size={24}
                    color={colors[index]}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default TopAuthors;
