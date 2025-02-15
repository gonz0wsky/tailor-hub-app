import { client } from "@core/api/client";
import { AuthRepository } from "../domain/AuthRepository";
import { Me } from "@shared/domain/Me";
import { LoginResponseDTO } from "./LoginResponseDTO";
import { useStore } from "@core/store";

export class AuthRestImpl implements AuthRepository {
  async login(email: string, password: string): Promise<Me> {
    const response = await client.post<LoginResponseDTO>("/auth/login", {
      email,
      password,
    });

    if (response.status !== 200) {
      throw new Error("Login failed");
    }

    const body = await response.data;

    const me = new Me(
      body._id,
      body.name,
      body.email,

      // Mock data
      "123456789D",
      "19/09/1990",
      "Calle de la República, 123",
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/futurama/5/51/Bender.jpg"
    );

    useStore.getState().setLoggedUser(me);

    return me;
  }

  async register(email: string, name: string, password: string): Promise<void> {
    const response = await client.post("/auth/signup", {
      email,
      name,
      password,
    });

    if (response.status !== 201) {
      throw new Error("Register failed");
    }
  }
}
