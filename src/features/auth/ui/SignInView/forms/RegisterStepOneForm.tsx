import { atoms as a } from "@core/layout";
import { useLingui } from "@lingui/react";
import Button from "@shared/ui/components/Button";
import TextInput from "@shared/ui/components/TextInput";
import { FC, memo } from "react";
import { View } from "react-native";
import BackButton from "../components/BackButton";

type Props = {
  onPressBack: () => void;
  onSubmit: (email: string, password: string) => void;
};

const RegisterStepOneForm: FC<Props> = ({ onPressBack }) => {
  const { i18n } = useLingui();

  return (
    <View style={[{ height: 368 }, a.my_2xl, a.mx_lg, a.gap_2xl]}>
      <BackButton style={[a.mb_auto]} onPress={onPressBack} />
      <TextInput
        label={i18n.t("Email")}
        placeholder={i18n.t("Añade tu email")}
        testID="form-email-input"
        type="email"
        variant="secondary"
      />
      <TextInput
        label={i18n.t("Nombre de usuario")}
        placeholder={i18n.t("Añade tu nombre")}
        testID="form-name-input"
        variant="secondary"
      />
      <Button title={i18n.t("Siguiente")} />
    </View>
  );
};

export default memo(RegisterStepOneForm);
