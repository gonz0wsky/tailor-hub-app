import { useState } from "react";

export const useRestaurantCreateViewModel = () => {
  const [state, setState] = useState<"idle" | "success" | "error">("idle");

  return { state };
};
