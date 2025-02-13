import { useRestaurantQuery } from "@features/restaurants/data/useRestaurantQuery";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export const useRestaurantDetailViewModel = (id: string) => {
  const { canGoBack, goBack } = useNavigation();

  const { data, isLoading, error } = useRestaurantQuery(id);

  useEffect(() => {
    if (error) {
      canGoBack() && goBack();
    }
  }, [canGoBack, error, goBack, id]);

  return { data, isLoading };
};
