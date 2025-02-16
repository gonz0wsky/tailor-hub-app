import { RestaurantDetail } from "./RestaurantDetailModel";
import { Restaurant } from "./RestaurantModel";

export interface RestaurantRepository {
  getRestaurants(page: number, limit: number): Promise<Restaurant[]>;
  getRestaurant(id: string): Promise<RestaurantDetail>;
  getFavoriteRestaurants(): Promise<Restaurant[]>;
  addFavoriteRestaurant(restaurant: Restaurant): Promise<void>;
  removeFavoriteRestaurant(id: string): Promise<void>;
  createComment(
    restaurantId: string,
    comment: string,
    score: number
  ): Promise<void>;
}
