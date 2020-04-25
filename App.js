import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Button } from 'react-native';

export default function App() {
  const buttonPress= (msg) => {
    alert("Ya corona kuch nae ha sb "+msg+" sazish ha!")

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Muhammad Mubeen Afzal
      </Text>
      <Text style={styles.title}>
        FA17-BCS-056
      </Text>
      <Text style={styles.about}>
      Ma nahi btaon ga!!
      
      </Text>
      <Button title='Corona?' onPress={buttonPress.bind("yahodi")}>
        
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
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
    backgroundColor:'black',
  }
});
