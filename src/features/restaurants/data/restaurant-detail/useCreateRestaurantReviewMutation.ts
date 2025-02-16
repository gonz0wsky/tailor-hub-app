import { useMutation } from "@tanstack/react-query";
import { RestaurantsRestImpl } from "../RestaurantsRestImpl";
import { CreateRestaurantReviewUseCase } from "@features/restaurants/application/CreateRestaurantReviewUseCase";

type Variables = { restaurantId: string; comment: string; score: number };

export function useCreateRestaurantReviewMutation() {
  return useMutation<void, Error, Variables>({
    mutationFn: (data: Variables) => {
      return new CreateRestaurantReviewUseCase(
        new RestaurantsRestImpl()
      ).execute(data.restaurantId, data.comment, data.score);
    },
  });
}
