import { atoms as a, useTheme } from "@core/layout";
import { useLingui } from "@lingui/react";
import Button from "@shared/ui/components/Button";
import FormTextInput from "@shared/ui/components/FormTextInput";
import { FC, memo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { emailSchema, passwordSchema } from "@shared/validations";

type Props = {
  isLoading: boolean;
  onPressRegister: () => void;
  onSubmit: (email: string, password: string) => void;
};

const LoginForm: FC<Props> = ({ isLoading, onSubmit, onPressRegister }) => {
  const t = useTheme();
  const { i18n } = useLingui();

  const { control, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(
      z.object({ email: emailSchema, password: passwordSchema })
    ),
  });

  const onPressSubmit = useCallback(() => {
    handleSubmit(({ email, password }) => {
      onSubmit(email, password);
    })();
  }, [handleSubmit, onSubmit]);

  return (
    <View style={[a.my_2xl, a.mx_lg, a.gap_2xl]}>
      <FormTextInput
        control={control}
        name="email"
        label={i18n.t("Email")}
        placeholder={i18n.t("Escribe tu email")}
        testID="form-email"
        type="email"
        variant="secondary"
      />
      <FormTextInput
        control={control}
        name="password"
        label={i18n.t("Contraseña")}
        placeholder={i18n.t("Escribe tu contraseña")}
        testID="form-password"
        variant="secondary"
        type="password"
      />
      <Button
        testID="login-button"
        title={i18n.t("Entrar")}
        onPress={onPressSubmit}
        loading={isLoading}
      />
      <View style={[a.flex_row]}>
        <Text style={[t.atoms.text.secondary]}>
          {i18n.t("¿No tienes cuenta?")}
        </Text>
        <Text
          testID="submit-button"
          style={[
            a.ml_xs,
            t.atoms.text.secondary,
            { textDecorationLine: "underline" },
          ]}
          onPress={onPressRegister}
        >
          {i18n.t("Regístrate")}
        </Text>
      </View>
    </View>
  );
};

export default memo(LoginForm);
