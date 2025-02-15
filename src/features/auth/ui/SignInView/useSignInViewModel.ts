import { useLoginMutation } from "@features/auth/data/useLoginMutation";
import { useRegisterMutation } from "@features/auth/data/useRegisterMutation";
import { useLingui } from "@lingui/react";
import {
  showErrorAlert,
  showSuccessAlert,
} from "@shared/notifications/showAlert";
import { useCallback, useRef, useState } from "react";

type FormStep = "login" | "register-step-one" | "register-step-two";

export const useSignInViewModel = () => {
  const { i18n } = useLingui();

  const [formStep, setFormStep] = useState<FormStep>("login");

  const stepOneData = useRef<{ email: string; name: string }>();

  const { mutateAsync: registerUser, isPending: isRegisterLoading } =
    useRegisterMutation();
  const { mutateAsync: loginUser, isPending: isLoginLoading } =
    useLoginMutation();

  const isLoading = isRegisterLoading || isLoginLoading;

  const handlePressBack = useCallback(() => {
    setFormStep((prev) => {
      switch (prev) {
        case "login":
          return "login";
        case "register-step-one":
          return "login";
        case "register-step-two":
          return "register-step-one";
      }
    });
  }, []);

  const handlePressRegister = useCallback(() => {
    setFormStep("register-step-one");
  }, []);

  const handleLogin = useCallback(
    async (email: string, password: string) => {
      try {
        await loginUser({ email, password });
      } catch (error) {
        showErrorAlert(i18n.t("Error al iniciar sesión"));
      }
    },
    [i18n, loginUser]
  );

  const handleSubmitStepOne = useCallback((email: string, name: string) => {
    stepOneData.current = { email, name };
    setFormStep("register-step-two");
  }, []);

  const handleSubmitStepTwo = useCallback(
    async (password: string) => {
      const email = stepOneData.current?.email;
      const name = stepOneData.current?.name;

      try {
        if (!email || !name) {
          throw new Error("Missing data");
        }

        await registerUser({ email, name, password });

        showSuccessAlert(i18n.t("Registro exitoso"));
        setFormStep("login");
      } catch (error) {
        showErrorAlert(i18n.t("Error al registrarte"));
      }
    },
    [i18n, registerUser]
  );

  return {
    formStep,
    handlePressRegister,
    handlePressBack,
    handleLogin,
    isLoading,
    handleSubmitStepOne,
    handleSubmitStepTwo,
  };
};
