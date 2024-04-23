import {Pressable, Text, View, StyleSheet, Platform} from "react-native";

function CategoryGridTile({title, color, onPress}) {
    return <View style={[styles.girdItem, {backgroundColor: color}]}>
        <Pressable
            android_ripple={{color: '#ccc'}}
            style={styles.button}
            onPress={onPress}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    girdItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 8,
        overflow: Platform.OS == "android" ? "hidden" : "visible"
    },
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    }
});