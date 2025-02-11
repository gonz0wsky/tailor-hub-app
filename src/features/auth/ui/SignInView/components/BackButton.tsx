import { atoms as a, useTheme } from "@core/layout";
import Icon from "@shared/ui/components/Icon";
import { FC, memo } from "react";
import { ViewStyle } from "react-native";
import { RectButton } from "react-native-gesture-handler";

type Props = { onPress: () => void; style?: ViewStyle[] };

const BackButton: FC<Props> = ({ onPress, style }) => {
  const t = useTheme();
  return (
    <RectButton
      testID="back-button"
      style={[
        { height: 44, width: 92 },
        a.justify_center,
        a.border,
        a.rounded_xl,
        t.atoms.components.button.border.primary,
        style,
      ]}
      onPress={onPress}
    >
      <Icon
        style={[a.px_4xl, a.align_self_center]}
        color={t.atoms.components.button.icon.primary.color}
        name="left-arrow"
        size={28}
      />
    </RectButton>
  );
};

export default memo(BackButton);
