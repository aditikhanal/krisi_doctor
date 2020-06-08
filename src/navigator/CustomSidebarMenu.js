//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from "../constants/colors"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from "react-native-responsive-screen"

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0VfKSPkcNM-li56qvwslyQUJa1iVPDU1TPdrnSE5o5edVZ1Xb&usqp=CAUQ';
    
    this.items = [
      {
        navOptionThumb: 'home',
        navOptionName: ' गृह ',
        screenToNavigate: 'NavScreen1',
      },
      {
        navOptionThumb: 'message',
        navOptionName: 'सन्देश पठाउनुहोस्',
        screenToNavigate: 'NavScreen2',
      },
      {
        navOptionThumb: 'image',
        navOptionName: 'छविहरू',
        screenToNavigate: 'NavScreen3',
      },
      {
        navOptionThumb: 'phone',
        navOptionName: 'सम्पर्क गर्नुहोस',
        screenToNavigate: 'NavScreen4',
      },
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        <View style={{backgroundColor:Colors.tab,  width: '100%',alignItems:"center",height:200}}>
    
        
        </View>
        <Image
          source={{ uri: this.proileImage }}
          style={styles.sideMenuProfileIcon}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : Colors.lightGreen,
              }}
              key={key}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? 'red' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor:Colors.lightGreen,
    alignItems: 'center',
  
  },
  sideMenuProfileIcon: {
    //resizeMode: 'center',
    width: 180,
    height: 180,
    marginTop: -90,
    borderRadius: 180 / 2,
    marginBottom:50,
  },
});