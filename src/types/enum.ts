export enum BasicStatus {
  DISABLE = 0,
  ENABLE = 1,
}

export enum ResultEnum {
  SUCCESS = 0,
  ERROR = -1,
  TIMEOUT = 401,
}

export enum StorageEnum {
  UserInfo = "userInfo",
  UserToken = "userToken",
  Settings = "settings",
  I18N = "i18nextLng",
}

export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

export enum ThemeLayout {
  Vertical = "vertical",
  Horizontal = "horizontal",
  Mini = "mini",
}

export enum ThemeColorPresets {
  Green = "green",
  Cyan = "cyan",
  Purple = "purple",
  Blue = "blue",
  Orange = "orange",
  Red = "red",
}

export enum PermissionType {
  CATALOGUE = 0,
  MENU = 1,
  BUTTON = 2,
}
