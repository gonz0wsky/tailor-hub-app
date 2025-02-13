import { Review } from "@features/restaurants/domain/ReviewModel";
import { FC, memo, ReactElement } from "react";
import { ListRenderItem, ViewStyle } from "react-native";
import { FlatList } from "react-native-gesture-handler";

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
  return null;
};

type ReviewListProps = {
  children?: ReactElement;
  onPressDelete: (id: string) => void;
  onPressEdit: (id: string) => void;
  reviews: Review[];
  style?: ViewStyle[];
};

const ReviewList: FC<ReviewListProps> = ({
  children,
  onPressDelete,
  onPressEdit,
  reviews,
  style,
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
    />
  );
};

export default memo(ReviewList);
