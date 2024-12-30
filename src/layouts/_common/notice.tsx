import { IconButton, Iconify } from "@/components/icon";
import { Badge } from "antd";

const NoticeButton = () => {
  return (
    <IconButton className="w-10 h-10">
      <Badge
        count={2}
        styles={{
          root: { color: "inherit" },
          indicator: { color: "#fff" },
        }}
      >
        <Iconify
          icon="solar:bell-bing-bold-duotone"
          size={24}
          color="rgb(99, 115, 129)"
          className="transition-all hover:scale-110"
        />
      </Badge>
    </IconButton>
  );
};

export default NoticeButton;
