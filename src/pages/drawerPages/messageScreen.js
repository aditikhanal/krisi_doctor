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
    alert("Thank you!! Your message has been sent.")
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo}/>
          </View> 
          <Text style={styles.text1}>Message Us</Text>
          <Text style={styles.text2}> Drop us your mail & messages and we will answer your queries.  </Text>

          <TextInput placeholder="Full Name"
          style={ styles.textBox}
            onChangeText={(text)=>{this.setState({name:text})}}
           >
           </TextInput>

           <TextInput placeholder="Enter your Email"
           style={ styles.textBox}
            onChangeText={(text)=>{this.setState({email:text})}}
           >
           </TextInput>

           <TextInput placeholder="Any Queries?"
           style={ styles.textBox1}
            onChangeText={(text)=>{this.setState({message:text})}}
           >
           </TextInput>

           <TouchableOpacity 
          onPress={() => {this.submit()}}
              style={{backgroundColor:'#000',width:155,height:45,marginTop:20,marginLeft:5,
               marginBottom:10,borderRadius:12,justifyContent:"center",borderRadius:20,
               borderWidth: 0,}}><Text style={{
                               //fontFamily: 'ProximaNova-Regular',
                                fontSize: 20,
                               // lineHeight: 20,
                                fontWeight: '700',
                                color: 'white',
                                marginTop:0,
                               marginLeft:40,
                                marginTop: 0,
                                justifyContent:'center',
                  }}>Submit</Text></TouchableOpacity>

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
    padding:10,
    marginHorizontal:50,
    marginVertical: 15,
    height: 70,
    width: 245
  },
  logoContainer: {
    alignItems: "center",
    height: 180,
    width: 200
  },
  text1: {
    fontSize:35,
    paddingLeft:40,
    paddingRight:50,
    fontWeight: "bold",
    color: "black",
  },
  text2: {
    fontSize:17,
    color: "black",
    paddingLeft: 40,
    paddingRight: 40, 
  }
});
