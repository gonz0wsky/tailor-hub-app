import { Restaurant } from "../domain/RestaurantModel";
import { RestaurantRepository } from "../domain/RestaurantRepository";

export class SetFavoriteRestaurantUseCase {
  constructor(private restaurantRepository: RestaurantRepository) {}

  async execute(
    action: "add" | "remove",
    restaurant: Restaurant
  ): Promise<void> {
    switch (action) {
      case "add":
        return this.restaurantRepository.addFavoriteRestaurant(restaurant);
      case "remove":
        return this.restaurantRepository.removeFavoriteRestaurant(
          restaurant.id
        );
    }
  }
}
