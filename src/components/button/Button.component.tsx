import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ButtonProps } from "./Button.type";

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  backgroundColor = "#28AF6E",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }, style]}
      activeOpacity={0.8}
    >
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    
    paddingVertical: 16,
    marginHorizontal: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Button;
