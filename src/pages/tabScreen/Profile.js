import React, { Component } from "react";
import { List, ListItem, Text } from "native-base";
import { View, ScrollView, Image, StyleSheet, Dimensions } from "react-native";
var deviceWidth = Dimensions.get('window').width;
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from "react-native-responsive-screen"

var item = [
  //name key is must.It is to show the text in front
  { id: 1, info: '१. चित्र चयन गर्नुहोस् बटनमा क्लिक गर्नुहोस्। तस्वीर लोड गर्न क्यामेरा वा ग्यालरी चयन गर्नुहोस्।', picture: 'asset:/images/home.png' },
  { id: 2, info: '२. पत्ता लागेको रोग देखाइन्छ वा स्वस्थ बाली पनि हुन सक्छ।', picture: 'asset:/images/detection.png' },
  { id: 3, info: '३. पत्ता लागेको रोगको बारेमा विवरणहरू लक्षण र रोकथाम उपायहरूको साथ देखाईनेछ।', picture: 'asset:/images/diseaseinfo.png' },
  { id: 4, info: '४. तल देखाइएको बटनमा क्लिक गर्नुहोस्। एउटा ड्रअर धेरै पेजहरूका साथ देखा पर्नेछ।', picture: 'asset:/images/drawerIcon.png' },
  { id: 5, info: '५. यस ड्रअरबाट धेरै पेजहरू चयन गर्न सक्नुहुनेछ।', picture: 'asset:/images/drawer.png' },
  { id: 6, info: "६. 'हामीलाई  सन्देश पठाउनुहोस्' पेजबाट हामीलाई तपाईले चाहानु भएको कुनै पनि प्रश्नहरू पठाउनुहोस्। ", picture: 'asset:/images/contact.png' },
  { id: 7, info: '७. तपाईं यस पेजमा बाली-हरूको व्यवस्थापनको लागि आवश्यक सल्लाहहरू देख्नुहुनेछ।', picture: 'asset:/images/info.png' },
  { id: 8, info: "८. तपाईं यस पेजमा हाम्रो  सम्पर्क नम्बर र ईमेल पाउनुहुनेछ। ", picture: 'asset:/images/about.png' },



];
var radio_props = [
  { value: 0 },
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: 7 },

];



class Profile extends Component {


  renderResults() {
    return item.map((items, id) => {
      return (
        <View style={styles.container}>
          <View style={styles.secondView}>
            <Text style={{
              fontSize: 20,
              fontWeight: '700',
              color: '#000',
              marginLeft: 12,
              marginTop: -20,

            }}>हाम्रो अनुप्रयोग प्रयोग गर्न सजिलो चरणहरू!!</Text>
            <Text key={id} style={{
              fontSize: 17,
              fontWeight: '800',
              color: 'green',
              marginTop: 20,
              width: wp("85%"),
              marginLeft: 5,
            }}>{items["info"]}</Text>

            <Image source={{ uri: items["picture"] }}></Image>
            <Image style={{ width: 325, height: 500, marginTop: 10 }} source={{ uri: items["picture"] }}></Image>

            <RadioForm
              radio_props={radio_props}
              initial={id}
              onPress={(value) => { this.setState({ value: value }) }}
              buttonColor={'#efefef'}
              disabled={true}

              borderWidth={1}

              buttonInnerColor={'black'}
              formHorizontal={true}
              buttonSize={2}
              style={{ alignSelf: 'center', marginTop: 10 }}
            />



          </View>
        </View>
      )

    });

  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>


          {this.renderResults()}


        </ScrollView>

        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#C8E6C9"
  },
  text: {
    fontSize: 20,
    paddingLeft: 85,
    fontWeight: "bold"
  },
  firstView: {
    flex: 1,
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',

  },
  secondView: {
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdView: {
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Profile;

{/* <List>

                <ListItem> */}
        {/* <Text style={{
                                fontSize: 20,
                                fontWeight: '700',
                                color: '#000',
                                marginLeft:12,
                }}>हाम्रो अनुप्रयोग प्रयोग गर्न सजिलो चरणहरू!!</Text>
                
                </ListItem>

                <ListItem>
                <Text style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: 'green',
                                marginLeft:0,
                }}>१. 'चित्र चयन गर्नुहोस्' बटनमा{'\n'}     क्लिक गर्नुहोस्। तस्वीर{'\n'}     लोड गर्न क्यामेरा वा ग्यालरी{'\n'}     चयन गर्नुहोस्।</Text>
                  <Text style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: 'green',
                                marginLeft:5,
                  }}>२. पत्ता लागेको रोग देखाइन्छ{'\n'}     वा  स्वस्थ बाली पनि हुन {'\n'}     सक्छ।</Text>
                </ListItem>
                
                <ListItem>
                <Image
                   style={{ width: "45%", height: 300, resizeMode: "cover", margin: 5}}
                    source={require("../../images/g.jpg")} 
               />
               <Image
                   style={{ width: "45%", height: 300, resizeMode: "cover", margin:5 }}
                    source={require("../../images/h.jpg")} 
               />
                </ListItem>

                <ListItem>
                <Text style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: 'green',
                                marginLeft:0,
                }}>३. पत्ता लागेको रोगको बारेमा{'\n'}    विवरणहरू लक्षण र रोकथाम{'\n'}    उपायहरूको साथ देखाईनेछ।</Text>
                  <Text style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: 'green',
                                marginLeft:5,
                  }}>४. तल देखाइएको तीरमा क्लिक{'\n'}     गर्नुहोस्। एउटा ड्रअर धेरै{'\n'}     पेजहरूका साथ देखा पर्नेछ।</Text>
                </ListItem>

                <ListItem>
                <Image
                   style={{ width: "45%", height: 300, resizeMode: "cover", margin:5}}
                    source={require("../../images/i.jpg")} 
               />
               <Image
                   style={{ width: "45%", height: 300, resizeMode: "cover", margin:5 }}
                    source={require("../../images/k.jpg")} 
               />
                </ListItem>

                <ListItem>
                <Text style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: 'green',
                                marginLeft:8,
                }}>५. सन्देश पठाउन 'हामीलाई{'\n'}     सन्देश पठाउनुहोस्' पेज{'\n'}     चयन गर्नुहोस्।</Text>
                  <Text style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: 'green',
                                marginLeft:8,
                  }}>६. हामीलाई तपाईले चाहानु{'\n'}     भएको कुनै पनि प्रश्नहरू{'\n'}     पठाउनुहोस्। त्यसपछि{'\n'}     पठाउन 'बुझाउनुहोस्' बटन    क्लिक गर्नुहोस्।</Text>
                </ListItem>

                <ListItem>
                <Image
                   style={{ width: "45%", height: 300, resizeMode: "cover", margin:5}}
                    source={require("../../images/t.jpg")} 
               />
               <Image
                   style={{ width: "45%", height: 300, resizeMode: "cover", margin:5}}
                    source={require("../../images/p.jpg")} 
               />
                </ListItem>
                  
                <ListItem>
                <Text style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: 'green',
                                marginLeft:8,
                }}>७. तपाईं यस पेजमा बाली-{'\n'}     हरूको व्यवस्थापनको{'\n'}     लागि आवश्यक {'\n'}     सल्लाहहरू देख्नुहुनेछ।</Text>
                  <Text style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: 'green',
                                marginLeft:8,
                  }}> तपाईं यस पेजमा हाम्रो{'\n'}       सम्पर्क नम्बर र ईमेल{'\n'}       पाउनुहुनेछ।</Text>
                </ListItem>

                <ListItem>
                <Image
                   style={{ width: "45%", height: 300, resizeMode: "cover", margin:5}}
                    source={require("../../images/m.jpg")} 
               />
               <Image
                   style={{ width: "45%", height: 300, resizeMode: "cover", margin:5}}
                    source={require("../../images/l.jpg")} 
               />
                </ListItem>
               
                <ListItem>
                    <Text>   हामी आशा गर्दछौं कि तपाईले हाम्रो अनुप्रयोग प्रयोग गर्न {'\n'}   सजिलो पाउनुहुनेछ। </Text>
                </ListItem>
                
                </List> */}