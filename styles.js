import {StyleSheet} from "react-native"
import Constants from 'expo-constants';

//Style for SplashScreen 
export const intro = {
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

//Style for other MainScreens and FeatureScreens
export const background = {
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
}

export const header = {
    text: {
        padding: 20,
        color: 'darkred',
        alignSelf: 'center',
        marginVertical: 10,
        fontSize: 50,
        fontWeight: 'bold',
    },
}

export const touchable = {
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
    text: {
        fontSize: 20,
        fontWeight:"bold",
        color: 'darkred',
        alignSelf: 'center',
    },
}


