import { FC, memo } from "react";
import { Controller, Control } from "react-hook-form";
import TextInput, { Props as TextInputProps } from "./TextInput";

type Props = TextInputProps & {
  name: string;
  control: Control<any>;
};

const FormTextInput: FC<Props> = ({ control, name, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange: onChangeText, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <TextInput
          inputRef={ref}
          error={error?.message}
          overrideTextInputProps={{
            onBlur,
            onChangeText,
            value,
            ...rest.overrideTextInputProps,
          }}
          {...rest}
        />
      )}
    />
  );
};

export default memo(FormTextInput);
