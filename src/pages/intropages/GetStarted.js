import React, { Component } from "react";
import { ImageBackground, Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useState } from 'react';

import logo from '../../images/pp.png'

export default class Second extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../../images/started.jpg")} style={styles.image}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
          <Text style={styles.text4}>कृषि डाक्टर  </Text>
          <Text style={styles.text}>बिरुवाको रोग वर्गीकृत गर्न एक अनुप्रयोग..</Text>

          <Text style={styles.text1}>सबै भन्दा राम्रो कृषि अनुप्रयोगलाई विश्वास गर्नुहोस् ....</Text>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Third')}
            style={{
              backgroundColor: '#1CBE08', width: 180, height: 46, marginTop: 60, marginLeft: 5,
              borderRadius: 80, marginBottom: 25, borderRadius: 12, justifyContent: "center"
            }}><Text style={{
              //fontFamily: 'ProximaNova-Regular',
              fontSize: 20,
              // lineHeight: 20,
              fontWeight: '700',
              color: '#fff',
              marginLeft: 50,
              marginTop: 30,
              marginLeft: 37,
              marginTop: 0,
              justifyContent: 'center'
            }}> सुरु गर्नुहोस!</Text></TouchableOpacity>

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
    paddingTop: 10,
    paddingBottom: 0
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic",
    paddingLeft: 58,
    paddingBottom: 30
  },
  text1: {
    fontSize: 26,
    paddingTop: 60,
    paddingBottom: 50,
    paddingLeft: 78,
    paddingRight: 5,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",

  },
  text4: {
    fontSize: 40,
    paddingTop: 20,
    paddingLeft: 10,
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic"
  },

});