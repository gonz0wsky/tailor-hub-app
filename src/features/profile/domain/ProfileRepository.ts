import { Me } from "@shared/domain/Me";

export interface ProfileRepository {
  logout: () => Promise<void>;
  getProfile: () => Promise<Me>;
  updateProfile: (profile: Me) => Promise<void>;
}
