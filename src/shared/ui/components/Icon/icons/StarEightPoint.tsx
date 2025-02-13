import type { FC } from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "../types";

const Icon: FC<IconProps> = ({ size = 24, color = "black", ...props }) => (
  <Svg
    width={size}
    height={(size * 16) / 17}
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <Path
      fill={color}
      d="m8 .5 1.17 5.177 4.487-2.834-2.834 4.488L16 8.5l-5.177 1.17 2.834 4.487-4.488-2.834L8 16.5l-1.17-5.177-4.487 2.834 2.834-4.488L0 8.5l5.177-1.17-2.834-4.487 4.488 2.834L8 .5Z"
    />
  </Svg>
);

export default Icon;
