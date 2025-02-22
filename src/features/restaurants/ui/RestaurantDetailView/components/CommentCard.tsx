import { atoms as a, useTheme } from "@core/layout";
import { useLingui } from "@lingui/react";
import Button from "@shared/ui/components/Button";
import { FC, memo, useCallback, useState } from "react";
import { TextInput, View, ViewStyle } from "react-native";
import Score from "../../shared/components/Score";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CONFIG } from "@core/config/config";

type Props = {
  onSubmit: (content: string, score: number) => Promise<void>;
  style?: ViewStyle[];
};

const CommentCard: FC<Props> = ({ onSubmit, style }) => {
  const { i18n } = useLingui();
  const t = useTheme();

  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, setValue, formState } = useForm<{
    content: string;
    score: number;
  }>({
    mode: "onSubmit",
    defaultValues: {
      content: "",
      score: 0,
    },
    resolver: zodResolver(
      z.object({
        content: z.string().min(3),
        score: z.number().min(1).max(CONFIG.MAX_REVIEW_SCORE),
      })
    ),
  });

  const { score } = useWatch({ control });

  const handleOnChangeScore = useCallback(
    (score: number) => {
      setValue("score", score);
    },
    [setValue]
  );

  const handleOnSubmit = useCallback(() => {
    handleSubmit(async (data) => {
      setIsLoading(true);
      await onSubmit(data.content, data.score);
      setIsLoading(false);
    })();
  }, [handleSubmit, onSubmit]);

  return (
    <View
      testID="comment-card"
      style={[style, a.border, a.rounded_xl, a.p_lg, a.gap_lg]}
    >
      <Score editable onChange={handleOnChangeScore} score={score ?? 0} />
      <Controller
        name="content"
        control={control}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            testID="comment-input"
            style={[a.font_xs_regular]}
            placeholderTextColor={t.atoms.text.primary_60.color}
            placeholder={i18n.t("Escribe tu comentario sobre el restaurante")}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <Button
        testID="comment-send-button"
        disabled={!formState.isValid}
        style={[a.align_start]}
        variant="secondary"
        title={i18n.t("Enviar")}
        onPress={handleOnSubmit}
        loading={isLoading}
      />
    </View>
  );
};

export default memo(CommentCard);
