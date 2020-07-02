import React from 'react';
import {createOpenLink} from "react-native-open-maps"
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


export default class LibraryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Copy the route parameter into the state.
      libraryDetails: this.props.route.params.params.libraryDetails,
    };
  }


  //Console log the state
  componentDidMount() {
    console.log(this.state.libraryDetails);
  }

  render() {
    /*Access the coordinates array from the Data.json and save it in coordinate variable to be accessed.
    Then save the LibraryLocation in the LibLoc variable to create the direct link to google maps if the user
    clicks the below button component. For the google link the react-native-open-maps library is used. 
    Link: https://www.npmjs.com/package/react-native-open-maps#default-function-openoptions*/

    let coordinate = this.state.libraryDetails.coordinates[0];
    
    const libLoc = {
      latitude: coordinate.latitude, 
      longitude: coordinate.longitude,
      zoom: 25, 
      query: this.state.libraryDetails.name + ""};
    
      const openGoogle = createOpenLink(libLoc);

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
          <TouchableOpacity
          onPress = {openGoogle}
          style = {styles.touch}
          >
            <Text style = {styles.touchText}>
              Go to Google Maps
            </Text>
          </TouchableOpacity>
          <Text style={styles.text}>Address : {this.state.libraryDetails.location}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
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
  touchText: {
    marginRight: 40,
    marginLeft: 40,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  touch: {
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    backgroundColor: 'darkred',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    alignContent: 'center',
    margin: 20,
  },
});
