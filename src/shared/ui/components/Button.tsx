import { atoms as a, useTheme } from "@core/layout/index";
import { FC, memo } from "react";
import { ActivityIndicator, Text, View, ViewStyle } from "react-native";
import { RectButton } from "react-native-gesture-handler";

type Props = {
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => Promise<void> | void;
  size?: "normal" | "small";
  style?: ViewStyle[];
  testID?: string;
  title: string;
  variant?: "primary" | "secondary" | "tertiary";
};

const buttonSize: Record<NonNullable<Props["size"]>, ViewStyle[]> = {
  normal: [a.w_full],
  small: [],
} as const;

const Button: FC<Props> = ({
  disabled,
  loading,
  size = "normal",
  style,
  title,
  variant = "primary",
  onPress,
  testID,
}) => {
  const t = useTheme();

  return (
    <View
      testID={testID}
      pointerEvents={loading || disabled ? "none" : undefined}
      style={[
        style,
        { height: 44, opacity: disabled ? 0.4 : 1 },
        buttonSize[size],
      ]}
    >
      <RectButton
        style={[
          a.flex_1,
          a.align_center,
          a.justify_center,
          a.px_2xl,
          a.border,
          a.rounded_lg,
          t.atoms.components.button.background[variant],
          t.atoms.components.button.border[variant],
        ]}
        onPress={onPress}
      >
        {loading && (
          <ActivityIndicator
            style={[a.absolute, a.inset_0]}
            color={t.atoms.components.button.text[variant].color}
          />
        )}
        <Text
          style={[
            { opacity: loading ? 0 : 1 },
            a.font_xs_semibold,
            t.atoms.components.button.text[variant],
          ]}
        >
          {title}
        </Text>
      </RectButton>
    </View>
  );
};

export default memo(Button);
