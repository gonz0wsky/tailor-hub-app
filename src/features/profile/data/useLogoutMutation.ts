import { useMutation } from "@tanstack/react-query";
import { LogoutUserUseCase } from "../application/LogoutUserUseCase";
import { LogoutRestImpl } from "./LogoutRestImpl";

export function useLogoutMutation() {
  return useMutation({
    mutationFn: () => {
      return new LogoutUserUseCase(new LogoutRestImpl()).execute();
    },
  });
}
