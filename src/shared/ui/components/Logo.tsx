import { FC, memo } from "react";
import { Image, ImageProps, ImageSourcePropType } from "react-native";

type Props = {
  variant: "blue-text" | "black-text";
  style?: ImageProps["style"];
};

const images: Record<NonNullable<Props["variant"]>, ImageSourcePropType> = {
  "blue-text": require("@assets/images/tailor-logo-with-text-blue.png"),
  "black-text": require("@assets/images/tailor-logo-with-text.png"),
};

const Logo: FC<Props> = ({ variant, style }) => {
  return <Image source={images[variant]} style={style} />;
};

export default memo(Logo);
