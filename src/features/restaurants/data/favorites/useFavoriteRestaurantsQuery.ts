import { useQuery } from "@tanstack/react-query";
import { RestaurantsRestImpl } from "../RestaurantsRestImpl";
import { GetFavoriteRestaurantsListUseCase } from "@features/restaurants/application/GetFavoriteRestaurantsListUseCase";

export function useFavoriteRestaurantsQuery() {
  return useQuery({
    queryKey: ["favorite-restaurants"],
    queryFn: () =>
      new GetFavoriteRestaurantsListUseCase(
        new RestaurantsRestImpl()
      ).execute(),
  });
}
