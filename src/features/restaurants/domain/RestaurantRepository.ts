import { RestaurantDetail } from "./RestaurantDetailModel";
import { Restaurant } from "./RestaurantModel";

export interface RestaurantRepository {
  getRestaurants(): Promise<Restaurant[]>;
  getRestaurant(id: string): Promise<RestaurantDetail>;
}
