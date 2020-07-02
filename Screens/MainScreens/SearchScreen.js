import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';
import LibraryScreen from './LibraryScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

// Importing library data as JSON-Object
import libraries from '../../Data.json';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* In the SearchScreen the user can select his or her university.
    Use of a flatlist to render all possible universities to select. 
    Then the selected university unit is send through the params prop to the "LibraryScreen".
    A conditional is used in the onPress prop, to directly navigate to the Library Component, if the
    university has only one library. The user is then navigating to the "Datascreen where Data Illustrations are shown.
    Right now the illustration is solely an image for simulation purposes" */
    return (
      <View style={styles.container}>
        <Text style={styles.header}>University</Text>
        <Icon name="university" size={60} style={styles.icon} />
        <FlatList
          data={libraries}
          directionalLockEnabled={true}
          horizontal={false}
          keyExtractor={item => item.location}
          renderItem={({ item }) => (
            (
              <TouchableOpacity
                onPress={() => {
                  item.libraries.length === 1
                    ? this.props.navigation.navigate('LibraryComponent', {
                        screen: 'DataScreen',
                        params: { libraryDetails: item.libraries[0] },
                      })
                    : this.props.navigation.navigate('LibraryScreen', {
                        libraryDetails: item,
                      });
                }}>
                <View style={styles.touch}>
                  <Text style={styles.textName}>{item.name}</Text>
                  <Text style={styles.textLoc}>{item.location}</Text>
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
    backgroundColor: 'white',
  },
  header: {
    padding: 20,
    color: 'darkred',
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 50,
    fontWeight: 'bold',
  },
  icon: {
    alignSelf: 'center',
    color: 'darkred',
    marginBottom: 30,
  },
  touch: {
    paddingTop: 20,
    paddingBottom: 20,
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'darkred',
    margin: 10,
  },
  textName: {
    fontSize: 20,
    fontWeight:"bold",
    color: 'darkred',
    alignSelf: 'center',
  },
  textLoc:{
    fontSize: 15,
    fontStyle:"italic",
    color: 'darkred',
    alignSelf: 'center',
  }
});
