import type { FC } from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "../types";

const Icon: FC<IconProps> = ({ size = 24, color = "black", ...props }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M16 5.333a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6.667 4a6.667 6.667 0 1 1 13.334 0 6.667 6.667 0 0 1-13.334 0ZM8.111 26.667h15.778a8.002 8.002 0 0 0-15.778 0ZM5.333 28c0-5.891 4.776-10.667 10.667-10.667S26.667 22.11 26.667 28c0 .736-.597 1.333-1.334 1.333H6.667A1.333 1.333 0 0 1 5.333 28Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Icon;
