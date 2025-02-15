export class Restaurant {
  constructor(
    id: string,
    image: string,
    name: string,
    address: string,
    score: number,
    reviewsCount: number,
    isFavorite: boolean,
    latitude: number,
    longitude: number
  ) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.address = address;
    this.score = score;
    this.reviewsCount = reviewsCount;
    this.isFavorite = isFavorite;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  readonly id: string;
  readonly image: string;
  readonly name: string;
  readonly address: string;
  readonly score: number;
  readonly reviewsCount: number;
  readonly isFavorite: boolean;
  readonly latitude: number;
  readonly longitude: number;
}
