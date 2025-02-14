import type { FC } from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "../types";

const Icon: FC<IconProps> = ({ size = 24, color = "black", ...props }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M19.56 4.44a1.5 1.5 0 0 0-2.12 0l-.794.792 2.122 2.122.793-.793a1.5 1.5 0 0 0 0-2.122Zm1.415 3.535a3.5 3.5 0 1 0-4.95-4.95l-1.5 1.5L2.293 16.757a1 1 0 0 0-.293.707v3.572a1 1 0 0 0 1 1h3.5a1 1 0 0 0 .707-.293L20.975 7.975Zm-3.622.793-2.12-2.122L4 17.88v2.156h2.086L17.354 8.768Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Icon;
