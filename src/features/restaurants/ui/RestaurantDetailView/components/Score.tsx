import { atoms, useTheme } from "@core/layout";
import Icon from "@shared/ui/components/Icon";
import { fnWithId } from "@shared/utils/fnWithId";
import { FC, memo } from "react";
import { View, ViewStyle } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

type Props = {
  editable: boolean;
  maxScore: number;
  onChange: (score: number) => void;
  score: number;
  style?: ViewStyle;
};

const Score: FC<Props> = ({ editable, onChange, score, maxScore, style }) => {
  const t = useTheme();

  return (
    <View style={[style, atoms.flex_row, atoms.gap_sm]}>
      {Array.from({ length: maxScore }).map((_, i) => (
        <BorderlessButton
          key={i}
          enabled={editable}
          onPress={fnWithId(onChange, i + 1)}
        >
          <Icon
            key={i}
            name="star-eight-point"
            size={24}
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
