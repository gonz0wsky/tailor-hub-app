export interface RestaurantDetailDTO {
  _id: string;
  name: string;
  address: string;
  latlng: {
    lat: number;
    lng: number;
  };
  image: string;
  reviews: RestaurantDetailReviewDTO[];
  avgRating: number;
  description: string;
}

export interface RestaurantDetailReviewDTO {
  _id: string;
  owner: { name: string };
  rating: number;
  comment: string;
  date: string;
}
