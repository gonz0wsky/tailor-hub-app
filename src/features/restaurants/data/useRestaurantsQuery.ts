import { useQuery } from "@tanstack/react-query";
import { GetRestaurantsListUseCase } from "../application/GetRestaurantsListUseCase";
import { RestaurantsRestImpl } from "./RestaurantsRestImpl";

function useRestaurantsQuery() {
  return useQuery({
    queryKey: ["restaurants"],
    queryFn: () =>
      new GetRestaurantsListUseCase(new RestaurantsRestImpl()).execute(),
  });
}

export default useRestaurantsQuery;
