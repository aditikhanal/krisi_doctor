import React, { Component, useState, useEffect } from 'react';
import { Platform, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import Tflite from 'tflite-react-native';
import ImagePicker from 'react-native-image-picker';
import Colors from "../../constants/colors.js"
import Icon from 'react-native-vector-icons/Ionicons';

const Details = ({ navigation }) => {

    const [model, setModel] = useState(null)

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 14, fontWeight: "400", marginLeft: 30, marginTop: 20 }}>Detected Disease</Text>
    <Text style={{ fontSize: 20, fontWeight: "700", marginLeft: 30, color: Colors.darkGreen }}>{navigation.getParam("disease","Not found")}</Text>
            <View style={{flexDirection:"row",marginTop: 30,marginLeft:30 }}>
            <Icon style={[{ color: "gray",marginTop:2 }]} size={25} name={'md-information-circle-outline'} />
            <Text style={{ fontSize: 20, fontWeight: "700", marginLeft: 10, color: "gray", }}>About Disease</Text>
         
            </View>
        </View>
    )



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: Colors.lightGreen
    },
}
)

export default Details;