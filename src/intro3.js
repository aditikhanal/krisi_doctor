// 

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



const image2 = { uri: "https://api.pestnet.org/media_store/submissions/2018/7/3b8d37f9-3072-4e70-b646-bf5780139335/ec-1_13_291_large.jpg" };

export default class Intro3 extends React.Component {
    nextscreen=(value2)=>{
      
        if(value2===0)
        {
            this.props.navigation.navigate('Intro1')
    
        }
        else if(value2==1)
        {
            this.props.navigation.navigate('Intro2')
            
        }
    
    }

    render() {
      return (
        <View style={styles.container}>
    
            <View style={styles.firstView}>
            <ImageBackground source={image2} style={styles.image}>
           
            <RadioForm
                        radio_props={radio_props}
                        initial={2}
                        onPress={(value2) => { this.setState({ value2: value2 }) }}
                        buttonColor={'#efefef'}
                        disabled={true}
                        // backgroundColor={'green'}
                        // labelHorizontal={true}
                        // buttonInnerColor={'blue'}
                        borderWidth={1}
                        // onPress={{}}
                        buttonInnerColor={'black'}
                        formHorizontal={true}
                        buttonSize={10}
                        style={{ alignSelf: 'center', marginTop: 630 }}
                    />
                     <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Welcome')}>
                        <Text style={styles.skip}>
                            SKIP
                    </Text>
                    </TouchableOpacity>


          <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')}
              style={{backgroundColor:'white',width:100,height:30,marginTop:5,marginLeft:200, 
              borderRadius:20 ,marginBottom:80,borderRadius:12,justifyContent:"center"}}><Text style={{
                               //fontFamily: 'ProximaNova-Regular',
                                fontSize: 20,
                               // lineHeight: 20,
                                fontWeight: '700',
                                color: 'black',
                                marginLeft:50,
                                marginTop:30,
                               //marginLeft: 115,
                                marginTop: 0,
                                justifyContent: 'center'
                  }}>--></Text></TouchableOpacity>
            </ImageBackground>
            </View>
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
    skip: {
        color: "#fff",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '700',
        fontFamily: "ProximaNova-Semibold",
        marginTop: 28,
        textDecorationLine: 'underline',
    }
  
  
  });
