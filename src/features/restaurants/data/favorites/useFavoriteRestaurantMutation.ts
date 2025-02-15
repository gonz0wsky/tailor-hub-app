import { useMutation } from "@tanstack/react-query";
import { Restaurant } from "@features/restaurants/domain/RestaurantModel";
import { SetFavoriteRestaurantUseCase } from "@features/restaurants/application/SetFavoriteRestaurantUseCase";
import { RestaurantsRestImpl } from "../RestaurantsRestImpl";

type Variables = { action: "add" | "remove"; restaurant: Restaurant };

export function useFavoriteRestaurantMutation() {
  return useMutation<void, Error, Variables>({
    mutationFn: (data: Variables) => {
      return new SetFavoriteRestaurantUseCase(
        new RestaurantsRestImpl()
      ).execute(data.action, data.restaurant);
    },
  });
}
