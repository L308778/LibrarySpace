import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  Button,
} from 'react-native';
import Constants from 'expo-constants';
import Expo from 'expo';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

//Zu Machen: Layout für MapScreen; generell Layout verbessern; Key für Flatlists; GeoLocation verbessern
//Sachen die wir machen können: 
//Ein Ranking von Availability zwischen den Unis. 

export default class LibraryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Copy the route parameter into the state. Here we use params twice, given that we have initialized parameters in the navigator
      libraryDetails: this.props.route.params.params.libraryDetails,
    };
  }

  //Console log the state
  componentDidMount() {
    console.log(this.state.libraryDetails);
  }

  render() {
    //Access the coordinates array from the Data.json and save it in coordinate variable to be accessed
    let coordinate = this.state.libraryDetails.coordinates[0];

    return (
      <View style={styles.container}>
        <Text style={styles.header}> Location </Text>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
          }}>
          <Marker
            coordinate={{
              latitude: coordinate.latitude,
              longitude: coordinate.longitude,
            }}
          />
        </MapView>
          <Text style={styles.text}>{this.state.libraryDetails.location}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    backgroundColor: 'azure',
  },
  header: {
    fontWeight:"bold",
    padding: 20,
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 40,
  },
  text: {
    padding: 20,
    alignSelf: 'center',
    fontSize: 25,
    fontStyle:"italic"
  },
  mapStyle: {
    width: "100%",
    height: 400,
  },
});
