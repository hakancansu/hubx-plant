import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DiagnoseScreenProps } from "./Diagnose.type";

export const DiagnoseScreen = (_props: DiagnoseScreenProps) => {
  const insets = useSafeAreaInsets();

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert("Success", "All data has been cleared from AsyncStorage you can restart app", [
        { text: "OK" },
      ]);
    } catch (e) {
      Alert.alert("Error", "Failed to clear data from AsyncStorage", [
        { text: "OK" },
      ]);
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.title}>Diagnose</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.text}>Delete all data from AsyncStorage for test to Dashboard Screen</Text>

        <TouchableOpacity
          style={styles.clearButton}
          onPress={clearAsyncStorage}
        >
          <Text style={styles.buttonText}>Clear All Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
    color: "#28AF6E",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  clearButton: {
    backgroundColor: "#28AF6E",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
