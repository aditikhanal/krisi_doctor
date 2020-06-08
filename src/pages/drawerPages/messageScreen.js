//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
// import all basic components
import logo from '../pp.png'
import Colors from "../../constants/colors"

export default class Screen2 extends Component {
  //Screen2 Component
  constructor()
  {
    super();
    this.state={
      name:'',
      email:"",
      message:'',
    }
  }

  submit()
  {
    alert("धन्यवाद!! तपाईंको सन्देश पठाईयो।")
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo}/>
          </View> 
          <Text style={styles.text4}>कृषि डाक्टर  </Text>
          <Text style={styles.text1}>कृपया हामीलाई सन्देश पठाउनुहोस्।</Text>
          <Text style={styles.text2}>हामीलाई तपाईंको मेल र सन्देशहरू ड्रप गर्नुहोस् र हामी तपाईंको प्रश्नहरूको उत्तर दिनेछौं। </Text>

          <TextInput placeholder="पुरा नाम"
          style={ styles.textBox}
            onChangeText={(text)=>{this.setState({name:text})}}
           >
           </TextInput>

           <TextInput placeholder="तपाईंको ईमेल प्रविष्ट गर्नुहोस्"
           style={ styles.textBox}
            onChangeText={(text)=>{this.setState({email:text})}}
           >
           </TextInput>

           <TextInput placeholder="कुनै प्रश्नहरू?"
           style={ styles.textBox1}
            onChangeText={(text)=>{this.setState({message:text})}}
           >
           </TextInput>

           <TouchableOpacity 
          onPress={() => {this.submit()}}
              style={{backgroundColor:'#000',width:155,height:45,marginTop:10,marginLeft:5,
               marginBottom:10,borderRadius:12,justifyContent:"center",borderRadius:20,
               borderWidth: 0,}}><Text style={{
                               //fontFamily: 'ProximaNova-Regular',
                                fontSize: 20,
                               // lineHeight: 20,
                                fontWeight: '700',
                                color: 'white',
                                marginTop:0,
                               marginLeft:28,
                                marginTop: 0,
                                justifyContent:'center',
                  }}>बुझाउनुहोस्</Text></TouchableOpacity>

       </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
     flex: 1,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGreen
  },
  textBox:{
    borderColor:'black',
    borderWidth:2,
    padding:10,
    margin:30,
    marginVertical:5,
    height: 50,
    width: 245,
    marginTop: 20
  },
  textBox1:{
    borderColor:'black',
    borderWidth:2,
    padding:20,
    marginHorizontal:50,
    marginVertical: 15,
    height: 70,
    width: 245
  },
  logoContainer: {
    alignItems: "center",
    height: 140,
    width: 180,
    paddingTop:15
  },
  text1: {
    fontSize:19,
    paddingLeft:40,
    paddingRight:50,
    fontWeight: "bold",
    color: "black",
    paddingTop:6,
  },
  text2: {
    fontSize:15,
    color: "black",
    paddingLeft: 40,
    paddingRight: 40, 
    paddingTop:3
  },
  text4: {
    fontSize:40,
    paddingTop:57,
    paddingLeft:10,
    fontWeight: "bold",
    color: "white",
    fontStyle:"italic"
  },
  
});
