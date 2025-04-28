import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CategoryCard from '../categoryCard/CategoryCard.component';
import { CategoryItem } from './CategoryList.type';


interface CategoryListProps {
  data: CategoryItem[];
  onItemPress: (id: number) => void;
}

const ITEM_MARGIN = 12;

const CategoryList: React.FC<CategoryListProps> = ({ data, onItemPress }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.list}
      columnWrapperStyle={styles.row}
      renderItem={({ item }) => (
        <CategoryCard
          id={item.id}
          title={item.title}
          imageUrl={item.image.url}
          onPress={onItemPress}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: ITEM_MARGIN,
    paddingTop: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: ITEM_MARGIN,
  },
});

export default CategoryList;
