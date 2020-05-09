import React, { useState } from 'react';
import {ImageBackground, StyleSheet, Text, View,Image, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';


const image = require("C:/Users/mubee/expoApp/images/bg.jpg");

export default function App(){
  const [getText,setText]= useState("");
  const [getList,setList]=useState([]);
  const addItem =()=>{
    setList([...getList,{key:Math.random().toString(),data:getText}])
    setText("");
  }
  if (getText.length<=0){
    var addBt=0;
  }else{
    var addBt=25
  }
  const removeItem= (itemKey)=>{
    
    setList(list => getList.filter(item=>item.key!=itemKey))
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={{alignItems:"center"}}>
          <Text style={styles.text}>! NOT TODO LIST !</Text>
            
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputText} 
              placeholder="Enter Here!" 
              placeholderTextColor = "#333444" 
              onChangeText={text=>setText(text)}
              value={getText}
            />
            <TouchableOpacity onPress={addItem} disabled={getText.length<=0}>
              <Image
                style={{...styles.addBton, width:addBt, height:addBt}}
                source={require("C:/Users/mubee/expoApp/images/add.png")}
              />
            </TouchableOpacity>
          </View>

          {/* <View style={{alignItems:"center"}}>
            <Text style={{fontSize:20}}>{getText}</Text>
          </View> */}

          <ScrollView style={styles.sView}>
            {getList.map((item)=>
          
            <View style={styles.listItems}>
              <Text style={{color:"white",fontSize:15}}>{item.data}</Text>
              <TouchableOpacity onPress={()=>{removeItem(item.key)}}>
                <Image
                  style={styles.tinyLogo}
                  source={require("C:/Users/mubee/expoApp/images/delete.png")}
                />
              </TouchableOpacity>
            </View>
          
            
            )}
          </ScrollView>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  sView:{
    width:'100%',
    height:'65%'
  },
  listItems:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:'80%',
    alignSelf:"center",
    backgroundColor:'#111111',
    alignItems:"center",
    padding:10,
    margin:7,
    borderRadius:4,
  },
  tinyLogo: {
    width: 25,
    height: 25,
  },
  addBton: {
    width: 25,
    height: 25,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  inputContainer:{
    flexDirection:"row",
    justifyContent:"center",
    marginBottom:50,
  },
  inputText:{
    width:'60%',
    fontSize:20,
    borderBottomWidth:1,
    marginRight:10,
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    padding:30
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign:'center',
    margin:30,
    marginTop:120,
  }
});