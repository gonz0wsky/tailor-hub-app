import { atoms as a, android, useTheme } from "@core/layout";
import { FC, memo } from "react";
import {
  TextInput as RNTextInput,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  error?: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "textarea" | "password";
  variant?: "primary" | "secondary";
  overrideTextInputProps?: RNTextInput["props"];
  style?: ViewStyle;
};

const inputStyle: Record<NonNullable<Props["type"]>, TextStyle[]> = {
  password: [],
  text: [],
  textarea: [{ height: 128 }],
} as const;

const inputProps: Record<NonNullable<Props["type"]>, RNTextInput["props"]> = {
  password: {},
  text: {},
  textarea: { multiline: true, numberOfLines: 4 },
} as const;

const TextInput: FC<Props> = ({
  style,
  error,
  label,
  placeholder,
  type = "text",
  variant = "primary",
  overrideTextInputProps,
}) => {
  const t = useTheme();

  return (
    <View style={[style]}>
      {!!label && (
        <Text
          style={[
            a.mb_md,
            a.font_s_semibold,
            t.atoms.components.textinput.text[variant],
          ]}
        >
          {label}
        </Text>
      )}
      <RNTextInput
        placeholder={placeholder}
        placeholderTextColor={
          t.atoms.components.textinput.placeholder[variant].color
        }
        style={[
          { height: 44, textAlignVertical: "top" },
          a.font_s_regular,
          t.atoms.components.textinput.text[variant],
          a.px_2xl,
          a.py_sm,
          android<TextStyle>(a.py_xs),
          a.border,
          a.rounded_xl,
          t.atoms.components.textinput.border[variant],
          inputStyle[type],
        ]}
        {...inputProps[type]}
        {...overrideTextInputProps}
      />
      {!!error && (
        <Text
          style={[
            a.mt_xs,
            a.font_xs_semibold,
            t.atoms.components.textinput.text[variant],
          ]}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

export default memo(TextInput);
