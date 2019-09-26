import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, StatusBar,TouchableOpacity} from 'react-native';
//import styles from './../../css/estilo.js';

export default class LoginForm extends Component{
 render(){
  return (
   <View style={styles.container}>
     <StatusBar barStyle="light-content" />
        <TextInput
            style={styles.input}
            placeholder="usuario"
            placeholderTextColor= "#666666"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={(input) => this.passwordInput.focus()}
        />
        <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="password"
            placeholderTextColor= "#666666"
            returnKeyType="go"
            ref={(input) => this.passwordInput = input}
        />
        <TouchableOpacity style={styles.botonContenedor} >
         <Text style={styles.botonTexto}>LOGIN</Text>
        </TouchableOpacity>
   </View>
  );
 }
}

const styles = StyleSheet.create({
    container: {
        padding:15
        },
    input: {
        height:40,
        backgroundColor: 'rgba(255,255,255,0.6)',
        marginBottom:10,
        color: '#000',
        paddingHorizontal:10,
    },
    botonContenedor: {
        backgroundColor: '#f2790f',
        paddingVertical: 15
    },
    botonTexto: {
        textAlign: 'center',
        color:'#ffffff'
    }

});