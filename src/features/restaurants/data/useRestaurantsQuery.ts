import { useQuery } from "@tanstack/react-query";
import { GetRestaurantsListUseCase } from "../application/GetRestaurantsListUseCase";
import { RestaurantsRestImpl } from "./RestaurantsRestImpl";

export function useRestaurantsQuery() {
  return useQuery({
    queryKey: ["restaurants"],
    queryFn: () =>
      new GetRestaurantsListUseCase(new RestaurantsRestImpl()).execute(),
  });
}
