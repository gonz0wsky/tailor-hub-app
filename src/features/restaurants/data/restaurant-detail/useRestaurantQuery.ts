import { GetRestaurantUseCase } from "@features/restaurants/application/GetRestaurantUseCase";
import { useQuery } from "@tanstack/react-query";
import { RestaurantsRestImpl } from "../RestaurantsRestImpl";
export function useRestaurantQuery(id?: string) {
  return useQuery({
    enabled: !!id,
    queryKey: [`restaurant-${id}`],
    queryFn: () =>
      new GetRestaurantUseCase(new RestaurantsRestImpl()).execute(id!),
  });
}
