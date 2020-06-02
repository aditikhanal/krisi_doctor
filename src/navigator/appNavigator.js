import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import First from './introSwipeScreen';
import Second from '../pages/intropages/GetStarted';
import Third from './drawerNavigator.js'

  
const AppNavigator =createStackNavigator(
  {
    Home :{
      screen: First,
      navigationOptions: {
        headerShown: false,
      }
    },

    Welcome :{
      screen: Second,
      navigationOptions: {
        headerShown: false,
      }
    },

    Third :{
      screen: Third,
      navigationOptions: {
        headerShown: false,
      }
    },

  });

  export default createAppContainer(AppNavigator);