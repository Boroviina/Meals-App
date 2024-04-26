import MealItem from "../MealItem";
import {FlatList, StyleSheet, View} from "react-native";


function MealList({items}) {
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
        <FlatList data={items}
                  renderItem={renderMealItem}
                  keyExtractor={(item) => item.id}
        />
    </View>
);
}

export default MealList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})