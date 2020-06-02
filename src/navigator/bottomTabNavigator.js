import React from 'react';  
import {StyleSheet, Text, Image, TouchableOpacity, View,Button} from 'react-native';  
import { createAppContainer} from 'react-navigation';  
import { createBottomTabNavigator } from 'react-navigation-tabs'; 
import Icon from 'react-native-vector-icons/Ionicons';  
import TabBar from "./TabBar.js"
import HomeScreen from "../pages/tabScreen/Camera.js"
import ProfileScreen from "../pages/tabScreen/Profile"



const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
        navigationOptions: {
      tabBarLabel: 'Camera',
       tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{color: tintColor}]} size={25} name={'ios-camera'}/>  
          
    </View>
       )
    }
  },
  Profile: {
    screen:ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'AboutUs',
      tabBarIcon: ({ tintColor }) => (
        <View>
           <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
          
        </View>
      )
    }
  },
  

  

  },
{
  tabBarComponent: TabBar,
    initialRouteName: 'Home',
    order: ["Home",'Profile' ],
  
    tabBarOptions: {
      activeTintColor: 'white',
       inactiveTintColor: 'black',
    
   labelStyle: {
     fontSize: 13,
      },
}

  })

  export default TabNavigator;