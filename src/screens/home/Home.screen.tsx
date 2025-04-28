import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Linking,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useMemo } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import Letter from "../../assets/svg/letter";
import Searh from "../../assets/svg/searh";
import Arrow from "../../assets/svg/arrow";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchQuestions } from "../../redux/product/productsSlice";
import { fetchCategories } from "../../redux/categories/categoriesSlice";
import Input from "../../components/input/Input.component";
import CategoryCard from "../../components/categoryCard/CategoryCard.component";
import { withSkeletonData } from "../../utils/array.helper";
import PlantCard from "../../components/plantCard/PlantCard.component";
import { HomeScreenProps } from "./Home.type";

export const HomeScreen = (_props: HomeScreenProps) => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const { questions, loading: questionsLoading } = useAppSelector(
    (state) => state.products
  );

  const { categories, loading: categoriesLoading } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchCategories());
  }, [dispatch]);

 

  const handlePress = (uri: string) => {
    Linking.openURL(uri);
  };

  const handleCategoryPress = (uri: string) => {
    Linking.openURL(uri);

  };

  const questionsData = useMemo(() => {
    return questions.sort((a, b) => a?.order - b?.order);
  }, [questions]);

  const renderHeader = () => {
    return (
      <View>
        <ImageBackground
          source={require("../../assets/images/tab/background.png")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={[styles.content, { marginTop: insets.top + 3 }]}>
            <Text style={styles.headerTopText}>Hi plant lover</Text>
            <Text style={styles.headerMidText}>Good Afternoon! ⛅</Text>
            <View style={styles.searchWrapper}>
              <Input style={styles.input} icon={<Searh color={"#ABABAB"} />} />
            </View>
          </View>
        </ImageBackground>

        <TouchableOpacity style={styles.premiumButton}>
          <View style={styles.premiumButtonContent}>
            <Letter />
            <View style={styles.premiumTextWrapper}>
              <Text style={styles.premiumTitle}>FREE Premium Available</Text>
              <Text style={styles.premiumSubtitle}>
                Tap to upgrade your account!
              </Text>
            </View>
            <Arrow color={"#EFD197"} />
          </View>
        </TouchableOpacity>

        <Text style={styles.getTitle}>Get Started</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginHorizontal: 24,
            marginTop: 16,
            gap: 10,
          }}
        >
          {withSkeletonData(questionsData, questionsLoading)?.map(
            (item, index) => {
              return (
                <PlantCard
                  key={item?.id?.toString() || index.toString()}
                  title={item.title}
                  imageUri={item.image_uri}
                  onPress={() => handlePress(item.uri)}
                  loading={questionsLoading}
                />
              );
            }
          )}
        </ScrollView>
      </View>
    );
  };

  const itemWidth = useMemo(() => {
    return (Dimensions.get("window").width - 60) / 2;
  }, []);

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      ListHeaderComponentStyle={{ marginBottom: 24 }}
      data={withSkeletonData(categories, categoriesLoading)}
      keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
      numColumns={2}
      contentContainerStyle={styles.list}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <View style={[{ width: itemWidth }]}>
            <CategoryCard
              id={item.id}
              title={item.title}
              imageUrl={item?.image?.url}
              loading={categoriesLoading}
              onPress={() => handleCategoryPress(item.image.url)}
            
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
  },
  content: {
    marginHorizontal: 24,
    marginBottom: 14,
  },
  premiumButton: {
    backgroundColor: "#24201A",
    margin: 24,
    borderRadius: 12,
  },
  premiumButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 13,
  },
  premiumTextWrapper: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },
  premiumTitle: {
    fontSize: 16,
    color: "#E5C990",
    fontWeight: "700",
  },
  premiumSubtitle: {
    fontSize: 13,
    fontWeight: "400",
    color: "#E5C990",
  },
  headerTopText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 6,
    fontWeight: "100",
  },
  headerMidText: {
    fontSize: 24,
    fontWeight: "500",
    color: "#13231B",

    marginBottom: 16,
  },
  searchWrapper: {
    width: "100%",
    opacity: 0.75,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#333",
  },
  getTitle: {
    color: "#13231B",
    marginLeft: 24,
    fontWeight: "500",
    fontSize: 15,
  },
  list: {
    paddingTop: 16,
  },
  row: {
    marginHorizontal: 24,
    justifyContent: "space-between",
    marginBottom: 12,
  },
});
