//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Linking} from 'react-native';
// import all basic components
import {  Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from "../../constants/colors"

const openDial=()=>{
  if(Platform.OS === "android"){
      Linking.openURL("tel:9848983054")
   }else{
      Linking.openURL("telprompt:9848983054")
   }    
}
export default class Screen4 extends Component {
  //Screen4 Component
  render() {
    return (
      <View style={styles.container}> 
           <Text style={styles.text4}>More Info</Text>
          <Text style={styles.text2}>Plant disease is one of the major problems in agriculture which reduces production rate and increases financial costs only. So, Plant diseases detection is one of the important for agricultural applications to increase the yield. </Text>
          <Text style={styles.text3}>              Our System is built using the inception model containing CNN based image classification system. The disease can be classified according to the patterns seen in the diseased leaves of the plant. Disease detection involves the steps like image acquisition, image pre-processing, feature extraction and classification. Also information about the classified disease is provided.</Text>

          <Text style={styles.text1}>For further details:</Text>

          <View style={styles.card}> 
              <Card containerStyle={styles.mycard} onPress={()=>{
                    Linking.openURL("mailto:abc@abc.com")
                }}>
                    <View style={styles.cardContent }>
                    <Icon name="envelope" size={30} color="#006aff" />
                    <Text style={styles.mytext} >krisidoctor@gmail.com</Text>
                    </View>
                </Card>

                <Card containerStyle={styles.mycard} onPress={()=>openDial()}>
                    <View style={styles.cardContent }>
                    <Icon name="phone" size={30} color="#006aff" />
                    <Text style={styles.mytext} >9876543210</Text>
                    </View>
                </Card>
              </View>

    </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGreen
  },
  card: {
    flex: 1,
    backgroundColor:Colors.lightGreen,
    paddingLeft: 10,
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
    fontSize:17,
    color: "black",
    margin:7,
    alignItems: "center", 
    justifyContent: "center"
  },
  text3: {
    fontSize:17,
    color: "black",
    margin: 7,
    alignItems: "center", 
  },
  text1: {
    fontSize:18,
    color: "black",
    margin:8,
    alignItems: "center", 
    justifyContent: "center",
    textDecorationLine: 'underline',
  },
  text: {
    fontSize:19,
    color: "blue",
    margin:8,
    alignItems: "center", 
    textDecorationLine: 'underline',
    justifyContent: "center"
  },
  mycard:{
   // margin:5,
   //height:30,
    backgroundColor:"#70B086",
    flexDirection:"row",
    borderWidth:0
  },
    cardContent:{
    padding:4,
    flexDirection:"row"
  },
  mytext:{
    fontSize:17,
    marginTop:1,
    marginLeft:20,
    color:"black"
},
});