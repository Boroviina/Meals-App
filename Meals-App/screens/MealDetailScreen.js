import {Image, Text, View, StyleSheet, ScrollView, Button} from "react-native";
import {useLayoutEffect, useContext} from "react";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import {FavouriteContext} from "../store/context/favourite-context";

function MealDetailScreen({route, navigation}) {
    const favouriteMealContext = useContext(FavouriteContext);
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavourite = favouriteMealContext.ids.includes(mealId);

    function changeFavouritesStatusHeandler() {
        if (mealIsFavourite){
            favouriteMealContext.removeFavourite(mealId);
        }else {
            favouriteMealContext.addFavourite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavourite ? 'star' : 'star-outline'}
                                   color={'white'}
                                   onTap={changeFavouritesStatusHeandler}/>
            }
        })
    }, [navigation, changeFavouritesStatusHeandler]);

    return <ScrollView style={styles.container}>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
            <MealDetails duration={selectedMeal.duration} affordability={selectedMeal.affordability}
                         complexity={selectedMeal.complexity}
                         textStyle={styles.detailText}
            />
        </View>
        <View style={styles.outerListContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingradients</Subtitle>
                <List data={selectedMeal.ingredients}/>
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps}/>
            </View>
        </View>
    </ScrollView>
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    container: {
        padding: 4,
        margin: 16,
    },
    image: {
        width: '100%',
        height: 350,
        borderRadius: 8
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listContainer: {
        width: '80%'
    },
    outerListContainer: {
        alignItems: "center"
    }

})