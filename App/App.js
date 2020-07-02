import React from 'react';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './Screens/HomeScreen.js';
import SearchScreen from './Screens/SearchScreen.js';
import LibraryScreen from './Screens/LibraryScreen.js';
import LibraryMap from './Screens/LibraryScreens/LibMap.js';
import LibraryData from './Screens/LibraryScreens/LibData.js';
import SplashScreen from './Screens/SplashScreen';
import { createSwitchNavigator } from 'react-navigation';

// TODO: Change name -> variable names should be DESCRIPTIVE
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

//Using a nested stack navigator with a tab navigator inside to display the library features on separate screens. Here we are passing initial parameters to the second Tab Screen (MapScreen), that we are able to fetch the parameters we send to the first screen (DataScreen)
function LibTabs(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="DataScreen" component={LibraryData} />
      <Tab.Screen
        name="MapScreen"
        component={LibraryMap}
        initialParams={props.route.params}
      />
    </Tab.Navigator>
  );
};

function App () {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ title: null, headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: null, headerShown: false }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ title: null , headerShown:false}}
        />
        <Stack.Screen
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
        <Stack.Screen
          name="LibraryComponent"
          component={LibTabs}
          options={{ title: null, headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>  
  )
}


export default App;
