import Icon from "@shared/ui/components/Icon";
import { Props as IconProps } from "@shared/ui/components/Icon/types";
import { FC, memo } from "react";
import { BorderlessButton } from "react-native-gesture-handler";

type Props = {
  testID?: string;
  onPress: () => void;
} & IconProps;

const IconButton: FC<Props> = ({ onPress, style, testID, ...rest }) => {
  return (
    <BorderlessButton testID={testID} onPress={onPress} style={style}>
      <Icon {...rest} />
    </BorderlessButton>
  );
};

export default memo(IconButton);
