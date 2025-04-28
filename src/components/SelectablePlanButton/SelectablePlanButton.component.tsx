import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import ActiveButton from '../../assets/svg/activeButton';
import InActiveButton from '../../assets/svg/inActiveButton';
import { SelectablePlanButtonProps } from './SelectablePlanButton.type';


export const SelectablePlanButton = ({ id, title, subtitle, isSelected, onPress }: SelectablePlanButtonProps) => {
  const showDiscountBadge = id === '2';

  return (
    <TouchableOpacity style={[styles.tryButton, isSelected && styles.selectedButton]} onPress={onPress}>
      {showDiscountBadge && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>Save 50%</Text>
        </View>
      )}
      
      <View style={styles.tryButtonContainer}>
        {
          isSelected ? <ActiveButton/> : <InActiveButton/>
        }
        
        <View style={styles.buttonTextContainer}>
          <Text style={styles.tryText}>{title}</Text>
          <Text style={styles.tryButtonText}>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tryButton: {
    backgroundColor: "#1C2923",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.3)",
    paddingLeft: 16,
    position: 'relative',
  },
  selectedButton: {
    borderColor: "#28AF6E",
  },
  tryButtonContainer: {
    marginTop: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioImage: {
    width: 24,
    height: 24,
  },
  buttonTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  tryText: {
    fontSize: 16,
    fontFamily: 'rubik',
    fontWeight: "500",
    color: "#FFFFFF",
  },
  tryButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  discountBadge: {
    backgroundColor: '#28AF6E',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },
  discountText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
