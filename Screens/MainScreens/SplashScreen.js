import React from 'react';
import { View, Text, Image } from 'react-native';
import LibSpaceIcon from '../../assets/Graphics/LibSpaceIcon.png'
import { intro } from "../../styles.js"

/*SplashScreen is the Loading Page used to load the data fetch and is the intro screen for the application. 
The following screen is the SearchScreen*/

// look into https://github.com/react-navigation/react-navigation/issues/156 to hook up with Redux
class SplashScreen extends React.Component {
  performTimeConsumingTask = async () => {
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
    ...intro.view
  },
  Icon: {
    ...intro.Icon
  }
}

export default SplashScreen;