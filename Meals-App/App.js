import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (<>
            <StatusBar barStyle={'light-content'}/>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: {backgroundColor: '#491010'},
                    headerTintColor: 'white',
                    contentStyle:{backgroundColor: '#5b2020'}
                }}>
                    <Stack.Screen name={'MealsCategories'}
                                  component={CategoriesScreen}
                                  options={{title: "Meals Categories"}}
                    />
                    <Stack.Screen name={'MealsOverview'} component={MealsOverviewScreen}/>
                    <Stack.Screen name={'MealDetail'} component={MealDetailScreen}
                        options={{
                            headerRight: ()=> {
                                return <Button title={"Tap me"}/>
                            },
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
