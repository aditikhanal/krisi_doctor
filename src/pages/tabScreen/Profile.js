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
                  }}>६. हामीलाई तपाईले चाहानु{'\n'}     भएको कुनै पनि प्रश्नहरू{'\n'}     पठाउनुहोस्। त्यसपछि{'\n'}     पठाउन 'बुझाउनुहोस्' बटन {'\n'}     क्लिक गर्नुहोस्।</Text>
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
                  }}>८. तपाईं यस पेजमा हाम्रो{'\n'}       सम्पर्क नम्बर र ईमेल{'\n'}       पाउनुहुनेछ।</Text>
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