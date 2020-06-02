import React from 'react';
import { Platform, ImageBackground, TouchableOpacity, StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';

var deviceWidth = Dimensions.get('window').width;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from "react-native-responsive-screen"
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var radio_props = [
    { value: 0 },
    { value: 1 },
    { value: 2 }
];


const image = { uri: "https://image.winudf.com/v2/image1/Y29tLkdyZWVuU3ByaW5nTGl2ZVdhbGxwYXBlckhRX3NjcmVlbl8wXzE1NjcwMDA2NTJfMDg4/screen-0.jpg?fakeurl=1&type=.jpg" };
const image1 = { uri: "https://reusegrowenjoy.com/wp-content/uploads/Best-Apps-to-Help-You-Identify-Plants.jpg" };
const image2 = { uri: "https://api.pestnet.org/media_store/submissions/2018/7/3b8d37f9-3072-4e70-b646-bf5780139335/ec-1_13_291_large.jpg" };
import Intro1 from "./intro1.js"
import Intro2 from "./intro2.js"
import Intro3 from "./intro3.js"


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
  headerText: {
    fontSize: 30,
    textAlign: "center",
    paddingTop:30,
    margin: 20,
    color: 'white',
    fontWeight: "bold"
  },
  text: {
    fontSize:32,
    textAlign: "center",
    paddingTop:30,
    margin: 20,
    color: 'black',
    fontWeight: "bold"
  },
  text1: {
    fontSize:25,
    paddingTop: 55,
    paddingLeft:18,
    paddingRight:124,
    paddingBottom:0,
    fontWeight: "bold",
    color: "black",
    alignItems: "center", 
  },
  text2: {
    fontSize:65,
    paddingLeft:28,
    paddingRight:140,
    fontWeight: "bold",
    color: "black",
    fontStyle:"italic",
    textDecorationLine: 'underline',
  },
  text3: {
    fontSize:20,
    paddingTop:0,
    paddingLeft:20,
    paddingRight:110,
    color: "black",
    margin:5,
  },
  text4: {
    fontSize:12,
    paddingTop:0,
    paddingLeft:20,
    paddingRight:110,
    color: "black",
    margin:5,
  },
  
  firstView: {
    flex:1,
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  secondView: {
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdView: {
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: wp("100%"),
  },
  image1: {
    flex: 1,
    resizeMode: "cover",
    width: 362,
  },
  image2: {
    flex: 1,
    resizeMode: "cover",
    width: 362,
  },

});