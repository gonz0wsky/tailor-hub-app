import { IImagePicker } from "./IImagePicker";
import { ImageFile } from "./ImageFile";
import * as ImagePicker from "expo-image-picker";

export class ImagePickerImpl implements IImagePicker {
  async pickImage(): Promise<ImageFile> {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    const path = result.assets?.[0]?.uri;

    if (path) {
      return new ImageFile(path);
    }

    throw new Error("No image selected");
  }
}
