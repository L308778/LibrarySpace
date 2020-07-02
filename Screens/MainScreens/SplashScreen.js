import React from 'react';
import { View, Text, Image } from 'react-native';
import LibSpaceIcon from '../../assets/Graphics/LibSpaceIcon.png'

/*SplashScreen is the Loading Page used to load the data fetch and is the intro screen for the application. 
The following screen is the SearchScreen*/

// look into https://github.com/react-navigation/react-navigation/issues/156 to hook up with Redux
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
      <View style={styles.view}>
      <Image
          style={styles.Icon}
          source={LibSpaceIcon}
        />
      </View>
    );
  }
}

const styles = {
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  Icon: {
    alignSelf: 'center',
  }
}

export default SplashScreen;