import { Restaurant } from "./RestaurantModel";
import { Review } from "./ReviewModel";

export class RestaurantDetail {
  constructor(restaurant: Restaurant, description: string, reviews: Review[]) {
    this.restaurant = restaurant;
    this.description = description;
    this.reviews = reviews;
  }

  readonly restaurant: Restaurant;
  readonly description: string;
  readonly reviews: Review[];
}
