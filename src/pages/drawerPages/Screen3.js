//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, ScrollView } from 'react-native';
// import all basic components
import Unorderedlist from 'react-native-unordered-list';

export default class Screen3 extends Component {
  //Screen3 Component
  render() {
    return (
    <View style={styles.MainContainer}>
     <ScrollView>
        <ScrollView vertical={true}>
        <Text style={styles.text1}>किसानहरूले विचार गर्नु पर्ने चीजहरू।</Text>
        <Text style={styles.text}>बिरुवालाई आवश्यक पर्ने सबै खाद्यतत्वहरू आवश्यकता अनरूप, न्यायोचित रूपमा उपलब्ध गराउन, रासायनिक मल सहित प्राङ्गारिक मलहरूको सबै सम्भाव्य स्रोतहरू लाई अधिकतम उपभोगमा ल्याई बाली व्यवस्थापन, माटो व्यवस्थापन र खाद्यतत्व व्यवस्थापनलाई टेवा दिदै वातावरणमा न्यून असर पार्दै माटोको दिगो उर्वराशक्ति व्यवस्थापन गर्दै जाने प्रकृयालाई एकीकृत खाद्यतत्व व्यवस्थापन भनिन्छ। </Text>
        <Unorderedlist bulletUnicode={0x29BF} color='black' style={{ fontSize:18 }}><Text  style={styles.text2}>निर्णायक अवस्थाहरु</Text>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>बजारको पहुँच</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>कामदारको उपलव्धता</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>सामाजिक स्थिति</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>प्राकृतिक स्रोत</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>परम्परागत ज्ञान र सीप</Text></Unorderedlist>
        </Unorderedlist>

        <Unorderedlist bulletUnicode={0x29BF} color='black' style={{ fontSize:18 }}><Text  style={styles.text2}>खाद्यतत्व व्यवस्थापन</Text>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>गोठेमल/कम्पोष्ट मल</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>हरियोमल</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}> प्राङ्गारिक पदार्थ /बालीका अवशेष व्यवस्थापन</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>जैविक स्थिरीकरण</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>रासायनिक मल</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}> घरायसी फोहर</Text></Unorderedlist>
        </Unorderedlist>

        <Unorderedlist bulletUnicode={0x29BF} color='black' style={{ fontSize:18 }}><Text  style={styles.text2}>माटोको अवस्था</Text>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>माटोको बनोट तथा बनोट</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>माटोको पि.एच.</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>प्राङ्गारिक पदार्थ चुहावट</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>भक्षय</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>खाद्यतत्वको उपलव्धता</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>सुक्ष्हम जीवाणको उपस्थिति</Text></Unorderedlist>
        </Unorderedlist>

        <Unorderedlist bulletUnicode={0x29BF} color='black' style={{ fontSize:18 }}><Text  style={styles.text2}>माटो व्यवस्थापन</Text>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>भु–क्षय घटाउने</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>पि.एच. सन्तुलन गर्ने</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>प्राङ्गारिक पदार्थको सन्तुलन्</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>चुहावट घटाउने</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>खाद्यतत्वको उपलव्धता बढाउने</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>खनजोत व्यवस्थापन</Text></Unorderedlist>
        </Unorderedlist>

        
        <Unorderedlist bulletUnicode={0x29BF} color='black' style={{ fontSize:18 }}><Text  style={styles.text2}>बालीव्यवस्थापन</Text>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>बाली चक्र</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>लक्षित उत्पादनको अनुमान</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>बालीले लिने खाद्यतत्वको अनुमान</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>उपयुक्त जातको छनौट</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>अन्तरबाली प्रणाली</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>रोप्ने समय र तरिका</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>चिस्यानको व्यवस्था</Text></Unorderedlist>
              <Unorderedlist bulletUnicode={0x2022} color='black' style={{ fontSize:20 }}><Text style={styles.text3}>झारपात, रोगकीराको व्यवस्थापन</Text></Unorderedlist>
        </Unorderedlist>
        
        </ScrollView>
        
        </ScrollView>
      </View>
    );
  }
} 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 0,
    alignItems: 'center',
    marginTop: 0,
    //justifyContent: 'center',
    backgroundColor: '#70B086'
  },
  text: {
    fontSize:17,
    //fontWeight: "bold",
    color: "black",
    paddingLeft:20
  },
  text1: {
    fontSize:25,
    textDecorationLine: 'underline',
    fontWeight: "bold",
    color: "black",
    fontStyle: "italic",
    paddingLeft: 17,
    paddingBottom:0,
  },
  text2: {
    fontSize:19,
    fontWeight: "bold",
    color: "black",
    fontStyle: "italic",
    paddingLeft: 3,
    paddingRight:180,
  },
  text3: {
    fontSize:17,
    color: "black",
    paddingLeft:5
  },
});