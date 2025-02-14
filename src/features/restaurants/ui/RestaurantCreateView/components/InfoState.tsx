import { atoms as a, useTheme } from "@core/layout";
import Icon from "@shared/ui/components/Icon";
import { FC, memo } from "react";
import { Text, View } from "react-native";
import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import Button from "@shared/ui/components/Button";

type Props = {
  state: "success" | "error";
  onPress: () => void;
};

const text: Record<NonNullable<Props["state"]>, ReturnType<typeof msg>> = {
  success: msg`Resturante guardado`,
  error: msg`Ups, algo salió mal`,
};

const buttonText: Record<
  NonNullable<Props["state"]>,
  ReturnType<typeof msg>
> = {
  success: msg`Ver restaurante`,
  error: msg`Volver`,
};

const InfoState: FC<Props> = ({ state, onPress }) => {
  const { i18n } = useLingui();
  const t = useTheme();

  return (
    <View style={[a.gap_5xl, a.align_center, a.flex_1, a.justify_center]}>
      <Icon
        name="logo"
        size={24}
        color={t.atoms.components.icon.color.secondary.color}
      />
      <Text style={[a.font_s_semibold, t.atoms.text.tertiary]}>
        {i18n.t(text[state])}
      </Text>
      <Button
        title={i18n.t(buttonText[state])}
        onPress={onPress}
        size="small"
        variant="secondary"
      />
      <Icon
        name="logo"
        size={24}
        color={t.atoms.components.icon.color.secondary.color}
      />
    </View>
  );
};

export default memo(InfoState);
