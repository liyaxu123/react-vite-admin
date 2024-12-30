import { IconButton, Iconify } from "@/components/icon";

const SettingButton = () => {
  return (
    <IconButton className="w-10 h-10">
      <Iconify
        icon="solar:settings-bold-duotone"
        size={24}
        color="rgb(99, 115, 129)"
        className="transition-all hover:scale-110"
      />
    </IconButton>
  );
};

export default SettingButton;
