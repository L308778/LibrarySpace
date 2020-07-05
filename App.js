import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, navigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Import Screens to be used for navigation
import SearchScreen from './Screens/MainScreens/SearchScreen.js';
import LibraryScreen from './Screens/MainScreens/LibraryScreen.js';
import LibraryMap from './Screens/Features/MapScreen.js';
import LibraryData from './Screens/Features/DataScreen.js';
import SplashScreen from './Screens/MainScreens/SplashScreen';


/* Two navigators are used for the application. The Main Navigator is a stack which navigates through the ./Screens/MainScreens
Folder and is basically navigating through the whole app. 
The LibFeature Navigator is a tab Navigator and navigates through the Feature Screens in the ./Screens/Features Folder. The
Features are embedded in the screen which then actually show data illustrations or maps etc.*/
const Feature = createMaterialTopTabNavigator();
const Main = createStackNavigator();


function LibFeature(props) {
  return (
    <Feature.Navigator
      tabBarOptions={{
        activeTintColor: 'darkred',
        labelStyle: { fontSize: 15, fontWeight: "bold", margin: 10 },
        style: { backgroundColor: 'white' },
        indicatorStyle: { backgroundColor: "darkred" }
      }}>
      <Feature.Screen
        name="Availability"
        component={LibraryData}
      />
      <Feature.Screen
        name="Location"
        component={LibraryMap}
        initialParams={props.route.params}
      />
    </Feature.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Main.Navigator initialRouteName="SplashScreen">
        <Main.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ title: null, headerShown: false }}
        />
        <Main.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ title: null, headerShown: false }}
        />
        <Main.Screen
          name="LibraryScreen"
          component={LibraryScreen}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: 'darkred',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Main.Screen
          name="LibraryComponent"
          component={LibFeature}
          options={{ title: null, headerShown: false }}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
}

export default App;
