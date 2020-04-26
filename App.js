import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Button } from 'react-native';

const App =() => {
  const buttonPress= (msg) => {
    alert("Ya corona kuch nae ha sb "+msg+" sazish ha!")
  }
  const [getDeText,setDeText] = useState('Press CHANGE!')
  
  return (
    <View style={styles.container}>
      
        <Text style={styles.title}>
          Muhammad Mubeen Afzal
        </Text>
        <Text style={styles.title}>
          {getDeText}
        </Text>
        <Text style={styles.about}>
        Ma nahi btaon ga!!
        </Text>
        <View style={{flexDirection : 'row'}}>
          <View style={{marginRight:10}}>
            <Button title='Corona?' onPress={buttonPress.bind(this,"yahodi")} style={styles.button}></Button>
          </View>
          <View>
            <Button title='Change?' onPress={()=>setDeText("FA17-BCS-056")}></Button>
          </View>
        </View>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#006669',
    alignItems: 'center',
    color: '#fff',
    justifyContent: 'center',
  },
  title:{
    fontSize: 26,
    color: '#fff',
  },
  about:{
    fontSize: 30,
    color: 'yellow',
    paddingBottom:25,
  },
  button :{
    flex:1,
    margin:20,
  },
  
});
//const image = require("C:/Users/mubee/expoApp/bg.jpg");
// <ImageBackground source={image} style={styles.image}>
//     </ImageBackground>
// image :{
//   flex: 1,
//   resizeMode: "cover",
//   justifyContent: "center"
// }