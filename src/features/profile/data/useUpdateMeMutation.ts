import { useMutation } from "@tanstack/react-query";
import { UpdateProfileUseCase } from "../application/UpdateProfileUseCase";
import { ProfileRestImpl } from "./ProfileRestImpl";

type Variables = { key: "dni" | "birthday" | "address"; value: string };

export function useUpdateMeMutation() {
  return useMutation<void, Error, Variables>({
    mutationFn: (data: Variables) => {
      return new UpdateProfileUseCase(new ProfileRestImpl()).execute(
        data.key,
        data.value
      );
    },
  });
}
