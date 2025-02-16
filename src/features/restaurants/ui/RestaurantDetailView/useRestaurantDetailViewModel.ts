import { useCreateRestaurantReviewMutation } from "@features/restaurants/data/restaurant-detail/useCreateRestaurantReviewMutation";
import { useRestaurantQuery } from "@features/restaurants/data/restaurant-detail/useRestaurantQuery";
import { useLingui } from "@lingui/react";
import { useNavigation } from "@react-navigation/native";
import { showErrorAlert } from "@shared/notifications/showAlert";
import { useCallback, useEffect } from "react";
import { Alert } from "react-native";

export const useRestaurantDetailViewModel = (id: string) => {
  const { canGoBack, goBack } = useNavigation();
  const { i18n } = useLingui();

  const { data, isLoading, error, refetch, isRefetching } =
    useRestaurantQuery(id);
  const { mutateAsync: createRestaurantReview } =
    useCreateRestaurantReviewMutation();

  useEffect(() => {
    if (error) {
      showErrorAlert(i18n.t("Error al cargar la información"));
      canGoBack() && goBack();
    }
  }, [canGoBack, error, goBack, i18n, id]);

  const handlePressBack = useCallback(() => {
    canGoBack() && goBack();
  }, [canGoBack, goBack]);

  const handleSubmitReview = useCallback(
    async (comment: string, score: number) => {
      try {
        await createRestaurantReview({ restaurantId: id, comment, score });
        await refetch();
      } catch (error) {
        Alert.alert(i18n.t("Error al enviar comentario"));
      }
    },
    [createRestaurantReview, i18n, id, refetch]
  );

  return {
    data,
    isLoading,
    handlePressBack,
    refetch,
    isRefetching,
    handleSubmitReview,
  };
};
