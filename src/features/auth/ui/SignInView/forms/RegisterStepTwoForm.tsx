import { atoms as a } from "@core/layout";
import { useLingui } from "@lingui/react";
import Button from "@shared/ui/components/Button";
import { FC, memo, useCallback } from "react";
import { View } from "react-native";
import BackButton from "../components/BackButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { passwordSchema } from "@shared/validations";
import FormTextInput from "@shared/ui/components/FormTextInput";

type Props = {
  onSubmit: (password: string) => void;
  onPressBack: () => void;
  isLoading: boolean;
};

const RegisterStepTwoForm: FC<Props> = ({
  isLoading,
  onPressBack,
  onSubmit,
}) => {
  const { i18n } = useLingui();

  const { control, handleSubmit } = useForm<{
    password: string;
  }>({
    mode: "onSubmit",
    defaultValues: {
      password: "",
    },
    resolver: zodResolver(z.object({ password: passwordSchema })),
  });

  const onPressSubmit = useCallback(() => {
    handleSubmit(({ password }) => {
      onSubmit(password);
    })();
  }, [handleSubmit, onSubmit]);

  return (
    <View style={[{ height: 368 }, a.my_2xl, a.mx_lg, a.gap_2xl]}>
      <BackButton style={[a.mb_auto]} onPress={onPressBack} />
      <FormTextInput
        control={control}
        name="password"
        label={i18n.t("Crea una nueva contraseña")}
        placeholder={i18n.t("Añade una contraseña")}
        testID="form-password"
        variant="secondary"
        type="password"
      />
      <Button
        testID="submit-button"
        title={i18n.t("Finalizar")}
        onPress={onPressSubmit}
        loading={isLoading}
      />
    </View>
  );
};

export default memo(RegisterStepTwoForm);
