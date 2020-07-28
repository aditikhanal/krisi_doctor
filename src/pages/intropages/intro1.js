import React from 'react';
import { Platform, ImageBackground, TouchableOpacity, StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';

var deviceWidth = Dimensions.get('window').width;

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var radio_props = [
    { value: 0 },
    { value: 1 },
    { value: 2 }
];


export default class Intro1 extends React.Component {

   
    render() {
      return (
        <View style={styles.container}>
    
            <View style={styles.firstView}>
            <ImageBackground source={require("../../images/intro1.jpg")} style={{width:400,height:700,marginTop:0}}>
            <Text style={styles.text}> कृषि डाक्टरमा तपाईलाई स्वागत छ !! </Text>
              <Text style={styles.text1}>बिरूवाको रोग पत्ता लगाउने एक </Text>
  
             <Text style={styles.text2}>एन्ड्रोइड अनुप्रयोग </Text>
  
              <Text style={styles.text3}>एक स्न्यापमा तपाईको{"\n"}बोटहरुमा समस्याको पहिचान गर्नुहोस्!!</Text>
  
              <Text style={styles.text4}>(यी चौध प्रजातिहरू बीचको रोग पत्ता {"\n"} लगाउनुहोस्: स्याउ, निलोबेरी, चेरी, अंगूर,{"\n"}सुन्तला, आडू, काली मिर्च, आलु, रास्पबेरी,{"\n"}सोया, स्क्वाश, स्ट्रबेरी र टमाटर।)</Text>
              <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        onPress={(value) => { this.setState({ value: value }) }}
                        buttonColor={'#efefef'}
                        disabled={true}
              
                        borderWidth={1}
                   
                        buttonInnerColor={'black'}
                        formHorizontal={true}
                        buttonSize={10}
                        style={{ alignSelf: 'center', marginTop: 90, paddingRight: 30 }}
                    />
                     <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Welcome')}>
                        <Text style={styles.skip}>
                        छोड्नुहोस्
                    </Text>
                    </TouchableOpacity>
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
      paddingRight: 40,
      margin: 20,
      color: 'black',
      fontWeight: "bold"
    },
    text1: {
      fontSize:22,
      paddingTop: 70,
      paddingLeft:19,
      paddingRight:124,
      paddingBottom:0,
      fontWeight: "bold",
      color: "black",
      alignItems: "center", 
    },
    text2: {
      fontSize:28,
      paddingLeft:20,
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
      fontSize:13,
      paddingTop:0,
      paddingLeft:20,
      paddingRight:110,
      color: "black",
      margin:5,
    },
    
    firstView: {
      flex:1,
      width: deviceWidth,
      
    },
    skip: {
        color: "black",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 25,
        paddingRight: 35,
        textDecorationLine: 'underline',
    }
  
  });
