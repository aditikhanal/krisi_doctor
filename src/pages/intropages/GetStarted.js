import React, { Component } from "react";
import { ImageBackground, Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useState } from 'react';

const image = { uri: "https://www.jakpost.travel/wimages/large/82-827630_green-nature-hd-wallpaper-for-mobile-adsleaf-com.jpg" };
import logo from '../../images/p.png'

export default class Second extends React.Component {
  render(){
  return(
     <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo}/>
          </View>
          <Text style={styles.text}> An App to classify the plant disease..</Text>
          
          <Text style={styles.text1}> Trust the best agriculture app around....</Text>
          
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Third')}
              style={{backgroundColor:'#1CBE08',width:180,height:46,marginTop:80,marginLeft:5,
              borderRadius:80, marginBottom:25,borderRadius:12,justifyContent:"center"}}><Text style={{
                               //fontFamily: 'ProximaNova-Regular',
                                fontSize: 20,
                               // lineHeight: 20,
                                fontWeight: '700',
                                color: '#fff',
                                marginLeft:50,
                                marginTop:30,
                               marginLeft:37,
                                marginTop: 0,
                                justifyContent: 'center'
                  }}>Get Started!</Text></TouchableOpacity>

        </ImageBackground> 
      </View>        
   );  
  }
}     
         

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",  
  },
  logoContainer: {
    alignItems: "center",
    height: 180,
    width: 200,
    paddingTop:0,
    paddingBottom:0
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize:15,
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic",
    paddingTop: 0,
    paddingBottom: 30

  },
  text1: {
    fontSize:26,
    paddingTop: 50,
    paddingBottom: 60,
    paddingLeft: 93,
    paddingRight:5,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
    
  }
  
});