import { Me } from "@shared/domain/Me";
import { ProfileRepository } from "../domain/ProfileRepository";

export class UpdateProfileUseCase {
  constructor(private repository: ProfileRepository) {}

  async execute(key: "dni" | "birthday" | "address", value: string) {
    const loggedUser = await this.repository.getProfile();

    const updatedUser = new Me(
      loggedUser.id,
      loggedUser.name,
      loggedUser.email,
      key === "dni" ? value : loggedUser.dni,
      key === "birthday" ? value : loggedUser.birthday,
      key === "address" ? value : loggedUser.address,
      loggedUser.avatar
    );

    await this.repository.updateProfile(updatedUser);
  }
}
