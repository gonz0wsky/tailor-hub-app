import type { FC } from "react";

import Hearth from "./icons/Hearth";
import HearthFilled from "./icons/HearthFilled";
import LeftArrow from "./icons/LeftArrow";
import List from "./icons/List";
import Map from "./icons/Map";
import Poi from "./icons/Poi";
import StarEightPoint from "./icons/StarEightPoint";
import User from "./icons/User";

import type { IconProps } from "./types";

const createSvgIcons = <T extends { [name: string]: FC<IconProps> }>(
  cfg: T
): Record<keyof T, FC<IconProps>> => cfg;

export const icons = createSvgIcons({
  "hearth-filled": HearthFilled,
  "left-arrow": LeftArrow,
  "star-eight-point": StarEightPoint,
  hearth: Hearth,
  list: List,
  map: Map,
  poi: Poi,
  user: User,
});
