import { useCallback, useState } from "react";

type FormStep = "login" | "register-step-one" | "register-step-two";

export const useSignInViewModel = () => {
  const [formStep, setFormStep] = useState<FormStep>("login");

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

  return { formStep, handlePressRegister, handlePressBack };
};
