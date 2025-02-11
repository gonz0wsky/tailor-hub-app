import { ScreenName } from "./params";

export const paths: Record<ScreenName, string> = {
  Onboarding: "/onboarding",
  RestaurantCreate: "/restaurant/create",
  RestaurantDetail: "/restaurant/detail",
  RestaurantsList: "/restaurants",
  SignIn: "/signin",
  UserProfile: "/user/profile",
} as const;
