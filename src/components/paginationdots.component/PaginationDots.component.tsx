import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PaginationDotsProps } from './PaginationDots.type';


export const PaginationDots: React.FC<PaginationDotsProps> = ({ data, currentIndex }) => {
  return (
    <View style={styles.container}>
      {data.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentIndex === index ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
});
