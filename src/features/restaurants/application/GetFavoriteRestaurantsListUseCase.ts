import { Restaurant } from "../domain/RestaurantModel";
import { RestaurantRepository } from "../domain/RestaurantRepository";

export class GetFavoriteRestaurantsListUseCase {
  constructor(private restaurantRepository: RestaurantRepository) {}

  async execute(): Promise<Restaurant[]> {
    return this.restaurantRepository.getFavoriteRestaurants();
  }
}
