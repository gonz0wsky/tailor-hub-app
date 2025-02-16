import { client } from "@core/api/client";
import { useStore } from "@core/store";
import { ProfileRepository } from "../domain/ProfileRepository";
import { Me } from "@shared/domain/Me";

export class ProfileRestImpl implements ProfileRepository {
  async logout(): Promise<void> {
    await client.post("/auth/logout");
    useStore.getState().setLoggedUser(null);
  }

  async getProfile(): Promise<Me> {
    const loggedUser = useStore.getState().loggedUser;

    if (!loggedUser) {
      throw new Error("User not logged in");
    }

    return loggedUser;
  }

  async updateProfile(me: Me): Promise<void> {
    useStore.getState().setLoggedUser(me);
  }
}
