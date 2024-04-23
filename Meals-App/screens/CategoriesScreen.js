import {CATEGORIES} from '../data/dummy-data';
import {FlatList} from "react-native";
import CategoryGridTile from '../components/CategoryGridTile'

function CategoriesScreen({navigation}) {
    function renderCathegoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            });
        }

        return <CategoryGridTile title={itemData.item.title}
                                 color={itemData.item.color}
                                 onPress={pressHandler}
        />
    }


    return (<FlatList data={CATEGORIES}
                      renderItem={renderCathegoryItem}
                      keyExtractor={(item) => item.id}
                      numColumns={2}
    />);
}

export default CategoriesScreen;