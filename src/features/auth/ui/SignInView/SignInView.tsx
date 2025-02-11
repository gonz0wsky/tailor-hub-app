import { atoms as a, useSafeArea, useTheme } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import { useLingui } from "@lingui/react";
import Button from "@shared/ui/components/Button";
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { msg } from "@lingui/core/macro";
import LoginForm from "./forms/LoginForm";
import Logo from "@shared/ui/components/Logo";
import RegisterStepOneForm from "./forms/RegisterStepOneForm";
import RegisterStepTwoForm from "./forms/RegisterStepTwoForm";
import { useSignInViewModel } from "./useSignInViewModel";

export const SignInView: ScreenComponent<"SignIn"> = () => {
  const { i18n } = useLingui();
  const t = useTheme();
  const safe = useSafeArea();
  const { formStep, handlePressBack, handlePressRegister } =
    useSignInViewModel();

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={[a.flex_1, t.atoms.background.primary]}
    >
      <Logo
        variant="blue-text"
        style={[
          a.align_self_center,
          { marginTop: safe.top + a.mt_lg.marginTop },
          { width: 154, height: 35 },
        ]}
      />
      <View
        style={[
          t.atoms.background.secondary,
          a.mt_auto,
          a.mx_lg,
          a.rounded_xl,
          a.mb_safe(safe.bottom, a.mb_lg.marginBottom),
        ]}
      >
        {formStep === "login" && (
          <LoginForm
            onSubmit={() => {}}
            onPressRegister={handlePressRegister}
          />
        )}
        {formStep === "register-step-one" && (
          <RegisterStepOneForm
            onSubmit={() => {}}
            onPressBack={handlePressBack}
          />
        )}
        {formStep === "register-step-two" && (
          <RegisterStepTwoForm
            onSubmit={() => {}}
            onPressBack={handlePressBack}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};
