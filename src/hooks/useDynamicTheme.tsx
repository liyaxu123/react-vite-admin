import { useEffect, useState } from "react";
import { useSettings } from "@/store/settingStore";
import { ThemeMode } from "@/types/enum";

type styleObj = {
  dark: React.CSSProperties;
  light: React.CSSProperties;
};

const useDynamicTheme: (styles: styleObj) => React.CSSProperties = (
  styles: styleObj
) => {
  const settings = useSettings();
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (settings.themeMode === ThemeMode.Dark) {
      setStyle(styles.dark);
    } else {
      setStyle(styles.light);
    }
  }, [settings.themeMode]);

  return style;
};

export default useDynamicTheme;
