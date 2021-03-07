import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, Button, Linking } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from "../../constants/colors"
import { Card } from 'react-native-elements';

const openDial = () => {
  if (Platform.OS === "android") {
    Linking.openURL("tel:9876543210")
  } else {
    Linking.openURL("telprompt:9876543210")
  }
}

// AboutUs
class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#357D2C", "#C2BF61"]}
          style={{ height: "25%" }}
        />
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 120, height: 120, borderRadius: 60, marginTop: -50 }}
            source={require("../../images/pp.png")}
          />
        </View>
        <Text style={styles.text4}>कृषि डाक्टर</Text>
        <Text style={styles.text2}>हाम्रो अनुप्रयोग "कृषि डॉक्टर" छवि प्रसंस्करण को विचार प्रयोग गरी बिरुवाहरुमा रोग वर्गीकृत गर्न सहयोगी छ। तस्विरहरू प्रणालीमा प्रदान गरिन्छन र प्रणालीले छवि प्रसंस्करणको प्रविधिहरूको प्रयोग गरी प्रयोगकर्ताहरूलाई वर्गीकृत रोग दिन्छ।</Text>

        <Text style={styles.text3}>              वर्तमान सन्दर्भमा रोगको पहिचान म्यानुअल तरिकाले गरिन्छ तर यति धेरै वातावरणीय परिवर्तनहरूका कारण भविष्यवाणी कडा हुँदै गइरहेको छ। त्यसैले हामी बिरूवाको रोगको पहिचानको लागी छवि प्रसंस्करणको उपयोग गर्न सक्छौं।</Text>

        <Text style={styles.text1}>थप विवरणहरूको लागि:</Text>
        <View style={styles.card}>
          <Card containerStyle={styles.mycard} onPress={() => {
            Linking.openURL("mailto:abc@gmail.com")
          }}>
            <View style={styles.cardContent}>
              <Icon name="envelope" size={30} color="#fff" />
              <Text style={styles.mytext} >krisidoctor@gmail.com</Text>
            </View>
          </Card>

          <Card containerStyle={styles.mycard1} onPress={() => openDial()}>
            <View style={styles.cardContent}>
              <Icon name="phone" size={30} color="#fff" />
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
    marginTop: 0,
    backgroundColor: Colors.lightGreen,
    flex: 1


  },
  cont: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#357D2C'
  },
  card: {
    flex: 1,
    backgroundColor: Colors.lightGreen,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 0
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 12,
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
    fontSize: 28,
    paddingTop: 0,
    paddingLeft: 115,
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic"
  },
  text1: {
    fontSize: 15,
    paddingLeft: 42,
    padding: 0,
    fontWeight: "bold",
    color: "black",
  },
  text2: {
    fontSize: 14,
    color: "black",
    margin: 15,
    alignItems: "center",
    marginBottom: 0
  },
  text3: {
    fontSize: 14,
    color: "black",
    margin: 15,
    alignItems: "center",
    paddingBottom: 10,
    marginTop: 20
  },
  mycard: {
    // margin:5,
    //height:30,
    backgroundColor: "#70B086",
    flexDirection: "row",
    borderWidth: 0,
    padding: 4,
  },
  mycard1: {
    backgroundColor: "#70B086",
    flexDirection: "row",
    padding: 4,

  },
  cardContent: {
    flexDirection: "row",
  },
  mytext: {
    fontSize: 17,
    marginTop: 1,
    marginLeft: 20,
    color: "black"
  },
});
export default ProfileScreen;

