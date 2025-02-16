import { atoms as a } from "@core/layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLingui } from "@lingui/react";
import Button from "@shared/ui/components/Button";
import FormTextInput from "@shared/ui/components/FormTextInput";
import {
  addressSchema,
  descriptionSchema,
  nameSchema,
} from "@shared/validations";
import { FC, memo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { View, ViewStyle } from "react-native";
import { z } from "zod";
import ImagePicker from "./ImagePicker";

type NewRestaurantFormData = {
  address: string;
  description: string;
  image: string;
  name: string;
};

type Props = {
  onSubmit: (data: NewRestaurantFormData) => void;
  onAddImage: () => Promise<string>;
  style?: ViewStyle[];
};

const NewRestaurantForm: FC<Props> = ({ onSubmit, onAddImage, style }) => {
  const { i18n } = useLingui();

  const { control, handleSubmit } = useForm<NewRestaurantFormData>({
    mode: "onSubmit",
    defaultValues: {
      image: "",
      name: "",
      address: "",
      description: "",
    },
    resolver: zodResolver(
      z.object({
        image: z.string(),
        name: nameSchema,
        address: addressSchema,
        description: descriptionSchema,
      })
    ),
  });

  const onPressSubmit = useCallback(() => {
    handleSubmit((data) => {
      onSubmit(data);
    })();
  }, [handleSubmit, onSubmit]);

  return (
    <View style={[style]}>
      <ImagePicker
        onAddImage={onAddImage}
        style={[a.align_self_center]}
        name="image"
        control={control}
      />
      <View style={[a.gap_lg, a.mt_2xl]}>
        <FormTextInput
          control={control}
          name="name"
          label={i18n.t("Nombre de restaurante:")}
          placeholder={i18n.t("Nombre del restaurante")}
          testID="form-name"
          type="text"
        />
        <FormTextInput
          control={control}
          name="address"
          label={i18n.t("Dirección del restaurante")}
          placeholder={i18n.t("Dirección")}
          testID="form-address"
          type="text"
        />
        <FormTextInput
          control={control}
          name="description"
          label={i18n.t("Descripción del restaurante")}
          placeholder={i18n.t("Escribe información acerca del restaurante")}
          testID="form-description"
          type="textarea"
        />
        <Button
          testID="submit-button"
          variant="secondary"
          title={i18n.t("Guardar")}
          onPress={onPressSubmit}
        />
      </View>
    </View>
  );
};

export default memo(NewRestaurantForm);
