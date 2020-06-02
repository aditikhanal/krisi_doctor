 import React from 'react';  
import {StyleSheet, Text, Image, TouchableOpacity, View,Button} from 'react-native';  
import { createAppContainer} from 'react-navigation';  
import { createBottomTabNavigator } from 'react-navigation-tabs'; 
import Icon from 'react-native-vector-icons/Ionicons';  
import { useState } from 'react';
import ImagePicker from 'react-native-image-picker';
import logo from './pp.png'
import TabBar from "../TabBar.js"

// Camera
class HomeScreen extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      resourcePath: {},
    };
  }

  selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { 
          name: 'customOptionKey', 
          title: 'Choose file from Custom Option' 
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath: source,
        });
      }
    });
  };

  // Launch Camera
  cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = { uri: res.uri };
        console.log('response', JSON.stringify(res));
        this.setState({
          filePath: res,
          fileData: res.data,
          fileUri: res.uri
        });
      }
    });
  }

  imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = { uri: res.uri };
        console.log('response', JSON.stringify(res));
        this.setState({
          filePath: res,
          fileData: res.data,
          fileUri: res.uri
        });
      }
    });
  }  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.resourcePath.data,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={{ uri: this.state.resourcePath.uri }}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ alignItems: 'center' }}>
            {this.state.resourcePath.uri}
          </Text>

          <Text style={styles.text1}>Use Camera or Library to know the disease of your plant by clicking Select File.</Text>

          <TouchableOpacity onPress={this.selectFile} style={styles.button}  >
              <Text style={styles.buttonText}>Select File</Text>
          </TouchableOpacity>
          

        </View>
      </View>
    );
  }
}
// AboutUs
class ProfileScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}> 
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo}/>
          </View> 
          <Text style={styles.text4}>About Us</Text>

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
    fontSize:25,
    paddingBottom:10,
    paddingTop: 18,
    paddingRight:180,
    fontWeight: "bold",
    color: "black",
    textDecorationLine: 'underline',
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
    margin: 10,
    alignItems: "center", 
    justifyContent: "center"
  },
  text3: {
    fontSize:15,
    color: "black",
    margin: 10,
    alignItems: "center", 
  }
});

export default createAppContainer(TabNavigator);  
