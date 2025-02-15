import { useFavoriteRestaurantMutation } from "@features/restaurants/data/favorites/useFavoriteRestaurantMutation";
import { useFavoriteRestaurantsQuery } from "@features/restaurants/data/favorites/useFavoriteRestaurantsQuery";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

export const useFavoritesViewModel = () => {
  const { navigate } = useNavigation();

  const { data, isLoading, refetch, isRefetching } =
    useFavoriteRestaurantsQuery();
  const { mutateAsync: setFavoriteRestaurant } =
    useFavoriteRestaurantMutation();

  const handlePressRestaurant = useCallback(
    (id: string) => {
      navigate("RestaurantDetail", { id });
    },
    [navigate]
  );

  const handlePressFavoriteRestaurant = useCallback(
    async (id: string) => {
      const restaurant = data?.find((restaurant) => restaurant.id === id);

      if (!restaurant) {
        return;
      }

      await setFavoriteRestaurant({ action: "remove", restaurant });

      await refetch();
    },
    [data, refetch, setFavoriteRestaurant]
  );

  return {
    favorites: data ?? [],
    handlePressRestaurant,
    handlePressFavoriteRestaurant,
    isFavoritesLoading: isLoading,
    refetch,
    isRefetching,
  };
};
