import { Restaurant } from "../domain/RestaurantModel";
import { RestaurantRepository } from "../domain/RestaurantRepository";

export class GetRestaurantsListUseCase {
  constructor(private restaurantRepository: RestaurantRepository) {}

  async execute(page: number, limit: number): Promise<Restaurant[]> {
    return this.restaurantRepository.getRestaurants(page, limit);
  }
}
