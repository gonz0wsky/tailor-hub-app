import { atoms as a, useTheme } from "@core/layout";
import { zodResolver } from "@hookform/resolvers/zod";
import IconButton from "@shared/ui/components/IconButton";
import { FC, memo, useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { z } from "zod";

type Props = {
  testID?: string;
  initialValue?: string;
  label: string;
  onSubmit: (value: string) => void;
  validation?: z.ZodString;
};

const SoloInput: FC<Props> = ({
  onSubmit,
  label,
  validation,
  initialValue,
  testID,
}) => {
  const t = useTheme();

  const { control, handleSubmit, reset } = useForm<{
    value: string;
  }>({
    mode: "onSubmit",
    defaultValues: {
      value: "",
    },
    resolver: validation
      ? zodResolver(
          z.object({
            value: validation,
          })
        )
      : undefined,
  });

  const handlePressSubmit = useCallback(() => {
    handleSubmit((data) => {
      onSubmit(data.value);
    })();
    reset();
  }, [handleSubmit, onSubmit, reset]);

  return (
    <Controller
      control={control}
      name="value"
      render={({
        field: { onChange: onChangeText, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <View>
          <View style={[a.border_b, t.atoms.border.secondary, a.pb_sm]}>
            {!!label && (
              <Text style={[t.atoms.text.primary, a.font_xs_semibold, a.mb_sm]}>
                {label}
              </Text>
            )}
            <TextInput
              testID={`${testID}-input`}
              onBlur={onBlur}
              onChangeText={onChangeText}
              placeholder={initialValue}
              placeholderTextColor={t.atoms.text.primary_60.color}
              ref={ref}
              style={[a.font_xss_regular, t.atoms.text.primary]}
              value={value}
              keyboardType="default"
            />
            <IconButton
              enabled={!!value}
              style={[a.absolute, a.right_0, { bottom: 16 }]}
              name="pen"
              onPress={handlePressSubmit}
              size={24}
              color={
                value
                  ? t.atoms.components.icon.color.primary.color
                  : t.atoms.components.icon.color.primary_disabled.color
              }
            />
          </View>
          {!!error && (
            <Text
              testID={`${testID}-error`}
              style={[a.mt_xs, a.font_xs_semibold, t.atoms.text.primary]}
            >
              {error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default memo(SoloInput);
