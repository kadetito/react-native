import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, StatusBar,TouchableOpacity,Keyboard } from 'react-native';
//import styles from './../../css/estilo.js';

export default class LoginForm extends Component{

        constructor(props){
            super(props)
            this.state={
                userEmail: '',
                userPassword: ''
            }
        }

        login = () => {
             const{userEmail, userPassword} = this.state;
//             //recibimos/enviamos datos con fetch
             fetch('http://www.webentorn.com/gtareas/puente_crud/login.php',{
                method: 'post',
                header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
                },
                body: JSON.stringify({
                 //pasamos los inputs al servidor
                 email: userEmail,
                 password: userPassword
                })
             }).then ((response) => response.json())
                    .then((responseJson)=>{
                        alert(responseJson);
                  if(responseJson == "ok"){
                    alert("Success");
                    this.props.navigation.navigate("Profile");
                  } else {
                    alert("Datos incorrectos");
                  }
             })
            .catch (
                (error) =>{
                  console.error(error);
                 }
            );
             Keyboard.dismiss();
        }

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
                onChangeText={userEmail => this.setState({userEmail})}
                onSubmitEditing={(input) => this.passwordInput.focus()}
            />
            <TextInput
                secureTextEntry
                style={styles.input}
                placeholder="password"
                placeholderTextColor= "#666666"
                returnKeyType="go"
                onChangeText={userPassword => this.setState({userPassword})}
                ref={(input) => this.passwordInput = input}
            />
            <TouchableOpacity onPress={this.login} style={styles.botonContenedor} >
             <Text style={styles.botonTexto}>LOGIN</Text>
            </TouchableOpacity>




        <View >
            <Text style={styles.centrado}>crear cuenta            recordar datos</Text>
        </View>





       </View>
      );
     }
}

const styles = StyleSheet.create({
    container: {
        padding:15,
        },
     izquierda:{
         height: 50,
         textAlign: 'left',
         marginTop:20
         },
     centrado:{
         textAlign: 'center',justifyContent: 'center',alignItems: 'center',
         marginTop:20
          },
    derecha:{
        height: 50,
        textAlign: 'right',
        marginTop:20
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