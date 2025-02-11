import { atoms as a } from "@core/layout";
import { useLingui } from "@lingui/react";
import Button from "@shared/ui/components/Button";
import TextInput from "@shared/ui/components/TextInput";
import { FC, memo } from "react";
import { View } from "react-native";
import BackButton from "../components/BackButton";

type Props = {
  onSubmit: (email: string, password: string) => void;
  onPressBack: () => void;
};

const RegisterStepTwoForm: FC<Props> = ({ onPressBack }) => {
  const { i18n } = useLingui();

  return (
    <View style={[{ height: 368 }, a.my_2xl, a.mx_lg, a.gap_2xl]}>
      <BackButton style={[a.mb_auto]} onPress={onPressBack} />
      <TextInput
        label={i18n.t("Crea una nueva contraseña")}
        placeholder={i18n.t("Añade una contraseña")}
        testID="form-password-input"
        variant="secondary"
        type="password"
      />
      <Button title={i18n.t("Finalizar")} />
    </View>
  );
};

export default memo(RegisterStepTwoForm);
