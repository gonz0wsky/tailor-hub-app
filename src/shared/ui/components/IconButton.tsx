import { atoms as a, useTheme } from "@core/layout";
import Icon from "@shared/ui/components/Icon";
import { Props as IconProps } from "@shared/ui/components/Icon/types";
import { FC, memo } from "react";
import { BorderlessButton } from "react-native-gesture-handler";

type Props = {
  testID?: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  enabled?: boolean;
} & IconProps;

const IconButton: FC<Props> = ({
  onPress,
  style,
  testID,
  variant = "primary",
  enabled = true,
  ...rest
}) => {
  const t = useTheme();

  return (
    <BorderlessButton
      testID={testID}
      foreground
      rippleRadius={rest.size ? rest.size! - 10 : undefined}
      onPress={onPress}
      enabled={enabled}
      style={[
        style,
        a.justify_center,
        a.rounded_full,
        t.atoms.components.icon_button.background[variant],
      ]}
    >
      <Icon
        color={t.atoms.components.icon_button.icon[variant].color}
        {...rest}
      />
    </BorderlessButton>
  );
};

export default memo(IconButton);
