import { useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";

export const useRestaurantCreateViewModel = () => {
  const { canGoBack, goBack } = useNavigation();

  const [state, setState] = useState<"idle" | "success" | "error">("idle");

  const handlePressCancel = useCallback(() => {
    canGoBack() && goBack();
  }, [canGoBack, goBack]);

  return { state, handlePressCancel };
};
