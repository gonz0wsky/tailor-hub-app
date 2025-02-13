import { useFavoriteRestaurantsQuery } from "@features/restaurants/data/useFavoriteRestaurantsQuery";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

export const useFavoritesViewModel = () => {
  const { navigate } = useNavigation();

  const { data, isLoading } = useFavoriteRestaurantsQuery();

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
    favorites: data ?? [],
    handlePressRestaurant,
    handlePressFavoriteRestaurant,
    isFavoritesLoading: isLoading,
  };
};
