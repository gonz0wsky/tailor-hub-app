import { useStore } from "@core/store";
import { useFavoriteRestaurantMutation } from "@features/restaurants/data/favorites/useFavoriteRestaurantMutation";
import { useRestaurantsQuery } from "@features/restaurants/data/restaurants-list/useRestaurantsQuery";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useMemo, useState } from "react";

export const useRestaurantsViewModel = () => {
  const { navigate } = useNavigation();

  const { data, isLoading, refetch, isRefetching, fetchNextPage } =
    useRestaurantsQuery();
  const { mutateAsync: setFavoriteRestaurant } =
    useFavoriteRestaurantMutation();

  const [currentPage, setCurrentPage] = useState<"map" | "list">("list");

  const restaurants = useMemo(
    () => data?.pages.flatMap((page) => page.data) ?? [],
    [data]
  );

  const handlePressRestaurant = useCallback(
    (id: string) => {
      navigate("RestaurantDetail", { id });
    },
    [navigate]
  );

  const handlePressFavoriteRestaurant = useCallback(
    async (id: string) => {
      const restaurant = restaurants.find((restaurant) => restaurant.id === id);

      if (!restaurant) {
        return;
      }

      const isfavorite = useStore
        .getState()
        .favoriteRestaurants.some((restaurant) => restaurant.id === id);

      await setFavoriteRestaurant({
        action: isfavorite ? "remove" : "add",
        restaurant,
      });
    },
    [restaurants, setFavoriteRestaurant]
  );

  const handleOnEndReached = useCallback(async () => {
    await fetchNextPage();
  }, [fetchNextPage]);

  return {
    currentPage,
    handlePressFavoriteRestaurant,
    handlePressRestaurant,
    isRestaurantsLoading: isLoading,
    restaurants,
    setCurrentPage,
    refetch,
    isRefetching,
    handleOnEndReached,
  };
};
