import { ImageFile } from "./ImageFile";

export interface IImagePicker {
  pickImage(): Promise<ImageFile>;
}
