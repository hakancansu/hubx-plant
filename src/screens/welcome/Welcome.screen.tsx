import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import Button from "../../components/button/Button.component";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { WelcomeScreenParamList } from "./Welcome.type";

export const Welcome = ({ navigation }: WelcomeScreenParamList) => {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require("../../assets/images/welcome/background.png")}
      style={[styles.background]}
    >
      <View style={[styles.textContainer, { paddingTop: insets.top }]}>
        <Text style={styles.title}>Welcome to PlantApp'</Text>
        <Text style={styles.description}>
          'Identify more than 3000+ plants with 88% accuracy.'
        </Text>
      </View>

      <View style={{ paddingTop: 24, flex: 1 }}>
        <Image
          source={require("../../assets/images/welcome/foreground.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={{ height: 145 }}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate("Onboarding")}
        />
        <Text style={styles.bottomText}>
          By tapping next, you are agreeing to PlantID Terms of Use & Privacy
          Policy.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  content: {
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    marginTop: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#555",
  },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  textContainer: {
    width: "100%",
    paddingHorizontal: 24,
    alignItems: "flex-start",
    paddingTop: 12,
  },
  bottomText: {
    marginTop: 12,
    fontSize: 12,
    paddingHorizontal: 70,
    textAlign: "center",
  },
});
