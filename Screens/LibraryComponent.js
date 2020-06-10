import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Constants from 'expo-constants';

//demo comment
export default class LibraryScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // Copy the route parameter into the state like we did in the LibraryScreen
      libraryDetails: this.props.route.params.libraryDetails
    }
  }


  render() {
      // Look into console to see object with it's details. In the 'Data.json' file we can specify all the information 
      // that is passed down to this screen. Feel free to play around to render useful data maybe. (Like an image, fake UI for API data –  
      // which we don't have, max. seat capactiy, link to room-booking, etc. .. altough for now we should focus on getting the MVP :) )
      console.log(this.state.libraryDetails.name)
      return (
        // Here we could again do a FlatList or something like that, but we should also think about cases where we have for example 
        // only on Library (e.g. TU, WU, ...)

        //FlatList is a good way to go. I think the best approach is to build one more lib component which just renders the data and map and picture
        //I basically used the array of library from the JSON you created and inputted it into the FlatList you recommended above
        <View style={styles.container}>
                <Text style = {styles.header}> {this.state.libraryDetails.name} </Text>
                <Text style = {styles.title}>{this.state.libraryDetails.location}</Text>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems:"center"
  },
  header:{
    padding: 20,
    alignSelf:"center",
    marginVertical: 10,
    fontSize: 32
  },
  title: {
    fontSize: 20,
    color:"Black"
  },
});