import {Text, View, StyleSheet, FlatList} from "react-native";

import {MEALS, CATEGORIES} from "../data/dummy-data";
import MealList from "../components/MealsList/MealList";
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

    return <MealList items={displayedMeals}/>

}

export default MealsOverviewScreen;

