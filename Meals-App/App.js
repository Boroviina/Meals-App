import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import {Ionicons} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return <Drawer.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#491010'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#5b2020'},
        drawerContentStyle: {backgroundColor: '#491010'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#491010',
        drawerActiveBackgroundColor: '#e89494'
    }}>
        <Drawer.Screen name={'Categories'} component={CategoriesScreen} options={{
            title: 'All Categories',
            drawerIcon: ({color, size}) => (<Ionicons color={color} size={size} name={'list'}/>),
        }}/>
        <Drawer.Screen name={'Favourites'} component={FavouritesScreen}
                       options={{drawerIcon: ({color, size}) => (<Ionicons color={color} size={size} name={'star'}/>)}}
        />
    </Drawer.Navigator>
}

export default function App() {
    return (<>
            <StatusBar barStyle={'light-content'}/>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: {backgroundColor: '#491010'},
                    headerTintColor: 'white',
                    contentStyle: {backgroundColor: '#5b2020'}
                }}>
                    <Stack.Screen name={'MealsCategories'}
                                  component={DrawerNavigator}
                                  options={{
                                      headerShown: false
                                  }}
                    />
                    <Stack.Screen name={'MealsOverview'} component={MealsOverviewScreen}/>
                    <Stack.Screen name={'MealDetail'} component={MealDetailScreen}
                                  options={{
                                      title: "About the Meal"
                                  }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 20
    },
});
