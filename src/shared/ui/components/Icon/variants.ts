import type { FC } from "react";

import LeftArrow from "./icons/LeftArrow";
import Hearth from "./icons/Hearth";
import Poi from "./icons/Poi";
import User from "./icons/User";

import type { IconProps } from "./types";

const createSvgIcons = <T extends { [name: string]: FC<IconProps> }>(
  cfg: T
): Record<keyof T, FC<IconProps>> => cfg;

export const icons = createSvgIcons({
  "left-arrow": LeftArrow,
  hearth: Hearth,
  poi: Poi,
  user: User,
});
