import { atoms as a, useSafeArea, useTheme } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import { KeyboardAvoidingView, View } from "react-native";
import LoginForm from "./forms/LoginForm";
import Logo from "@shared/ui/components/Logo";
import RegisterStepOneForm from "./forms/RegisterStepOneForm";
import RegisterStepTwoForm from "./forms/RegisterStepTwoForm";
import { useSignInViewModel } from "./useSignInViewModel";

export const SignInView: ScreenComponent<"SignIn"> = () => {
  const t = useTheme();
  const safe = useSafeArea();
  const {
    formStep,
    handleLogin,
    handlePressBack,
    handlePressRegister,
    handleSubmitStepOne,
    handleSubmitStepTwo,
    isLoading,
  } = useSignInViewModel();

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
            onSubmit={handleLogin}
            onPressRegister={handlePressRegister}
            isLoading={isLoading}
          />
        )}
        {formStep === "register-step-one" && (
          <RegisterStepOneForm
            onSubmit={handleSubmitStepOne}
            onPressBack={handlePressBack}
            isLoading={isLoading}
          />
        )}
        {formStep === "register-step-two" && (
          <RegisterStepTwoForm
            onSubmit={handleSubmitStepTwo}
            onPressBack={handlePressBack}
            isLoading={isLoading}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};
