import { Me } from "@shared/domain/Me";

export interface AuthRepository {
  login: (email: string, password: string) => Promise<Me>;
  register: (email: string, name: string, password: string) => Promise<void>;
}
