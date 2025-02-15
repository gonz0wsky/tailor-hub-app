export interface RestaurantsListDTO {
  restaurantList: RestaurantDTO[];
  total: number;
}

export interface RestaurantDTO {
  _id: string;
  name: string;
  address: string;
  latlng: {
    lat: number;
    lng: number;
  };
  image: string;
  reviews: RestaurantReviewDTO[];
  avgRating: number;
  description: string;
}

export interface RestaurantReviewDTO {
  _id: string;
  owner: string;
  rating: number;
  comment: string;
  date: string;
}
