import React, { Component } from 'react';
import { Platform, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import Tflite from 'tflite-react-native';
import ImagePicker from 'react-native-image-picker';
import Colors from "../../constants/colors.js"

let tflite = new Tflite();

const height = 200;
const width = 350;
const blue = "#25d5fd";
const mobile = "MobileNet";
const ssd = "SSD MobileNet";


export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      model: null,
      source: null,
      imageHeight: height,
      imageWidth: width,
      recognitions: []
    };
  }

  onSelectModel(model) {
    this.setState({ model });
    switch (model) {
      
      
      default:
        var modelFile = 'models/plant_disease.tflite';
        var labelsFile = 'models/plant_labels.txt';
    }
    tflite.loadModel({
      model: modelFile,
      labels: labelsFile,
    },
      (err, res) => {
        if (err)
          console.log(err);
        else
          console.log(res);
      });
  }

  onSelectImage() {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

   
     
    
  
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        var path = Platform.OS === 'ios' ? response.uri : 'file://' + response.path;
        var w = response.width;
        var h = response.height;
        this.setState({
          source: { uri: path },
          imageHeight: h * width / w,
          imageWidth: width
        });

        switch (this.state.model) {
         
         

          default:
            tflite.runModelOnImage({
              path,
              imageMean: 128.0,
              imageStd: 128.0,
              numResults: 1,
              threshold: 0.05
            },
              (err, res) => {
                if (err)
                  console.log(err);
                else
                  this.setState({ recognitions: res });
              });
        }
      }
    });
  }

  renderResults() {
    const { model, recognitions, imageHeight, imageWidth } = this.state;
    switch (model) {
      case ssd:
    

      default:
        return recognitions.map((res, id) => {
          return (
            <View>
            {(res["confidence"])>=0.5?
              <View>
            <Text key={id} style={{ marginTop:10,color: 'black' }}>
             
              {res["label"] + "-" + (res["confidence"] * 100).toFixed(0) + "%"}
          
            </Text>
            </View>
            :<Text>Not Found</Text>
            
        }
  </View>
          )
            
        });
    }
  }

  render() {
    const { model, source, imageHeight, imageWidth } = this.state;
    
    return (
      <View style={styles.container}>
        {model ?
          <TouchableOpacity style={
            [styles.imageContainer, {
              height: 350,
              width: 350,
              borderWidth: source ? 0 : 2
            }]} onPress={this.onSelectImage.bind(this)}>
            {
              source ?
                <Image source={source} style={{
                  height: 350, width: 350
                }} resizeMode="contain" /> :
                <Text style={styles.text}>Select</Text>
            }
            <View style={styles.boxes}>
              {this.renderResults()}
            </View>
          </TouchableOpacity>
          :
          <View>
           <TouchableOpacity style={styles.button} onPress={this.onSelectModel.bind(this, "MobileNet")}>
          <Text style={styles.buttonText}>चित्र चयन गर्नुहोस्</Text>
        </TouchableOpacity>
          
          </View>
        }
      </View>
    );
  }
}

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
    fontSize: 18
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
