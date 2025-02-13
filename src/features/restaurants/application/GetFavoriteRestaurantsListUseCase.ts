import { Restaurant } from "../domain/Restaurant";
import { RestaurantRepository } from "../domain/RestaurantRepository";

export class GetFavoriteRestaurantsListUseCase {
  constructor(private restaurantRepository: RestaurantRepository) {}

  async execute(): Promise<Restaurant[]> {
    return this.restaurantRepository.getRestaurants();
  }
}
