import { GetRestaurantsListUseCase } from "@features/restaurants/application/GetRestaurantsListUseCase";
import { Restaurant } from "@features/restaurants/domain/RestaurantModel";
import { useInfiniteQuery } from "@tanstack/react-query";
import { RestaurantsRestImpl } from "../RestaurantsRestImpl";

const PAGE_LIMIT = 10;

type Page = {
  data: Restaurant[];
  page: number;
};

export function useRestaurantsQuery() {
  return useInfiniteQuery<Page, Error>({
    queryKey: ["restaurants"],
    queryFn: async ({ pageParam = 1 }) => {
      const data = await new GetRestaurantsListUseCase(
        new RestaurantsRestImpl()
      ).execute(pageParam as number, PAGE_LIMIT);

      return {
        data,
        page: pageParam as number,
      };
    },
    initialPageParam: 1,
    getNextPageParam: ({ page }) => page + 1,
    getPreviousPageParam: ({ page }) => page - 1,
  });
}
