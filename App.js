import React from 'react';
import {ImageBackground, StyleSheet, Text, View } from 'react-native';


const image = require("C:/Users/mubee/expoApp/bg.jpg");

export default function App(){
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>What is this</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold"
  }
});
