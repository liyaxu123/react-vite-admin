import NavVertical from "./NavVertical";
import NavHorizontal from "./NavHorizontal";
import { useSettings } from "@/store/settingStore";
import { ThemeLayout } from "@/types/enum";

const Nav = () => {
  const settings = useSettings();

  if (settings.themeLayout === ThemeLayout.Horizontal) return <NavHorizontal />;

  return <NavVertical />;
};

export default Nav;
