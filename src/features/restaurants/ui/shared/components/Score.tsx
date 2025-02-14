import { CONFIG } from "@core/config/config";
import { atoms, useTheme } from "@core/layout";
import Icon from "@shared/ui/components/Icon";
import { fnWithId } from "@shared/utils/fnWithId";
import { FC, memo } from "react";
import { View, ViewStyle } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

type Props = {
  editable?: boolean;
  iconSize?: number;
  onChange?: (score: number) => void;
  score: number;
  style?: ViewStyle[];
};

const Score: FC<Props> = ({
  editable = false,
  iconSize = 24,
  onChange,
  score,
  style,
}) => {
  const t = useTheme();

  return (
    <View style={[style, atoms.flex_row, atoms.gap_sm]}>
      {Array.from({ length: CONFIG.MAX_REVIEW_SCORE }).map((_, i) => (
        <BorderlessButton
          key={i}
          enabled={editable}
          onPress={onChange ? fnWithId(onChange, i + 1) : undefined}
        >
          <Icon
            key={i}
            name="star-eight-point"
            size={iconSize}
            color={
              score >= i + 1
                ? t.atoms.components.icon.color.secondary.color
                : t.atoms.components.icon.color.primary_disabled.color
            }
          />
        </BorderlessButton>
      ))}
    </View>
  );
};

export default memo(Score);
