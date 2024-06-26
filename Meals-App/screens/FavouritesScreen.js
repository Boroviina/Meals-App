import {StyleSheet, View, Text} from "react-native";
import MealList from "../components/MealsList/MealList";
import {useContext} from "react";
import {FavouriteContext} from "../store/context/favourite-context";
import {MEALS} from "../data/dummy-data";

function FavouritesScreen() {
    const favouriteMealsCtx = useContext(FavouriteContext);
    const favouriteMeals = MEALS.filter(meal => favouriteMealsCtx.ids.includes(meal.id));
    if (favouriteMeals.length===0){
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favourite meals yet.</Text>
        </View>
    }
    return <MealList items={favouriteMeals}/>
}

export default FavouritesScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        fontSize:18,
        fontWeight: "bold",
        color: 'white'

    }
})