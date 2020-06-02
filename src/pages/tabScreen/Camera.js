import React from 'react';  
import {StyleSheet, Text, Image, TouchableOpacity, View,Button} from 'react-native';  
import { createAppContainer} from 'react-navigation';  
import { createBottomTabNavigator } from 'react-navigation-tabs'; 
import Icon from 'react-native-vector-icons/Ionicons';  
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import Colors from "../../constants/colors.js"




const options = {
  title: 'Select Any',
  takePhotoButtonTitle: 'Take photo with your camera',
  chooseFromLibraryButtonTitle: 'Choose photo from library',
}
// Camera
class HomeScreen extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
        avatarSource: null,
        data:null
    }
}
myfun = () => {
   // alert('clicked');

    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('Image Picker Error: ', response.error);
        }

        else {
            let source = { uri: response.uri };

            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };

            this.setState({
                avatarSource: source,
                data: response.data
            });
        }
    });
}
uploadPic=()=>{
     alert('your image details');
}
render() {
    return (
        <View style={styles.cont}>

            <Image source={this.state.avatarSource}
                style={{ width: '100%', height: 300, margin: 10 }} />


        <Text style={styles.text1}>Use Camera or Library to know the disease of your plant by clicking Select File.</Text>

            <TouchableOpacity style={{ backgroundColor: '#fff', margin: 5,borderRadius:30, padding: 15, width:200,height:50, alignItems:"center"}}
                onPress={this.myfun}>
                <Text style={{ color: '#000' }}>Select File</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: '#fff', margin: 5,borderRadius:30, padding: 15, width:200,height:50, alignItems:"center"}}
            onPress={this.uploadPic}>
                 <Text style={{ color: '#000' }}>Details</Text>
            </TouchableOpacity>

        </View>
    );
}
}

// AboutUs
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
      
      padding: 0,
      marginTop:0,
      
   
    },
    cont: {
      flex: 1,
      padding: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.lightGreen
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