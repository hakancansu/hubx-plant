import { ViewStyle } from "react-native";

export interface CategoryCardProps {
  id: number;
  title: string;
  imageUrl: string;
  style?: ViewStyle;
  onPress: (id: number) => void;
  loading?: boolean;
}
