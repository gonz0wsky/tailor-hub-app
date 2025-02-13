import { atoms as a, useTheme } from "@core/layout";
import Icon from "@shared/ui/components/Icon";
import { Props as IconProps } from "@shared/ui/components/Icon/types";
import { FC, memo } from "react";
import { BorderlessButton } from "react-native-gesture-handler";

type Props = {
  testID?: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
} & IconProps;

const IconButton: FC<Props> = ({
  onPress,
  style,
  testID,
  variant = "primary",
  ...rest
}) => {
  const t = useTheme();

  return (
    <BorderlessButton
      testID={testID}
      foreground
      rippleRadius={rest.size! - 10}
      onPress={onPress}
      style={[
        style,
        a.rounded_full,
        t.atoms.components.icon_button.background[variant],
      ]}
    >
      <Icon
        {...rest}
        color={t.atoms.components.icon_button.icon[variant].color}
      />
    </BorderlessButton>
  );
};

export default memo(IconButton);
