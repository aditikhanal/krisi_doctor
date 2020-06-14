import React, { Component, useState, useEffect} from 'react';
import { Platform, StyleSheet, Image, Text, View, TouchableOpacity,FlatList ,Alert } from 'react-native';
import Tflite from 'tflite-react-native';
import ImagePicker from 'react-native-image-picker';
import Colors from "../../constants/colors.js"
import Icon from 'react-native-vector-icons/Ionicons';

const Details = ({ navigation }) => {

    const [data, setData] = useState([])
    const [result,setResult] =useState([])
    const [loading, setLoading] = useState(true)

 const fetchData = () => {
    fetch("https://krisi-doctor.herokuapp.com/searchdetails", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name:navigation.getParam("disease","Not found")
      })

    }).then(res => res.json())
    .then(results => {
            setData(results)
            console.log(results)
            setLoading(false)
          }).catch(err=>{
            Alert.alert("Something went wrong")
          })
  }

  useEffect(() => {
    fetchData()
  

  

  }, [])

  const renderList = ((item) => {
    return (
        <View style={styles.container}>
        <Text style={{ fontSize: 14, fontWeight: "400", marginLeft: 30, marginTop: 20 }}>Detected Disease</Text>
      <Text style={{ fontSize: 20, fontWeight: "700", marginLeft: 30, color: Colors.darkGreen }}>{item.name}</Text>
        <View style={{flexDirection:"row",marginTop: 30,marginLeft:30 }}>
        <Icon style={[{ color: "gray",marginTop:2 }]} size={25} name={'md-information-circle-outline'} />
        <Text style={{ fontSize: 20, fontWeight: "700", marginLeft: 10, color: "gray", }}>About</Text>
  
     
        </View>
        <Text>{item.about}</Text>
    <Text>Treatments</Text>
    <Text>{item.treatment}</Text>
    </View>

    )
  })


    return (
    <View style={{backgroundColor: Colors.lightGreen}}>
       
                <FlatList
                data={data}
            
                renderItem={({ item }) => {
                return renderList(item)
                }}
                keyExtractor={item => item._id}
                onRefresh={() => fetchData()}
                refreshing={loading}
                contentContainerStyle={{  backgroundColor: Colors.lightGreen}}
            ></FlatList>

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