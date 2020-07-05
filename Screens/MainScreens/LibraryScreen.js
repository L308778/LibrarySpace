import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { background, header, touchable } from "../../styles.js"


export default class LibraryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Take params that were passed by the navigator and set them to this.state.libraryDetails

      libraryDetails: this.props.route.params.libraryDetails,
    };
  }

  render() {
    /*In the LibraryScreen can then select the preferred library.
    Here the selected library is again send through the params prop to the specific Library Screens, 
    where the features are displayed. Here the structure to pass the params is different, 
    given that the data is passed to the child navigator (tab navigator) from the current stack navigator.*/

    console.log(this.state.libraryDetails.libraries);
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Your Library </Text>
        <FlatList
          directionalLockEnabled={true}
          horizontal={false}
          data={this.state.libraryDetails.libraries}
          keyExtractor={item => item.location}
          renderItem={({ item }) => (
            (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('LibraryComponent', {
                    screen: 'Availability',
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
    ...background.container
  },
  header: {
    ...header.text
  },
  touch: {
    ...touchable.touch
  },
  text: {
    ...touchable.text
  },
});
