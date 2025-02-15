import { LogoutRepository } from "../domain/LogoutRepository";

export class LogoutUserUseCase {
  constructor(private authRepository: LogoutRepository) {}

  async execute() {
    await this.authRepository.logout();
  }
}
