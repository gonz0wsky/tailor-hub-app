import { IImagePicker } from "./IImagePicker";
import { ImageFile } from "./ImageFile";

export class GetImageFromGalleryUseCase {
  constructor(private imagePicker: IImagePicker) {}

  async execute(): Promise<ImageFile> {
    return this.imagePicker.pickImage();
  }
}
