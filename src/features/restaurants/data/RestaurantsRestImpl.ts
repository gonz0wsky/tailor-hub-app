import { client } from "@core/api/client";
import { RestaurantDetail } from "../domain/RestaurantDetailModel";
import { Restaurant } from "../domain/RestaurantModel";
import { RestaurantRepository } from "../domain/RestaurantRepository";
import { Review } from "../domain/ReviewModel";
import { User } from "../domain/User";
import { RestaurantsListDTO } from "./restaurants-list/RestaurantsListDTO";
import { RestaurantDetailDTO } from "./restaurant-detail/RestaurantDetailDTO";
import { useStore } from "@core/store";

export class RestaurantsRestImpl implements RestaurantRepository {
  async getRestaurant(id: string): Promise<RestaurantDetail> {
    const response = await client.get<RestaurantDetailDTO>(
      `/restaurant/detail/${id}`
    );

    if (response.status !== 200) {
      throw new Error("Error getting restaurant");
    }

    // TODO - this should persisted in backend
    const favorites = useStore.getState().favoriteRestaurants;

    const restaurant = new Restaurant(
      response.data._id,
      response.data.image,
      response.data.name,
      response.data.address,
      response.data.avgRating,
      response.data.reviews.length,
      favorites.some((restaurant) => restaurant.id === id),
      response.data.latlng.lat,
      response.data.latlng.lng
    );

    const reviews = response.data.reviews.map(
      (review) =>
        new Review(
          review._id,
          review.comment,
          review.rating,
          false, // TODO: How to know if the user owns the review?
          new User(review.owner.name, review.owner.name) // TODO: Where to get the id?
        )
    );

    return new RestaurantDetail(restaurant, response.data.description, reviews);
  }

  async getRestaurants(page: number, limit: number): Promise<Restaurant[]> {
    const response = await client.get<RestaurantsListDTO>(
      `/restaurant/list?page=${page}&limit=${limit}`
    );

    if (response.status !== 200) {
      throw new Error("Error getting restaurants");
    }

    // TODO - this should persisted in backend
    const favorites = useStore.getState().favoriteRestaurants;

    const items = response.data.restaurantList.map((item) => {
      return new Restaurant(
        item._id,
        item.image,
        item.name,
        item.address,
        item.avgRating,
        item.reviews.length,
        favorites.some((restaurant) => restaurant.id === item._id),
        item.latlng.lat,
        item.latlng.lng
      );
    });

    return items;
  }

  async getFavoriteRestaurants(): Promise<Restaurant[]> {
    return useStore.getState().favoriteRestaurants;
  }

  async addFavoriteRestaurant(restaurant: Restaurant): Promise<void> {
    const favoriteRestaurant = new Restaurant(
      restaurant.id,
      restaurant.image,
      restaurant.name,
      restaurant.address,
      restaurant.score,
      restaurant.reviewsCount,
      true,
      restaurant.latitude,
      restaurant.longitude
    );

    useStore.getState().addFavoriteRestaurant(favoriteRestaurant);
  }

  async removeFavoriteRestaurant(id: string): Promise<void> {
    useStore.getState().removeFavoriteRestaurant(id);
  }

  async createComment(
    restaurantId: string,
    comment: string,
    score: number
  ): Promise<void> {
    const loggedUser = useStore.getState().loggedUser;

    if (!loggedUser) {
      throw new Error("User not logged in");
    }

    const response = await client.post<void>(
      `/restaurant/${restaurantId}/comment`,
      {
        name: loggedUser.name,
        date: new Date().toISOString(),
        rating: score,
        comments: comment,
      }
    );

    if (response.status !== 201) {
      throw new Error("Error creating comment");
    }
  }
}
