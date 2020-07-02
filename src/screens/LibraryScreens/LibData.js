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
import Icon from 'react-native-vector-icons/FontAwesome';

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
          <Text style={styles.touchText}>Back to Universities</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    backgroundColor:"azure"
  },
  header: {
    padding: 20,
    fontWeight:"bold",
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 40,
  },
  image: {
    height: 400,
    width: 400,
    alignSelf: 'center',
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
