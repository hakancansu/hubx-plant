import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
} from "react-native";
import { PlantCardSkeleton } from "./PlantCard.skeleton";
import { PlantCardProps } from "./PlantCard.type";


const PlantCard: React.FC<PlantCardProps> = ({
  title,
  imageUri,
  onPress,
  loading,
}) => {
  if (loading) {
    return <PlantCardSkeleton />;
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <ImageBackground
        source={{ uri: imageUri }}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 240,
    height: 164,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 12,
    overflow: "hidden",
  },
  imageStyle: {
    borderRadius: 12,
  },
  textContainer: {
    backgroundColor: "#0E140F",
  },
  title: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "400",
    marginHorizontal: 14,
    marginBottom: 13,
  },
  subtitle: {
    color: "#ddd",
    fontSize: 14,
    marginTop: 4,
  },
});

export default PlantCard;
