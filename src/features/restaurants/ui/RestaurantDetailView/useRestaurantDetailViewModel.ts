import { useRestaurantQuery } from "@features/restaurants/data/restaurant-detail/useRestaurantQuery";
import { useLingui } from "@lingui/react";
import { useNavigation } from "@react-navigation/native";
import { showErrorAlert } from "@shared/notifications/showAlert";
import { useCallback, useEffect } from "react";

export const useRestaurantDetailViewModel = (id: string) => {
  const { canGoBack, goBack } = useNavigation();
  const { i18n } = useLingui();

  const { data, isLoading, error, refetch, isRefetching } =
    useRestaurantQuery(id);

  useEffect(() => {
    if (error) {
      showErrorAlert(i18n.t("Error al cargar la información"));
      canGoBack() && goBack();
    }
  }, [canGoBack, error, goBack, i18n, id]);

  const handlePressBack = useCallback(() => {
    canGoBack() && goBack();
  }, [canGoBack, goBack]);

  return { data, isLoading, handlePressBack, refetch, isRefetching };
};
