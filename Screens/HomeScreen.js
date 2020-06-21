import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  //Intro Screen. Includes an Icon from FontAwesome (react-native-vectors). The next screen is the SearchScreen

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LibSpace</Text>
        <Icon name="child" color="crimson" size={350} />
        <TouchableOpacity
          style={styles.touch}
          onPress={() => {
            this.props.navigation.navigate('SearchScreen');
          }}>
          <Text style={styles.touchText}>Search for Space</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'vertical',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    backgroundColor: 'darkred',
  },
  title: {
    fontSize: 60,
    color: 'white',
    fontWeight:"bold",
    marginTop:30,
    fontFamily:"italic",
  },
  touch: {
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    backgroundColor: 'darkred',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  touchText: {
    marginRight: 40,
    marginLeft: 40,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
});
