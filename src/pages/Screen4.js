//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components

export default class Screen4 extends Component {
  //Screen4 Component
  render() {
    return (
      <View style={styles.container}> 
           <Text style={styles.text4}>More Info</Text>
          <Text style={styles.text2}>Plant disease is one of the major problems in agriculture which reduces production rate and increases financial costs only. So, Plant diseases detection is one of the important for agricultural applications to increase the yield. </Text>
          <Text style={styles.text3}>              Our System is built using the inception model containing CNN based image classification system. The disease can be classified according to the patterns seen in the diseased leaves of the plant. Disease detection involves the steps like image acquisition, image pre-processing, feature extraction and classification. Also information about the classified disease is provided.</Text>

          <Text style={styles.text1}>For further details call us at:</Text>
          <Text style={styles.text}>9876543210</Text>
          <Text style={styles.text}>Email: krisidoctor123@gmail.com</Text>
    </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#70B086'
  },
  text4: {
    fontSize:25,
    paddingBottom:10,
    paddingTop: 18,
    paddingRight:180,
    fontWeight: "bold",
    color: "black",
    textDecorationLine: 'underline',
    fontStyle:"italic"
  },
  text2: {
    fontSize:15,
    color: "black",
    margin:8,
    alignItems: "center", 
    justifyContent: "center"
  },
  text3: {
    fontSize:15,
    color: "black",
    margin: 8,
    alignItems: "center", 
  },
  text1: {
    fontSize:18,
    color: "black",
    margin:8,
    alignItems: "center", 
    justifyContent: "center"
  },
  text: {
    fontSize:19,
    color: "blue",
    margin:8,
    alignItems: "center", 
    textDecorationLine: 'underline',
    justifyContent: "center"
  },
});