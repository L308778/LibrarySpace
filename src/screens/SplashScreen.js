import React from 'react';
import { View, Text, Image } from 'react-native';
import LibSpaceIcon from '../library/icons/LibSpaceIcon.png'

// look into https://github.com/react-navigation/react-navigation/issues/156 to hook up woiht Redux
class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('SearchScreen');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
      <Image
          style={styles.Icon}
          source={LibSpaceIcon}
        />
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  textStyles: {
    color: 'crimson',
    fontSize: 40,
    fontWeight: 'bold'
  },
  Icon: {
    alignSelf: 'center',
  }
}

export default SplashScreen;