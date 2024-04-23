import {Text, View, StyleSheet} from "react-native";

function Subtitle({children}){
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles=StyleSheet.create({
    subtitle: {
        color: '#e79f9f',
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitleContainer: {
        marginVertical: 10,
        marginHorizontal: 24,
        padding: 6,
        borderBottomColor: '#e79f9f',
        borderBottomWidth: 2
    }
})