import {Text, View, StyleSheet} from "react-native";

function MealDetails({duration, complexity, affordability, style, textStyle}) {
    return <View style={[styles.details, style]}>
        <Text style={textStyle}>{duration} min</Text>
        <Text style={textStyle}>{complexity.toUpperCase()}</Text>
        <Text style={textStyle}>{affordability.toUpperCase()}</Text>
    </View>
}

export default MealDetails;
const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 10,
        marginHorizontal: 8
    }
})