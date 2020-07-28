//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Button,
  Text,
} from 'react-native';
// import all basic components

//Import React Navigation
import {createAppContainer,createSwitchNavigator } from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';


import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons'; 

//Import all the screens
import Screen1 from './bottomTabNavigator';
import Screen2 from '../pages/drawerPages/messageScreen';
import Screen3 from '../pages/drawerPages/Screen3';
import Screen4 from '../pages/drawerPages/contactInfo';
import Colors from "../constants/colors"

//Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

global.currentScreenIndex = 0;
//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('../images/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 20 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

//Stack Navigator for the First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Krisi Doctor',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Colors.tab,
      },
      headerTintColor: Colors.tab,
    }),
  },
});

//Stack Navigator for the Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Message Us',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: Colors.tab,
      },
      headerTintColor: '#70B086',
    }),
  },
});

//Stack Navigator for the Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: '3',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Colors.tab,
      },
      headerTintColor: '#70B086',
    }),
  },
});

//Stack Navigator for the Fourth Option of Navigation Drawer
const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Third: {
    screen: Screen4,
    navigationOptions: ({ navigation }) => ({
      title: '4',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Colors.tab,
      },
      headerTintColor: Colors.tab,
    }),
  },
});

//Drawer Navigator Which will provide the structure of our App
const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen1: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: '1',
      },
    },
    NavScreen2: {
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: '2',
      },
    },
    NavScreen3: {
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: '3',
      },
    },
    NavScreen4: {
      screen: Screen4_StackNavigator,
      navigationOptions: {
        drawerLabel: '4',
      },
    },
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 160,
  },
  
);
export default createAppContainer(DrawerNavigatorExample);