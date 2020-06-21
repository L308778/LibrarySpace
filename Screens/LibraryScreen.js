import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Constants from 'expo-constants';

export default class LibraryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Take params that were passed by the navigator and set them to this.state.libraryDetails

      libraryDetails: this.props.route.params.libraryDetails,
    };
  }

  render() {
    //Logging the library data unit to examine validity. Here the selected library is again send through the params prop to the specific Library Screens, where the features are displayed. Here the structure to pass the params is different, given that the data is passed to the child navigator (tab navigator) from the current stack navigator.

    console.log(this.state.libraryDetails.libraries);
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Your Library </Text>
        <FlatList
          directionalLockEnabled={true}
          horizontal={false}
          data={this.state.libraryDetails.libraries}
          renderItem={({ item }) => (
            console.log(item),
            (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('LibraryComponent', {
                    screen: 'DataScreen',
                    params: { libraryDetails: item },
                  });
                }}>
                <View style={styles.touch}>
                  <Text style={styles.text}>{item.name}</Text>
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
