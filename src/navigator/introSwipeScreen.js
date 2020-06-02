import React from 'react';
import { Platform, ImageBackground, TouchableOpacity, StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';

var deviceWidth = Dimensions.get('window').width;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from "react-native-responsive-screen"

import Intro1 from "../pages/intropages/intro1.js"
import Intro2 from "../pages/intropages/intro2.js"
import Intro3 from "../pages/intropages/intro3.js"


export default class First extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
          <Intro1 navigation={this.props.navigation}/>
          <Intro2  navigation={this.props.navigation}></Intro2>
          <Intro3  navigation={this.props.navigation}></Intro3>
       </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  

});