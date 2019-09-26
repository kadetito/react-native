
import { Image, StyleSheet, Text, View, TextInput,Dimensions,ScrollView } from 'react-native';

var {height, width} = Dimensions.get('window');


 export default StyleSheet.create({

 container: { alignItems: 'center', backgroundColor: '#993a75',
    color: '#f55742',flex: 1,flexDirection: 'column',width: width,height:height
    },

  box1: {

    marginTop: height * 0.2 ,
    marginBottom: height * 0.1 ,
    alignItems: 'center'
  },

  box3: {
  alignItems: 'center',
    marginBottom: height * 0.06 ,

     borderColor: '#ffffff',
      width:width * 0.7 ,

  },
  image: {
  width:166,
  height:52
  },

 inputstyler:{
 backgroundColor: '#ffffff',
flex: 1,
 padding: 6,
 flexDirection: 'row'

 },
 password_icon_color: {
  backgroundColor: '#fc1303',
 },

 estilolabel: {
 color:'#ffffff'
 }


 });




