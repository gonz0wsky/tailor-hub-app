import { RestaurantDetail } from "../domain/RestaurantDetailModel";
import { Restaurant } from "../domain/RestaurantModel";
import { RestaurantRepository } from "../domain/RestaurantRepository";
import { Review } from "../domain/ReviewModel";
import { User } from "../domain/User";

export class RestaurantsRestImpl implements RestaurantRepository {
  async getRestaurant(id: string): Promise<RestaurantDetail> {
    const restaurant = new Restaurant(
      `${1}`,
      "https://res.cloudinary.com/the-infatuation/image/upload/q_auto,f_auto/cms/guides/the-winter-onetwo-punch/Izakaya_sandynoto",
      `Restaurant ${1}`,
      "123 Main Street",
      4,
      4,
      false
    );

    const reviews = Array.from({ length: 10 }).map(
      (_, i) =>
        new Review(
          `${i}`,
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
          i,
          false,
          new User(`${i}`, `User ${i}`)
        )
    );

    return new RestaurantDetail(
      restaurant,
      "Lorem ipsum dolor sit amet consectetur. At vel elementum amet est nulla cras turpis. Fringilla ornare massa eu a sollicitudin vestibulum auctor risus. Elementum quam sit neque quis. A vestibulum consectetur tincidunt vitae.Lorem ipsum dolor sit amet consectetur.  At vel elementum amet est nulla cras turpis. Fringilla ornare massa eu a sollicitudin vestibulum auctor risus. Elementum quam sit neque quis. A vestibulum consectetur tincidunt vitae.Lorem ipsum dolor sit amet consectetur. At vel elementum amet est nulla cras turpis. Fringilla ornare massa eu a sollicitudin vestibulum auctor risus. Elementum quam sit neque quis. A vestibulum consectetur tincidunt vitae.",
      reviews
    );
  }

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
