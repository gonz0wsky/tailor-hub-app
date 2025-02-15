import { useMutation } from "@tanstack/react-query";
import { AuthRestImpl } from "./AuthRestImpl";
import { LoginUserUseCase } from "../application/LoginUserUseCase";
import { Me } from "@shared/domain/Me";

type Variables = { email: string; password: string };

export function useLoginMutation() {
  return useMutation<Me, Error, Variables>({
    mutationFn: (data: Variables) => {
      return new LoginUserUseCase(new AuthRestImpl()).execute(
        data.email,
        data.password
      );
    },
  });
}
