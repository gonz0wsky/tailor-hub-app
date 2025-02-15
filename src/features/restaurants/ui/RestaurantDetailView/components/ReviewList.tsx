import { atoms as a, useTheme } from "@core/layout";
import { Review } from "@features/restaurants/domain/ReviewModel";
import { FC, memo, ReactElement } from "react";
import {
  FlatListProps,
  ListRenderItem,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Score from "../../shared/components/Score";
import Button from "@shared/ui/components/Button";
import { useLingui } from "@lingui/react";
import { fnWithId } from "@shared/utils/fnWithId";

const Separator: FC = () => {
  const t = useTheme();
  return <View style={[a.border, t.atoms.border.secondary]} />;
};

type ReviewItemProps = {
  review: Review;
  onPressEdit: (id: string) => void;
  onPressDelete: (id: string) => void;
};

const ReviewItem: FC<ReviewItemProps> = ({
  review,
  onPressEdit,
  onPressDelete,
}) => {
  const { i18n } = useLingui();

  return (
    <View style={[a.py_lg]}>
      <Text style={[a.font_xs_semibold]}>{review.creator.name}</Text>
      <Score style={[a.ml_auto, a.mt_sm]} score={review.score} iconSize={16} />
      <Text style={[a.mt_sm, a.font_xs_regular]}>{review.content}</Text>
      {review.canEdit && (
        <View style={[a.flex_row, a.gap_lg, a.justify_end, a.mt_lg]}>
          <Button
            size="small"
            variant="secondary"
            title={i18n.t("Editar")}
            onPress={fnWithId(onPressEdit, review.id)}
          />
          <Button
            size="small"
            variant="secondary"
            title={i18n.t("Eliminar")}
            onPress={fnWithId(onPressDelete, review.id)}
          />
        </View>
      )}
    </View>
  );
};

type ReviewListProps = {
  children?: ReactElement;
  onPressDelete: (id: string) => void;
  onPressEdit: (id: string) => void;
  reviews: Review[];
  style?: ViewStyle[];
} & Pick<FlatListProps<Review>, "onRefresh" | "refreshing">;

const ReviewList: FC<ReviewListProps> = ({
  children,
  onPressDelete,
  onPressEdit,
  reviews,
  style,
  onRefresh,
  refreshing,
}) => {
  const renderItem: ListRenderItem<Review> = ({ item }) => {
    return (
      <ReviewItem
        review={item}
        onPressEdit={onPressEdit}
        onPressDelete={onPressDelete}
      />
    );
  };

  return (
    <FlatList
      data={reviews}
      ListHeaderComponent={children}
      renderItem={renderItem}
      style={style}
      contentContainerStyle={[a.px_lg]}
      ItemSeparatorComponent={Separator}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
};

export default memo(ReviewList);
