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
import First from './src/First';
import Second from './src/Second';
import Third from './src/Third';

  
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