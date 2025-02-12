import { atoms as a } from "@core/layout";
import { useLingui } from "@lingui/react";
import Button from "@shared/ui/components/Button";
import { FC, memo, useCallback } from "react";
import { View } from "react-native";
import BackButton from "../components/BackButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema, nameSchema } from "@shared/validations";
import { z } from "zod";
import FormTextInput from "@shared/ui/components/FormTextInput";

type Props = {
  onPressBack: () => void;
  onSubmit: (email: string, name: string) => void;
};

const RegisterStepOneForm: FC<Props> = ({ onPressBack, onSubmit }) => {
  const { i18n } = useLingui();

  const { control, handleSubmit } = useForm<{
    email: string;
    name: string;
  }>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      name: "",
    },
    resolver: zodResolver(z.object({ email: emailSchema, name: nameSchema })),
  });

  const onPressSubmit = useCallback(() => {
    handleSubmit(({ email, name }) => {
      onSubmit(email, name);
    })();
  }, [handleSubmit, onSubmit]);

  return (
    <View style={[{ height: 368 }, a.my_2xl, a.mx_lg, a.gap_2xl]}>
      <BackButton style={[a.mb_auto]} onPress={onPressBack} />
      <FormTextInput
        control={control}
        name="email"
        label={i18n.t("Email")}
        placeholder={i18n.t("Añade tu email")}
        testID="form-email"
        type="email"
        variant="secondary"
      />
      <FormTextInput
        control={control}
        name="name"
        label={i18n.t("Nombre de usuario")}
        placeholder={i18n.t("Añade tu nombre")}
        testID="form-name"
        variant="secondary"
      />
      <Button
        testID="submit-button"
        title={i18n.t("Siguiente")}
        onPress={onPressSubmit}
      />
    </View>
  );
};

export default memo(RegisterStepOneForm);
