import { View, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const SecondOnboardingView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleImageContainer}>
        <Image
          source={require("../../assets/images/onboarding/secondOnboarding/titleImage.png")}
          style={styles.titleImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../assets/images/onboarding/secondOnboarding/leaf.png")}
          style={styles.objectImage}
          resizeMode="cover"
        />
        <Image
          source={require("../../assets/images/onboarding/secondOnboarding/foreground.png")}
          style={styles.mainImage}
          resizeMode="contain"
        />
        <Image
          source={require("../../assets/images/onboarding/secondOnboarding/artwork.png")}
          style={styles.artworkImage}
        />
      </View>
      <Image
        source={require("../../assets/images/onboarding/secondOnboarding/overlay.png")}
        style={styles.overlayImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    flex: 1,
    gap: 24,
    paddingTop: 12,
  },
  titleImageContainer: {
    paddingHorizontal: 24,
    alignItems: 'flex-start',
  },
  titleImage: {
    marginTop: 12,
    width: width - 48,
  },
  imageWrapper: {
    flex: 1,
  },
  objectImage: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  mainImage: {
    position: "absolute",
    top: 79,
    width: "100%",
  },
  artworkImage: {
    position: "absolute",
    top: 0,
    right: 12,
  },
  overlayImage: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
