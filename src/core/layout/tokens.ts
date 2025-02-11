export const color = {
  theme_light_black: "#0B0B0B",
  theme_light_blue: "#264BEB",
  theme_light_grey: "#F1F1F0",
  theme_light_pastel_blue: "#8DA0F0",
  theme_light_white: "#FFFFFF",
} as const;

export const space = {
  _2xs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  _2xl: 24,
  _3xl: 28,
  _4xl: 32,
  _5xl: 40,
  auto: "auto",
} as const;

export const fontSize = {
  _2xs: 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  _2xl: 22,
  _3xl: 24,
  _4xl: 26,
  _5xl: 32,
  _6xl: 40,
} as const;

export const lineHeight = {
  none: 1,
  normal: 1.5,
  relaxed: 1.625,
} as const;

export const borderRadius = {
  _2xs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 17,
  full: 999,
} as const;

export const fontWeight = {
  normal: "400",
  medium: "500",
  semibold: "600",
} as const;

export const breakpoints: {
  [key: string]: number;
} = {
  gtMobile: 800,
  gtTablet: 1200,
} as const;

export const font = {
  bold: "Roobert-Bold",
  medium: "Roobert-Medium",
  regular: "Roobert-Regular",
  semibold: "Roobert-SemiBold",
} as const;

export type Color = keyof typeof color;
export type Space = keyof typeof space;
export type FontSize = keyof typeof fontSize;
export type LineHeight = keyof typeof lineHeight;
export type BorderRadius = keyof typeof borderRadius;
export type FontWeight = keyof typeof fontWeight;
export type Breakpoint = keyof typeof breakpoints;
export type Font = keyof typeof font;
