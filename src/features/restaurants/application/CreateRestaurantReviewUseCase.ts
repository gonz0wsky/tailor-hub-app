import { RestaurantRepository } from "../domain/RestaurantRepository";

export class CreateRestaurantReviewUseCase {
  constructor(private restaurantRepository: RestaurantRepository) {}

  async execute(
    restaurantId: string,
    comment: string,
    score: number
  ): Promise<void> {
    return this.restaurantRepository.createComment(
      restaurantId,
      comment,
      score
    );
  }
}
