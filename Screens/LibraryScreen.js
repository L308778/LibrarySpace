import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Constants from 'expo-constants';

export default class LibraryScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // Take params that were passed by the navigator and set them to this.state.libraryDetails
      // I actually think thats superfluous because you could just use 'this.props.route.params.libraryDetails' directly
      // or do we want to change this data. No, right? Then we shoudln't have to set the state. What do you think.
      libraryDetails: this.props.route.params.libraryDetails
    }
  }


  render() {
      // Look into console to see object with it's details. In the 'Data.json' file we can specify all the information 
      // that is passed down to this screen. Feel free to play around to render useful data maybe. (Like an image, fake UI for API data –  
      // which we don't have, max. seat capactiy, link to room-booking, etc. .. altough for now we should focus on getting the MVP :) )
      console.log(this.state.libraryDetails.libraries)
      return (
        // Here we could again do a FlatList or something like that, but we should also think about cases where we have for example 
        // only on Library (e.g. TU, WU, ...)

        //FlatList is a good way to go. I think the best approach is to build one more lib component which just renders the data and map and picture
        //I basically used the array of library from the JSON you created and inputted it into the FlatList you recommended above
        <View style={styles.container}>
          <Text style = {styles.header}> Your Library </Text>
          <FlatList
            directionalLockEnabled={true}
            horizontal={false}
            data = {this.state.libraryDetails.libraries}
            renderItem={({ item }) => (
            console.log(item),
            <TouchableOpacity onPress={() => {this.props.navigation.navigate("LibraryComponent", {libraryDetails:item}); }}>
              <View style = {styles.item}>
                <Text style = {styles.title}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )} 
        />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  header:{
    padding: 20,
    alignSelf:"center",
    marginVertical: 10,
    fontSize: 32
  },
  item: {
    backgroundColor: 'darkred',
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color:"white"
    
  },
});