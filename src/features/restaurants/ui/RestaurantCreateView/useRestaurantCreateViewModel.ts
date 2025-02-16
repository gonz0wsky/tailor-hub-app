import { useNavigation } from "@react-navigation/native";
import { GetImageFromGalleryUseCase } from "@shared/integrations/gallery/GetImageFromGalleryUseCase";
import { ImagePickerImpl } from "@shared/integrations/gallery/ImagePickerImpl";
import { useCallback, useState } from "react";

export const useRestaurantCreateViewModel = () => {
  const { canGoBack, goBack } = useNavigation();

  const [state, setState] = useState<"idle" | "success" | "error">("idle");

  const handlePressCancel = useCallback(() => {
    canGoBack() && goBack();
  }, [canGoBack, goBack]);

  const handleAddImage = useCallback(async () => {
    try {
      const getImage = new GetImageFromGalleryUseCase(new ImagePickerImpl());

      const image = await getImage.execute();

      return image.path;
    } catch (error) {
      return "";
    }
  }, []);

  return { state, handlePressCancel, handleAddImage };
};
