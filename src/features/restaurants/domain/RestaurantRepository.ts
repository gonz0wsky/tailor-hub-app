import { Restaurant } from "./Restaurant";

export interface RestaurantRepository {
  getRestaurants(): Promise<Restaurant[]>;
}
