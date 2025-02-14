import { atoms as a, useTheme } from "@core/layout";
import { useLingui } from "@lingui/react";
import Button from "@shared/ui/components/Button";
import Icon from "@shared/ui/components/Icon";
import { Image } from "expo-image";
import { FC, memo, useCallback } from "react";
import { Control, Controller, ControllerProps } from "react-hook-form";
import { Text, View, ViewStyle } from "react-native";
import { RectButton } from "react-native-gesture-handler";

type Props = {
  control: Control<any>;
  name: string;
  onAddImage: () => Promise<string>;
  style?: ViewStyle[];
};

const ImagePicker: FC<Props> = ({ style, name, control, onAddImage }) => {
  const t = useTheme();
  const { i18n } = useLingui();

  const render: ControllerProps["render"] = useCallback(
    ({ field: { value, onChange }, fieldState: { error } }) => (
      <View
        style={[
          style,
          { height: 204, width: 204 },
          a.border,
          a.rounded_xl,
          t.atoms.background.tertiary,
          a.overflow_hidden,
        ]}
      >
        <RectButton
          style={[a.flex_1, a.align_center, a.justify_center, a.gap_sm]}
          onPress={async () => {
            const uri = await onAddImage();
            onChange(uri);
          }}
        >
          {value ? (
            <>
              <Image style={[a.absolute, a.inset_0]} source={{ uri: value }} />
              <Button
                title={i18n.t("Eliminar")}
                variant="tertiary"
                size="small"
                onPress={() => onChange(undefined)}
              />
            </>
          ) : (
            <>
              <Icon
                name="plus"
                size={24}
                color={t.atoms.components.icon.color.primary.color}
              />
              <Text style={[a.font_xs_semibold]}>{"Añadir imágen"}</Text>
            </>
          )}
        </RectButton>
      </View>
    ),
    [
      i18n,
      onAddImage,
      style,
      t.atoms.background.tertiary,
      t.atoms.components.icon.color.primary.color,
    ]
  );

  return <Controller control={control} name={name} render={render} />;
};

export default memo(ImagePicker);
