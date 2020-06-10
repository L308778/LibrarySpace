import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer,navigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from "./Screens/HomeScreen.js"
import SearchScreen from "./Screens/SearchScreen.js"
import LibraryScreen from "./Screens/LibraryScreen.js"
import LibraryComponent from "./Screens/LibraryComponent.js"


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: null }}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ title: null }}/>
        <Stack.Screen name="LibraryScreen" component={LibraryScreen} options={{ title: null}}/>
        <Stack.Screen name="LibraryComponent" component={LibraryComponent} options={{ title: null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;