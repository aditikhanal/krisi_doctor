import React, { Component,useState,useEffect } from 'react';
import { Platform, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import Tflite from 'tflite-react-native';
import ImagePicker from 'react-native-image-picker';
import Colors from "../../constants/colors.js"

let tflite = new Tflite();

var height = 200;
var width = 350;
var blue = "#25d5fd";



const Camera = ({ navigation }) => {

const [model,setModel]=useState(null)
const [filePath,setfilePath]=useState([])
const [imageHeight,setImageHeight]=useState(height)
const [imageWidth,setImageWidth]=useState(width)
const [recognitions,setRecognitions]=useState([])




    // const onSelectModel=()=>{
    // setModel('models/plant_disease.tflite')
    // tflite.loadModel({
    //     model: 'models/plant_disease.tflite',
    //     labels: 'models/plant_labels.txt'
    //   },
    //     (err, res) => {
    //       if (err)
    //         console.log(err);
    //       else
    //         console.log(res);
    //     });
        

    // }

   const chooseFile = () => {
        var options = {
          title: 'Select Image',
          customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            let source = response;
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            setfilePath(source)
          }
        });
      };
//    const onSelectImage=()=>{
//         var options = {
//           title: 'Select Image',
//           customButtons: [
//             { 
//               name: 'customOptionKey', 
//               title: 'Choose file from Custom Option' 
//             },
//           ],
//           storageOptions: {
//             skipBackup: true,
//             path: 'images',
//           },
//         }
    
//       ImagePicker.launchImageLibrary(options, (response) => {
//           if (response.didCancel) {
//             console.log('User cancelled image picker');
//           } else if (response.error) {
//             console.log('ImagePicker Error: ', response.error);
//           } else if (response.customButton) {
//             console.log('User tapped custom button: ', response.customButton);
//           } else {
//             var path = Platform.OS === 'ios' ? response.uri : 'file://' + response.path;
//             var w = response.width;
//             var h = response.height;
           
//               setSource({uri: path}),
//               setImageHeight(h * width / w)
//               setImageWidth( {width})
            
//            tflite.runModelOnImage({
//                   path,
//                   imageMean: 128.0,
//                   imageStd: 128.0,
//                   numResults: 1,
//                   threshold: 0.05
//                 },
//                   (err, res) => {
//                     if (err)
//                       console.log(err);
//                     else
//                     setRecognitions({ res });
//                   });
            
//           }
//         });
//     }
  // const  renderResults=()=> {
     
       
        
    
 
  //           return recognitions.map((res, id) => {
  //             return (
  //               <View>
  //               {(res["confidence"])>=0.5?
  //                 <View>
  //               <Text key={id} style={{ marginTop:10,color: 'black' }}>
                 
  //                 {res["label"] + "-" + (res["confidence"] * 100).toFixed(0) + "%"}
              
  //               </Text>
  //               </View>
  //               :<Text>Not Found</Text>
                
  //           }
  //     </View>
  //             )
                
  //           });
        
  //     }

      return (
        <View style={styles.container}>
      
        <TouchableOpacity onPress={chooseFile()} style={{
         height:50,width:100,backgroundColor:"green"}} >
             <Text>Select Image</Text>
          {/* {
            source ?
              <Image source={source} style={{
                height: imageHeight, width: imageWidth
              }} resizeMode="contain" /> :
              <Text style={styles.text}>Select Picture</Text>
          }
          <View style={styles.boxes}>
            {/* {renderResults()} */}
          {/* </View> */} 
        </TouchableOpacity>
        
        <View>
         {/* <TouchableOpacity onPress={onSelectModel()}><Text>Select Picture</Text></TouchableOpacity> */}
         
        </View>
      
    </View>
      );

    
}

export default Camera;




  

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGreen
  },
  imageContainer: {
    borderColor: blue,
    borderRadius: 5,
    alignItems: "center"
  },
  text: {
    color: blue
  },
  button: {
    width: 200,
    backgroundColor: Colors.tab,
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 15
  },
  box: {
    position: 'absolute',
    borderColor: blue,
    borderWidth: 2,
  },
  boxes: {
    //position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
});




