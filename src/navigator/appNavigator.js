import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import First from './introSwipeScreen';
import Second from '../pages/intropages/GetStarted';
import Third from './drawerNavigator.js'
import Details from "../pages/tabScreen/Details"
import Colors from "../constants/colors"


console.disableYellowBox = true;


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: First,
      navigationOptions: {
        headerShown: false,
      }
    },

    Welcome: {
      screen: Second,
      navigationOptions: {
        headerShown: false,
      }
    },

    Third: {
      screen: Third,
      navigationOptions: {
        headerShown: false,
      }
    },
    Details: {
      screen: Details,
      navigationOptions: ({ navigation }) => ({
        title: 'Message Us',
        headerLeft: () => <TouchableOpacity onPress={() => { navigation.navigate("Home") }}><Image source={require("../images/leftArrow.png")} style={{ width: 10, height: 20, marginLeft: 20 }} /></TouchableOpacity>,

        headerStyle: {
          backgroundColor: Colors.tab,
        },
        headerTintColor: '#70B086',
      }),
    },


  });

export default createAppContainer(AppNavigator);