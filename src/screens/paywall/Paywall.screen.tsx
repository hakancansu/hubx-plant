import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../../components/button/Button.component";
import Faster from "../../assets/svg/faster";
import Unlimited from "../../assets/svg/unlimited";
import Detailed from "../../assets/svg/detailed";
import { SelectablePlanButton } from "../../components/SelectablePlanButton/SelectablePlanButton.component";
import { PaywallScreenProps } from "./Paywall.type";

export const PaywallScreen = ({ navigation }: PaywallScreenProps) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("2");
  const handleTryFree = async () => {
    navigation.replace("TabNavigator");
  };

  const handleClose = async () => {
    await AsyncStorage.setItem("onboardingShown", "true");
    navigation.replace("TabNavigator");
  };

  const features = [
    {
      id: "1",
      title: "Unlimited",
      subTitle: "Plant Identify",
      icon: Unlimited,
    },
    {
      id: "2",
      title: "Faster",
      subTitle: "Process",
      icon: Faster,
    },
    {
      id: "3",
      title: "Detailed",
      subTitle: "Plant care",
      icon: Detailed,
    },
  ];

  const plans = [
    { id: "1", title: "1 Month", subtitle: "$2.99/month, auto renewable" },
    {
      id: "2",
      title: "1 Year",
      subtitle: "First 3 days free, then $529,99/year",
    },
  ];

  const renderFeatureItem = ({
    item,
  }: {
    item: { id: string; title: string; subTitle: string; icon: any };
  }) => (
    <View style={styles.featureItem}>
      <item.icon style={styles.icon} />
      <Text style={styles.featureTitle}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.subTitle}</Text>
    </View>
  );

  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: "#001f1f",
        },
      ]}
    >
      <ImageBackground
        source={require("../../assets/images/paywall/Image-6.png")}
        style={[
          {
            height: "100%",
            width: "100%",
          },
        ]}
      >
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Image
            source={require("../../assets/images/paywall/close.png")}
            style={styles.closeIcon}
          />
        </TouchableOpacity>

        <View
          style={{
            paddingHorizontal: 24,
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <View>
            <View>
              <Text style={styles.plantTitle}>
                <Text style={styles.bold}>PlantApp</Text> Premium
              </Text>
              <Text style={styles.plantSubtitle}>Access All Features</Text>
            </View>

            <FlatList
              data={features}
              keyExtractor={(item) => item.id}
              renderItem={renderFeatureItem}
              contentContainerStyle={styles.featuresList}
              nestedScrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
            <View style={{ gap: 16 }}>
              {plans.map((plan) => (
                <SelectablePlanButton
                  key={plan.id}
                  title={plan.title}
                  subtitle={plan.subtitle}
                  isSelected={selectedPlanId === plan.id}
                  id={plan.id}
                  onPress={() => setSelectedPlanId(plan.id)}
                />
              ))}
            </View>
            <Button
              title="Continue"
              onPress={handleTryFree}
              style={{ marginHorizontal: 0, marginRight: 24, marginTop: 26 }}
            />

            <View style={{ marginHorizontal: 24, gap: 10, marginTop: 8 }}>
              <Text
                style={{
                  fontSize: 9,
                  fontWeight: 300,
                  color: "#FFFFFF85",
                  textAlign: "center",
                }}
              >
                After the 3-day free trial period you'll be charged ₺274.99 per
                year unless you cancel before the trial expires. Yearly
                Subscription is Auto-Renewable
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  color: "#FFFFFF80",
                  textAlign: "center",
                }}
              >
                Terms • Privacy • Restore
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
  },

  card: {
    position: "absolute",
    bottom: 0,
    borderRadius: 12,

    marginBottom: 20,
  },

  itleContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
  bold: {
    fontWeight: "bold",
  },
  icon: {
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#aaa",
    marginTop: 8,
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 32,
  },

  featureTitle: {
    color: "#fff",
    fontWeight: 500,
    fontSize: 20,
  },
  subTitle: {
    fontSize: 13,
    fontWeight: 400,
    color: "#FFFFFF",
  },
  featureDescription: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 4,
  },

  planText: {
    fontSize: 16,
  },
  plantTitle: {
    fontSize: 30,
    color: "#FFFFFF",
    fontFamily: "visby",
  },
  plantSubtitle: {
    fontSize: 17,
    color: "#FFFFFF",
    fontFamily: "rubik",
  },
  featuresList: {
    marginTop: 20,
    marginBottom: 19,
  },
  featureItem: {
    marginRight: 8,
    backgroundColor: "#222F29",
    padding: 10,
    borderRadius: 14,
    width: 156,
    height: 130,
    paddingLeft: 8,
    textAlign: "center",
  },
  featureText: {
    color: "#fff",
    fontSize: 16,
  },
  tryButton: {
    backgroundColor: "#635F5F",
    marginRight: 24,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.3)",
    paddingLeft: 16,
  },
  tryButtonContainer: {
    marginTop: 14,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTextContainer: {
    marginLeft: 12,
  },
  radioImage: {
    width: 20,
    height: 20,
  },
  tryText: {
    fontSize: 16,
    fontFamily: "rubik",
    fontWeight: 500,
    color: "#FFFFFF",
  },
  tryButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: "#aaa",
  },
  closeButton: {
    position: "absolute",
    top: 55,
    right: 20,
    padding: 5,
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
});
