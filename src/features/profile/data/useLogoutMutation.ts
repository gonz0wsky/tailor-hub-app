import { useMutation } from "@tanstack/react-query";
import { LogoutUserUseCase } from "../application/LogoutUserUseCase";
import { ProfileRestImpl } from "./ProfileRestImpl";

export function useLogoutMutation() {
  return useMutation({
    mutationFn: () => {
      return new LogoutUserUseCase(new ProfileRestImpl()).execute();
    },
  });
}
