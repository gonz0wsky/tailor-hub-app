import { ProfileRepository } from "../domain/ProfileRepository";

export class LogoutUserUseCase {
  constructor(private repository: ProfileRepository) {}

  async execute() {
    await this.repository.logout();
  }
}
