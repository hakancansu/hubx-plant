import { View, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const FirstOnboardingView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleImageContainer}>
        <Image
          source={require("../../assets/images/onboarding/firstOnboarding/titleImage.png")}
          style={styles.titleImage}
          resizeMode="cover"
        />
      </View>
      <Image
        source={require("../../assets/images/onboarding/firstOnboarding/foreground.png")}
        style={styles.mainImage}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    marginBottom: 145,
    flex: 1,
  },
  titleImageContainer: {
    paddingHorizontal: 24,
    alignItems: 'flex-start',
  },
  titleImage: {
    marginTop: 12,
    width: width - 48, 
  },
  mainImage: {
    width: "100%",
    height: "100%",
  },
});
