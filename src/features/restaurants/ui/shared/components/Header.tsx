import { atoms as a } from "@core/layout";
import { FC, memo, ReactNode } from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;
  children?: ReactNode;
};

const Header: FC<Props> = ({ title, children }) => (
  <View style={[a.flex_row, a.justify_between, a.my_sm, a.mx_lg]}>
    <Text numberOfLines={1} style={[a.font_s_semibold]}>
      {title}
    </Text>
    <View style={[a.flex_row, a.gap_2xl]}>{children}</View>
  </View>
);

export default memo(Header);
