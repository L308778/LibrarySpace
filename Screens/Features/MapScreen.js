import React from 'react';
import { createOpenLink } from "react-native-open-maps"
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
import { button, header, background, touchable } from "../../styles.js"


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
      query: this.state.libraryDetails.name + ""
    };

    const openGoogle = createOpenLink(libLoc);

    return (
      <View style={styles.container}>
        <Text style={styles.header}> Location </Text>
        <MapView
          style={styles.mapStyle}
          provider="google"
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
          onPress={openGoogle}
          style={styles.touch}
        >
          <Text style={styles.touchText}>
            Google Maps
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...background.container
  },
  header: {
    ...header.text
  },
  mapStyle: {
    width: "100%",
    height: 400,
  },
  touch: {
    ...touchable.touch
  },
  touchText: {
    ...touchable.text
  },
});
