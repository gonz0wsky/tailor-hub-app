import { useRestaurantsQuery } from "@features/restaurants/data/useRestaurantsQuery";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";

export const useRestaurantsViewModel = () => {
  const { navigate } = useNavigation();

  const { data, isLoading } = useRestaurantsQuery();

  const [currentPage, setCurrentPage] = useState<"map" | "list">("list");

  const handlePressRestaurant = useCallback(
    (id: string) => {
      navigate("RestaurantDetail", { id });
    },
    [navigate]
  );

  const handlePressFavoriteRestaurant = useCallback((id: string) => {
    console.log("handlePressFavoriteRestaurant", id);
  }, []);

  return {
    currentPage,
    handlePressFavoriteRestaurant,
    handlePressRestaurant,
    isRestaurantsLoading: isLoading,
    restaurants: data ?? [],
    setCurrentPage,
  };
};
