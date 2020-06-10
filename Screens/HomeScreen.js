import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';



export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>LibSpace</Text>
      <Image source={{uri:"https://lh3.googleusercontent.com/proxy/LarD6DshGzCRUP1rvPOtZMCLlSWv7uFkwnU--kXGRouC2gX4HJTYbKYWn_1bmfGYtLFeo0GA5uFKf9-XErurO1pG6eTLiEjSW8FR_FugHKjj-_koTjPg0foQXX_ZyrbX1CaRJKTttqHOsxlR4lYMKzUa00pg3pxyoxUxy2Qol1v-JcQOwA"}}
      style = {styles.image}
      />
      <TouchableOpacity style = {styles.touch} onPress ={() => {this.props.navigation.navigate("SearchScreen")}}>
        <Text style = {styles.touchText}>
          Search for Space
        </Text>
      </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "vertical",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    textAlign: "center"
  },
  title:{
    fontSize:30,
    
  },
  touch:{
    paddingTop:20,
    paddingBottom:20,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  touchText:{
    marginRight:40,
    marginLeft:40,
    fontSize: 20
  },
  image:{
    height:400,
    width:400
  }
})


