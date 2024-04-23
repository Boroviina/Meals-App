import {Image, Text, View, StyleSheet, ScrollView, Button} from "react-native";
import {useLayoutEffect} from "react";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

function MealDetailScreen({route, navigation}) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHeandler() {
        console.log("Pressed");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={'star-outline'}
                                   color={'white'}
                                   onTap={headerButtonPressHeandler}/>
                    }
        })
    }, [navigation, headerButtonPressHeandler]);

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