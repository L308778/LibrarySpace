import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Dimensions} from 'react-native';
import Constants from 'expo-constants';
import Expo from "expo"
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';


export default class LibraryScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // Copy the route parameter into the state like we did in the LibraryScreen
      libraryDetails: this.props.route.params.libraryDetails
    }
  }



  render() {

      //Access the coordinates array from the Data.json and save it in coordinate variable to be accessed
      let coordinate = this.state.libraryDetails.coordinates[0]
      
      return (
        
        <View style={styles.container}>
                <Text style = {styles.header}> {this.state.libraryDetails.name} </Text>
                <MapView style = {styles.mapStyle}
                initialRegion={{
                latitude: coordinate.latitude,
                longitude: coordinate.longitude,
                latitudeDelta: 0.002,
                longitudeDelta: 0.002}}
                >
                <Marker
                coordinate = 
                {{latitude: coordinate.latitude,
                longitude: coordinate.longitude}}
                />
                </MapView>
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
  mapStyle: {
    width: 400,
    height: 400,
  },
});