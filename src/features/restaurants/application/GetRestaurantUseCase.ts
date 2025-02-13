import { RestaurantDetail } from "../domain/RestaurantDetailModel";
import { RestaurantRepository } from "../domain/RestaurantRepository";

export class GetRestaurantUseCase {
  constructor(private restaurantRepository: RestaurantRepository) {}

  async execute(id: string): Promise<RestaurantDetail> {
    return this.restaurantRepository.getRestaurant(id);
  }
}
