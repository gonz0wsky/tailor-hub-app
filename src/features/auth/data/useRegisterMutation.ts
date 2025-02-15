import { useMutation } from "@tanstack/react-query";
import { RegisterUserUseCase } from "../application/RegisterUserUseCase";
import { AuthRestImpl } from "./AuthRestImpl";

type Variables = { email: string; name: string; password: string };

export function useRegisterMutation() {
  return useMutation<void, Error, Variables>({
    mutationFn: (data: Variables) => {
      return new RegisterUserUseCase(new AuthRestImpl()).execute(
        data.email,
        data.name,
        data.password
      );
    },
  });
}
