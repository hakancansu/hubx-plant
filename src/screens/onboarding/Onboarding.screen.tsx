import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { PaginationDots } from "../../components/paginationdots.component/PaginationDots.component";
import Button from "../../components/button/Button.component";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { onboardingData } from "../../views/Onboarding/Onboarding.constant";
import { OnboardingView } from "../../views/Onboarding/Onboarding.view";
import { OnboardingScreenProps } from "./Onboarding.type";



export const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const insets = useSafeAreaInsets();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / Dimensions.get("window").width
    );
    setCurrentIndex(index);
  };

  const handleContinue = async () => {
    if (currentIndex < onboardingData.length - 1 && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.replace("Paywall");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/welcome/background.png")}
      style={[
        styles.background,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <FlatList
        data={onboardingData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        onScroll={handleScroll}
        renderItem={({ item }) => <OnboardingView item={item} />}
        keyExtractor={(item) => item.id}
      />

      <View
        style={{
          height: 145,
          backgroundColor: "transparent",
          position: "absolute",
          bottom: 0,
          width: "100%",
          gap: 32.5
        }}
      >
        <Button title="Continue" onPress={handleContinue} />
        <PaginationDots data={onboardingData} currentIndex={currentIndex} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 12,
  },
});
