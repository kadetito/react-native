import React from 'react';
import { Image, StyleSheet, Text, View, TextInput,Dimensions,ScrollView,KeyboardAvoidingView,SafeAreaView,RefreshControl } from 'react-native';
//import CamposTexto from './componentes/UI/inputs/CamposTexto.js';
//import styles from './css/estilo.js';
//import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import Login from './componentes/Login/Login.js';
import Constants from 'expo-constants';

//funcion que define el tiempo de reload
function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const logotipo = {
  image: 'http://www.webentorn.com/gtareas/frontend/www/img/logogtareas.png',
  text: 'on change texto'
}

var { height } = Dimensions.get('window');


export default function App() {

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);


  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                  <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
              >
            <Login />
            </ScrollView>
        </SafeAreaView>
    </KeyboardAvoidingView>
  );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3450b',
        marginTop: Constants.statusBarHeight
    },
scrollView: {
    flex: 1
  }
});
