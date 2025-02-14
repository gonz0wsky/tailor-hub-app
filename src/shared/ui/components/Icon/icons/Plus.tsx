import type { FC } from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "../types";

const Icon: FC<IconProps> = ({ size = 24, color = "black", ...props }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 25 25" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M12.5 3.5a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7h-7a1 1 0 1 1 0-2h7v-7a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Icon;
