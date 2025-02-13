import { useQuery } from "@tanstack/react-query";
import { GetRestaurantsListUseCase } from "../application/GetRestaurantsListUseCase";
import { RestaurantsRestImpl } from "./RestaurantsRestImpl";

export function useFavoriteRestaurantsQuery() {
  return useQuery({
    queryKey: ["favorite-restaurants"],
    queryFn: () =>
      new GetRestaurantsListUseCase(new RestaurantsRestImpl()).execute(),
  });
}
