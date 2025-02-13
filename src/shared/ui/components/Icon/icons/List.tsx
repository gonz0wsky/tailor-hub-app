import type { FC } from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "../types";

const Icon: FC<IconProps> = ({ size = 24, color = "black", ...props }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Icon;
