import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';
import LibraryScreen from './LibraryScreen';

// Importing libarary data as JSON-Object
import libraries from '../Data.json';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
  }

// TODO: Find a solution for assigning an unique key to each item in rederItem() 
  render(){
    // Also look at the "libraries" object here (I find it often helpful to understand the structure)
    console.log(libraries)
  return (
    <View style = {styles.container}> 
      <Text style={styles.header}>Choose Your university</Text>
      <FlatList        
        data={libraries}
        directionalLockEnabled={true}
        horizontal={false}
        renderItem={({ item }) => (
            console.log(item),
            <TouchableOpacity onPress={() => {this.props.navigation.navigate("LibraryScreen", {libraryDetails:item}); }}>
              <View style = {styles.item}>
                <Text style = {styles.title}>{item.name}</Text>
                <Text style = {styles.title}>{item.location}</Text>
              </View>
            </TouchableOpacity>
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
  },
  header:{
    padding: 20,
    alignSelf:"center",
    marginVertical: 10,
    fontSize: 32
  },
  item: {
    backgroundColor: 'darkred',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color:"white"
    
  },
});

