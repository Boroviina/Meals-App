import {Text, StyleSheet, View} from "react-native";

function List({data}) {
    return data.map((dataPoint) => (
        <View key={dataPoint} style={styles.list}>
            <Text style={styles.item}>{dataPoint}</Text>
        </View>
    ));
}

export default List;

const styles = StyleSheet.create({
    list: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: '#e79f9f',
    },
    item: {
        color: '#491010',
        textAlign: "center"
    }
})