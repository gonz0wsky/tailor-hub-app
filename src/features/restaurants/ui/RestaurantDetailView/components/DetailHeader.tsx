import { atoms as a, useTheme } from "@core/layout";
import { Image } from "expo-image";
import { FC, memo } from "react";
import { Text, View } from "react-native";
import IconButton from "../../../../../shared/ui/components/IconButton";

type Props = {
  onPressBack: () => void;
  onPressFavorite: () => void;
  title: string;
  subtitle: string;
  image: string;
  isFavorite: boolean;
};

const DetailHeader: FC<Props> = ({
  image,
  onPressBack,
  onPressFavorite,
  subtitle,
  title,
  isFavorite,
}) => {
  const t = useTheme();

  return (
    <View
      testID="detail-header"
      style={[{ width: "100%", aspectRatio: 1.59 }, a.p_lg]}
    >
      <Image source={image} style={[a.flex_1, a.rounded_lg]} />
      <View
        style={[
          a.flex_row,
          a.justify_between,
          a.absolute,
          {
            left: a.p_lg.padding + 8,
            right: a.p_lg.padding + 8,
            top: a.p_lg.padding + 8,
          },
        ]}
      >
        <IconButton
          name="left-arrow"
          onPress={onPressBack}
          size={24}
          style={a.p_xs}
          variant="secondary"
          testID="back-button"
        />
        <IconButton
          name={isFavorite ? "hearth-filled" : "hearth"}
          onPress={onPressFavorite}
          size={24}
          style={a.p_xs}
          variant="secondary"
        />
      </View>
      <View
        style={[
          a.absolute,
          a.gap_sm,
          a.justify_center,
          a.align_center,
          {
            left: a.p_lg.padding + 8,
            right: a.p_lg.padding + 8,
            top: a.p_lg.padding + 8,
            bottom: a.p_lg.padding + 8,
          },
        ]}
      >
        <Text
          numberOfLines={1}
          style={[a.font_s_semibold, t.atoms.text.secondary]}
        >
          {title}
        </Text>
        <Text
          numberOfLines={1}
          style={[a.font_xs_regular, t.atoms.text.secondary]}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default memo(DetailHeader);
