import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 定义一个函数，将十六进制颜色值转换为RGB格式
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  // 移除可能的#前缀
  hex = hex.replace(/^#/, "");

  // 如果颜色值是缩写形式（例如#fff），则扩展为完整形式（例如#ffffff）
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  // 解析RGB值
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

// 定义一个函数，将RGB颜色值按指定百分比变暗
export function darkenRGB(
  rgb: { r: number; g: number; b: number },
  percentage: number
): { r: number; g: number; b: number } {
  // 计算每个颜色通道减少的值
  const decreaseValue = Math.round(255 * (percentage / 100));

  // 返回新的RGB对象，每个颜色通道的值都减少了指定的百分比
  return {
    r: Math.max(rgb.r - decreaseValue, 0),
    g: Math.max(rgb.g - decreaseValue, 0),
    b: Math.max(rgb.b - decreaseValue, 0),
  };
}

// 使用示例
// const originalRGB = { r: 255, g: 165, b: 0 }; // 橙色
// const darkenedRGB = darkenRGB(originalRGB, 30); // 减少30%的亮度
