import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import LibraryScreen from './LibraryScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

// Importing libarary data as JSON-Object
import libraries from '../Data.json';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //Use of a flatlist to render all possible universities to select. Then the selected university unit is send through the params prop to the "LibraryScreen"
    return (
      <View style={styles.container}>
        <Text style={styles.header}>University</Text>
        <Icon name="university" size={60} style={styles.icon} />
        <FlatList
          data={libraries}
          directionalLockEnabled={true}
          horizontal={false}
          renderItem={({ item }) => (
            console.log(item),
            (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('LibraryScreen', {
                    libraryDetails: item,
                  });
                }}>
                <View style={styles.touch}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>{item.location}</Text>
                </View>
              </TouchableOpacity>
            )
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
    backgroundColor: 'darkred',
  },
  header: {
    padding: 20,
    color: 'white',
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 50,
    fontWeight: 'bold',
  },
  icon: {
    alignSelf: 'center',
    color: 'white',
    marginBottom: 30,
  },
  touch: {
    paddingTop: 20,
    paddingBottom: 20,
    alignContent: 'center',
    backgroundColor: 'darkred',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
});
