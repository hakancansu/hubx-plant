import React from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { CategoryCardSkeleton } from "./CategoryCard.skeleton";
import { CategoryCardProps } from "./CategoryCard.type";

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  title,
  imageUrl,
  style,
  onPress,
  loading,
}) => {
  if (loading) {
    return <CategoryCardSkeleton />;
  }

  return (
    <TouchableOpacity style={[styles.card, style]} onPress={() => onPress(id)}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    height: 152,
    flex: 1,
  },
  image: {
    height: "100%",
    aspectRatio: 1,
    position: "absolute",
    right: 0,
    bottom: 0,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
  },
  title: {
    maxWidth: "60%",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 16,
    marginLeft: 16,
    color: "#333",
    flex: 1,
  },
});

export default CategoryCard;
