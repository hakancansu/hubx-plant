import React from 'react';
import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  placeholderTextColor?: string;
  icon?: React.ReactNode;
} 