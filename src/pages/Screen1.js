 import React from 'react';  
import {StyleSheet, Text, Image, TouchableOpacity, View,Button} from 'react-native';  
import { createAppContainer} from 'react-navigation';  
import { createBottomTabNavigator } from 'react-navigation-tabs'; 
import Icon from 'react-native-vector-icons/Ionicons';  
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import logo from './pp.png'
import TabBar from "../TabBar.js"

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



const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Camera',
       tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{color: tintColor}]} size={25} name={'ios-camera'}/>  
          
    </View>
       )
    }
  },
  Profile: {
    screen:ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'AboutUs',
      tabBarIcon: ({ tintColor }) => (
        <View>
           <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
          
        </View>
      )
    }
  },
  

  

  },
{
  tabBarComponent: TabBar,
    initialRouteName: 'Home',
    order: ["Home",'Profile' ],
  
    tabBarOptions: {
      activeTintColor: 'white',
       inactiveTintColor: 'black',
    
   labelStyle: {
     fontSize: 13,
      },
}

  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    justifyContent: 'center',
    backgroundColor: 'white'
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

export default createAppContainer(TabNavigator);  
