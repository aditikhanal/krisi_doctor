import React from 'react';  
import {StyleSheet, Text, Image, TouchableOpacity, View,Button} from 'react-native';  
import { createAppContainer} from 'react-navigation';  
import { createBottomTabNavigator } from 'react-navigation-tabs'; 
import Icon from 'react-native-vector-icons/Ionicons';  
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from  "../../constants/colors"




const options = {
  title: 'Select Any',
  takePhotoButtonTitle: 'Take photo with your camera',
  chooseFromLibraryButtonTitle: 'Choose photo from library',
}
// Camera


// AboutUs
class ProfileScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}> 
          <LinearGradient
               colors={["#357D2C","#C2BF61"]}
               style={{height:"33%"}}
             />
            <View style={{alignItems:"center"}}>
                    <Image
                        style={{width:130,height:130,borderRadius:65, marginTop: -50}}
                        source={{uri:"https://lh3.googleusercontent.com/991kthWAO1VlfecnNk8XNwm_bRWxil7nG34yGi0VoD1PlCO05xAZS4ITXO5vcM-KVh0S=s85"}} 
                    />
            </View>
          <Text style={styles.text4}>Krisi Doctor</Text>

           <Text style={styles.text2}>Our App "KRISI DOCTOR" is helpful for classifying the diseases on plants using the idea of image processing. The pictures are fed to the system and the system use the techniques of image processing to give the classified disease to the users.</Text>

           <Text style={styles.text3}>              The disease identification in the present context is done manually but due to the so many environmental changes the prediction is becoming tough. So we can use image processing techniques for identification of plant disease. </Text>
        </View>  
    );  
  } 
}  



export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    marginTop:0,
    backgroundColor:Colors.lightGreen,
    flex:1
    
 
  },
  cont: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#357D2C'
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom:12,  
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 17,
    color: '#000',
    fontWeight: '700',
  },
  logoContainer: {
    alignItems: "center",
    height: 180,
    width: 200
  },
  text4: {
    fontSize:35,
    paddingTop:0,
    paddingLeft:90,
    fontWeight: "bold",
    color: "green",
    fontStyle:"italic"
  },
  text1: {
    fontSize:15,
    paddingBottom:20,
    fontWeight: "bold",
    color: "black",
    alignItems: "center"
  },
  text2: {
    fontSize:15,
    color: "black",
    margin: 20,
    alignItems: "center",
    marginBottom:0
  },
  text3: {
    fontSize:15,
    color: "black",
    margin: 20,
    alignItems: "center", 
    paddingBottom:20,
    paddingTop:0
  }
});


