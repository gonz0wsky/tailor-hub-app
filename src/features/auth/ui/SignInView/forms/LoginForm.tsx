import { atoms as a, useTheme } from "@core/layout";
import { useLingui } from "@lingui/react";
import Button from "@shared/ui/components/Button";
import TextInput from "@shared/ui/components/TextInput";
import { FC, memo } from "react";
import { Text, View } from "react-native";

type Props = {
  onSubmit: (email: string, password: string) => void;
  onPressRegister: () => void;
};

const LoginForm: FC<Props> = ({ onPressRegister }) => {
  const t = useTheme();
  const { i18n } = useLingui();

  return (
    <View style={[a.my_2xl, a.mx_lg, a.gap_2xl]}>
      <TextInput
        label={i18n.t("Email")}
        placeholder={i18n.t("Escribe tu email")}
        testID="form-email-input"
        type="email"
        variant="secondary"
      />
      <TextInput
        label={i18n.t("Contraseña")}
        placeholder={i18n.t("Escribe tu contraseña")}
        testID="form-password-input"
        variant="secondary"
        type="password"
      />
      <Button title={i18n.t("Entrar")} />
      <View style={[a.flex_row]}>
        <Text style={[t.atoms.text.secondary]}>
          {i18n.t("¿No tienes cuenta?")}
        </Text>
        <Text
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
