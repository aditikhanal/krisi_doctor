import React, { Component } from "react";
    import { List, ListItem, Text } from "native-base";
    import { View, ScrollView, Image, StyleSheet} from "react-native";

    class Profile extends Component {
    render() {
        return (
          <View style={styles.container}>
            <ScrollView>
            <ScrollView horizontal={true}>
                <List>

                <ListItem>
                <Text style={{
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
                  }}>२. पत्ता लागेको रोग देखाइन्छ{'\n'}     वा तल देखाइए अनुसार{'\n'}     स्वस्थ बाली पनि हुन सक्छ।</Text>
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
                }}>३. तल देखाइएको तीरमा क्लिक{'\n'}     गर्नुहोस्। एउटा ड्रअर धेरै{'\n'}     पेजहरूका साथ देखा पर्नेछ।</Text>
                  <Text style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: 'green',
                                marginLeft:5,
                  }}>४. सन्देश पठाउन 'हामीलाई{'\n'}     सन्देश पठाउनुहोस्' पेज{'\n'}     चयन गर्नुहोस्।</Text>
                </ListItem>

                <ListItem>
                <Image
                   style={{ width: "45%", height: 300, resizeMode: "cover", margin:5}}
                    source={require("../../images/i.jpg")} 
               />
               <Image
                   style={{ width: "45%", height: 300, resizeMode: "cover", margin:5 }}
                    source={require("../../images/j.jpg")} 
               />
                </ListItem>
                  
                <ListItem>
                <Text style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: 'green',
                                marginLeft:0,
                }}>५. हामीलाई तपाईले चाहानु{'\n'}     भएको कुनै पनि प्रश्नहरू{'\n'}     पठाउनुहोस्। त्यसपछि{'\n'}     पठाउन 'बुझाउनुहोस्' बटन {'\n'}     क्लिक गर्नुहोस्।</Text>
                  <Text style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: 'green',
                                marginLeft:0,
                  }}>६. तपाईं यस पेजमा हाम्रो{'\n'}       सम्पर्क नम्बर र ईमेल{'\n'}       पाउनुहुनेछ।</Text>
                </ListItem>

                <ListItem>
                <Image
                   style={{ width: "45%", height: 300, resizeMode: "cover", margin:5}}
                    source={require("../../images/k.jpg")} 
               />
               <Image
                   style={{ width: "45%", height: 300, resizeMode: "cover", margin:5}}
                    source={require("../../images/l.jpg")} 
               />
                </ListItem>
               
                <ListItem>
                    <Text>   हामी आशा गर्दछौं कि तपाईले हाम्रो अनुप्रयोग प्रयोग गर्न {'\n'}   सजिलो पाउनुहुनेछ। </Text>
                </ListItem>
                
                </List>
            </ScrollView>
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
        paddingLeft:85,
        fontWeight: "bold"
      },
    });
    export default Profile;