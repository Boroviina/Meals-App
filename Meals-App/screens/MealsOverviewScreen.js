import {Text, View, StyleSheet, FlatList} from "react-native";

import {MEALS, CATEGORIES} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import category from "../models/category";
import {useLayoutEffect} from 'react'

function MealsOverviewScreen({route, navigation}) {
    //or
    //const route = useRoute();
    //route.params
    const catId = route.params.categoryId;      //id of cathegory
    const displayedMeals = MEALS.filter((mealItem) => { //filter meals which cathegoryId array contains the id of displayed cathegory
        return mealItem.categoryIds.indexOf(catId) >= 0;    //if id exist return 1, if not -1
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);


    function renderMealItem(itemData) {
        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration
        }
        return <MealItem {...mealItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals}
                      renderItem={renderMealItem}
                      keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})