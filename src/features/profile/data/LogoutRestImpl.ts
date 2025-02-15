import { client } from "@core/api/client";
import { useStore } from "@core/store";
import { LogoutRepository } from "../domain/LogoutRepository";

export class LogoutRestImpl implements LogoutRepository {
  async logout(): Promise<void> {
    await client.post("/auth/logout");
    useStore.getState().setLoggedUser(null);
  }
}
