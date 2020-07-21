import React, { Component, useState, useEffect,Fragment} from 'react';
import { Platform, StyleSheet, Image, Text, View, TouchableOpacity,FlatList ,Alert,Dimensions } from 'react-native';
import Tflite from 'tflite-react-native';
import ImagePicker from 'react-native-image-picker';
import Colors from "../../constants/colors.js"
import Icon from 'react-native-vector-icons/Ionicons';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from "react-native-responsive-screen"




const Details = ({ navigation }) => {


    

    const [data, setData] = useState([])
    const [result,setResult] =useState("blah")
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
            setResult((results[0].symptoms))
            setLoading(false)
          }).catch(err=>{
            Alert.alert("Something went wrong")
          })
  }

  useEffect(() => {
    fetchData()
    
   
  

  

  }, [])

  

  const renderList = ((item) => {
   


const list = (items) => {
 return items.split('/').map((item, i) => {
    return (
    <Fragment key={i}>
      <View style={{flexDirection:"row"}}>
   <Image source={require("../../images/lo.png")} style={{width:20,height:20,marginLeft:wp("5%"),marginTop:2}}></Image>
    <Text style={{fontSize:15,fontWeight:"600",width:wp("80%"),marginLeft:wp("1%"),textAlign:'justify'}} key={i}>{item+"\n"}
    </Text>
    </View>
    </Fragment>
    );
  });
};

return (
        <View style={styles.container}>
            <Text style={{ fontSize: 14, fontWeight: "400", marginLeft: 30, marginTop: 20 }}>Detected Disease</Text>
            <Text style={{ fontSize: 20, fontWeight: "700", marginLeft: 30, color: Colors.darkGreen }}>{item.name.toUpperCase()}</Text>
            <View style={{flexDirection:"row",marginTop: 30,marginLeft:30 }}>
                <Icon style={[{ color: "black",marginTop:2 }]} size={25} name={'md-information-circle-outline'} />
                <Text style={{ fontSize: 20, fontWeight: "700", marginLeft: 10, color: "black", }}>About</Text>
            </View>
            <Text style={{fontSize:15,width:wp("85%"),marginLeft:wp("7%"),marginTop:10,fontWeight:"600",textAlign:'justify'}}>{item.about}</Text>
          
            <Text style={{fontSize:20,width:wp("85%"),marginLeft:wp("7%"),marginTop:20,fontWeight:"700",marginBottom:10}}>Check if your crops have the following symptoms:</Text>
            <View>{list(item.symptoms)}</View>
            <Text style={{fontSize:20,width:wp("85%"),marginLeft:wp("7%"),marginTop:10,fontWeight:"700",marginBottom:10}}>Preventive measures:</Text>
            <View style={{marginBottom:100}}>{list(item.treatment)}</View>
            
        </View>
    
    )
  })


    return (
    <View style={{backgroundColor: Colors.lightGreen,height:ScreenHeight}}>
       
                <FlatList
                data={data}
            
                renderItem={({ item }) => {
                return renderList(item)
                }}
                keyExtractor={item => item._id}
                onRefresh={() => fetchData()}
                refreshing={loading}
                contentContainerStyle={{ backgroundColor: Colors.lightGreen}}
            ></FlatList>

</View>
    )



}
let ScreenHeight = Dimensions.get('window').height;
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