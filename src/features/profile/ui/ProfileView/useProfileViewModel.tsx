import { useStore } from "@core/store";
import { useLogoutMutation } from "@features/profile/data/useLogoutMutation";
import { Me } from "@shared/domain/Me";
import { useCallback } from "react";

export const useProfileViewModel = () => {
  const profile = useStore((state) => state.loggedUser);

  const { mutateAsync: logoutUser, isPending: isLogoutLoading } =
    useLogoutMutation();

  const handlePressLogout = useCallback(async () => {
    await logoutUser();
  }, [logoutUser]);

  return { profile, isLogoutLoading, handlePressLogout };
};
