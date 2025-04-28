import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { BottomTabBarButtonProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../assets/svg/home";
import Diagnose from "../assets/svg/diagnose";
import Scanner from "../assets/svg/Scanner";
import Leaf from "../assets/svg/leaf";
import Profie from "../assets/svg/profile";
import { HomeScreen } from "../screens/home/Home.screen";
import { DiagnoseScreen } from "../screens/diagnose/Diagnose.screen";
const Tab = createBottomTabNavigator();

const ScannerScreen = () => (
  <View style={styles.screen}>
    <Text>Scanner</Text>
  </View>
);
const MyGardenScreen = () => (
  <View style={styles.screen}>
    <Text>My Garden</Text>
  </View>
);
const ProfileScreen = () => (
  <View style={styles.screen}>
    <Text>Profile</Text>
  </View>
);

const CustomTabBarButton = ({ children, onPress }: BottomTabBarButtonProps) => (
  <TouchableOpacity
    style={styles.customButton}
    onPress={onPress}
    activeOpacity={0.8}
  >
    {children}
  </TouchableOpacity>
);

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Home color={focused ? "#28AF6E" : "#BDBDBD"} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabBarLabel,
                { color: focused ? "#28AF6E" : "#BDBDBD" },
              ]}
            >
              Home
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Diagnose"
        component={DiagnoseScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Diagnose color={focused ? "#28AF6E" : "#BDBDBD"} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabBarLabel,
                { color: focused ? "#28AF6E" : "#BDBDBD" },
              ]}
            >
              Diagnose
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="scanner"
        component={ScannerScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Scanner color={focused ? "#28AF6E" : "#BDBDBD"} />
          ),
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <CustomTabBarButton {...props} />
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="MyGarden"
        component={MyGardenScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Leaf color={focused ? "#28AF6E" : "#BDBDBD"} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabBarLabel,
                { color: focused ? "#28AF6E" : "#BDBDBD" },
              ]}
            >
              My Garden
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Profie color={focused ? "#28AF6E" : "#BDBDBD"} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabBarLabel,
                { color: focused ? "#28AF6E" : "#BDBDBD" },
              ]}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarStyle: {
    elevation: 5,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    height: 70,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 10 },
    paddingBottom: Platform.OS === "ios" ? 20 : 0,
  },
  customButton: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#28AF6E",
    borderWidth: 4,
    borderColor: "#5CC190",
  },
  tabBarLabel: {
    fontSize: 10,
    marginTop: 5,
  },
});
