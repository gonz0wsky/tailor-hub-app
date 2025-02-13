import { RestaurantScore } from "./RestaurantScore";

export class Restaurant {
  constructor(
    id: string,
    image: string,
    name: string,
    address: string,
    score: number,
    reviewsCount: number,
    isFavorite: boolean
  ) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.address = address;
    this.score = new RestaurantScore(score);
    this.reviewsCount = reviewsCount;
    this.isFavorite = isFavorite;
  }

  readonly id: string;
  readonly image: string;
  readonly name: string;
  readonly address: string;
  readonly score: RestaurantScore;
  readonly reviewsCount: number;
  readonly isFavorite: boolean;
}
