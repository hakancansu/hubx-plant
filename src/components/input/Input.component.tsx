import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { InputProps } from './Input.type';

const Input: React.FC<InputProps> = ({
  placeholder = "Search for plants",
  placeholderTextColor = "#ABABAB",
  style,
  icon,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      {icon}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[styles.input, style]}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#333',
    marginLeft: 12,
  }
});

export default Input; 