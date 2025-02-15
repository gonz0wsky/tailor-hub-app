import { AuthRepository } from "../domain/AuthRepository";

export class RegisterUserUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(email: string, name: string, password: string) {
    await this.authRepository.register(email, name, password);
  }
}
