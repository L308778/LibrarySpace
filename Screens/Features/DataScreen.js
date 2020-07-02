import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import Constants from 'expo-constants';
import Expo from 'expo';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import {button, header, background} from "../../assets/styles.js"

export default class LibraryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Copy the route parameter into the state like we did in the LibraryScreen
      libraryDetails: this.props.route.params.libraryDetails,
    };
  }

  componentDidMount() {
    console.log(this.state.libraryDetails);
  }

  /*Here the user is able to see how many people are currently in the selected library. The user can also navigate
  to the MapScreen where he or she can look at the map provided in the app or go directly to google maps.*/

  render() {
    //Access the coordinates array from the Data.json and save it in coordinate variable to be accessed
    let coordinate = this.state.libraryDetails.coordinates[0];

    return (
      <View style={styles.container}>
        <Text style={styles.header}> Availability </Text>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/6/63/Pie-chart.jpg',
          }}
        />
        <TouchableOpacity
          style={styles.touch}
          onPress={() => {
            this.props.navigation.navigate('SearchScreen');
          }}>
          <Text style={styles.touchText}>Universities</Text>
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
  image: {
    height: 400,
    width: 400,
    alignSelf: 'center',
  },
  touchText: {
    ...button.text
  },
  touch: {
    ...button.touch
  },
});
