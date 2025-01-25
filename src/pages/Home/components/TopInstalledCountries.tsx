import Card from "@/components/card";
import { Iconify } from "@/components/icon";

const data = [
  {
    countrie: "Germany",
    Android: 9911,
    Windows: 1947,
    Mac: 9124,
    imgurl: "src/assets/images/country/DE.svg",
  },
  {
    countrie: "England",
    Android: 1947,
    Windows: 9124,
    Mac: 6984,
    imgurl: "src/assets/images/country/GB.svg",
  },
  {
    countrie: "France",
    Android: 9124,
    Windows: 6984,
    Mac: 8488,
    imgurl: "src/assets/images/country/FR.svg",
  },
  {
    countrie: "Korean",
    Android: 6984,
    Windows: 8488,
    Mac: 2034,
    imgurl: "src/assets/images/country/KR.svg",
  },
  {
    countrie: "USA",
    Android: 8488,
    Windows: 2034,
    Mac: 3364,
    imgurl: "src/assets/images/country/US.svg",
  },
];

const TopInstalledCountries = () => {
  return (
    <Card className="h-[306px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="p-6 pb-0 font-bold text-[18px] h-13">
          Top installed countries
        </div>

        <div className="flex flex-col gap-6 p-6">
          {data.map((item) => {
            return (
              <div
                key={item.countrie}
                className="flex gap-4 h-[22px] items-center justify-between"
              >
                <div className="flex items-center flex-1 gap-2">
                  <img
                    src={item.imgurl}
                    className="w-[26px] h-5 rounded-md"
                    alt="国旗"
                  />
                  {item.countrie}
                </div>
                <div className="flex flex-1 gap-1">
                  <Iconify
                    icon="uiw:android"
                    size={14}
                    color="rgb(99, 115, 129)"
                  />
                  <span className="text-[rgb(28,37,46)] dark:text-white">{item.Android}</span>
                </div>
                <div className="flex flex-1 gap-1">
                  <Iconify
                    icon="mingcute:windows-fill"
                    size={14}
                    color="rgb(99, 115, 129)"
                  />
                  <span className="text-[rgb(28,37,46)] dark:text-white">{item.Windows}</span>
                </div>
                <div className="flex flex-1 gap-1">
                  <Iconify
                    icon="qlementine-icons:mac-16"
                    size={14}
                    color="rgb(99, 115, 129)"
                  />
                  <span className="text-[rgb(28,37,46)] dark:text-white">{item.Mac}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default TopInstalledCountries;
