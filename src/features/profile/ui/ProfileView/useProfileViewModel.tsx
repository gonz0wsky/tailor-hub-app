import { useStore } from "@core/store";
import { useLogoutMutation } from "@features/profile/data/useLogoutMutation";
import { useUpdateMeMutation } from "@features/profile/data/useUpdateMeMutation";
import { useCallback } from "react";

export const useProfileViewModel = () => {
  const profile = useStore((state) => state.loggedUser);

  const { mutateAsync: logoutUser, isPending: isLogoutLoading } =
    useLogoutMutation();
  const { mutateAsync: updateMe } = useUpdateMeMutation();

  const handlePressLogout = useCallback(async () => {
    await logoutUser();
  }, [logoutUser]);

  const handleUpdateDni = useCallback(
    async (dni: string) => {
      updateMe({ key: "dni", value: dni });
    },
    [updateMe]
  );

  const handleUpdateBirthday = useCallback(
    async (birthday: string) => {
      updateMe({ key: "birthday", value: birthday });
    },
    [updateMe]
  );

  const handleUpdateAddress = useCallback(
    async (address: string) => {
      updateMe({ key: "address", value: address });
    },
    [updateMe]
  );

  return {
    profile,
    isLogoutLoading,
    handlePressLogout,
    handleUpdateDni,
    handleUpdateBirthday,
    handleUpdateAddress,
  };
};
