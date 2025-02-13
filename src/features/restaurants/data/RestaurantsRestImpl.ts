import { Restaurant } from "../domain/Restaurant";
import { RestaurantRepository } from "../domain/RestaurantRepository";

export class RestaurantsRestImpl implements RestaurantRepository {
  async getRestaurants(): Promise<Restaurant[]> {
    return Array.from({ length: 10 }).map(
      (_, i) =>
        new Restaurant(
          `${i}`,
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/99/17/f2/casa-manolo-leon.jpg?w=600&h=-1&s=1",
          `Restaurant ${i}`,
          "123 Main Street",
          i,
          i,
          false
        )
    );
  }
}
