import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, KeyboardAvoidingView} from 'react-native';
//import styles from './../../css/estilo.js';
import LoginForm from './LoginForm.js';


export default class Login extends Component{
 render(){
  return (
   <View  style={styles.container}>
    <View style={styles.logoContainer}><Image source={require('../../assets/imagenes/logowebentorn.png')} /></View>
    <View style={styles.formContainer}><LoginForm /></View>
   </View>
  );
 }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoContainer: {
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e3450b'
        },

    formContainer:{ flexGrow: 1,}
});