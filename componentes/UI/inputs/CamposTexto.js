import React, { Component } from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import styles from './../../../css/estilo.js';


const camposdeexto = {
input: 'inputstyle',
  name1: 'username',
  name2: 'password'

}

export default class CamposTexto extends Component {
  render() {
    return (
<View>
    <View style={[styles.box, styles.box2]}>
    <TextInput style={styles.inputstyle}  />

//    <Input name={camposdeexto.name1} value={camposdeexto.name1}
//      placeholder='INPUT WITH CUSTOM ICON'
//      leftIcon={
//        <Icon
//          name='user'
//          size={24}
//          color='black'
//        />
//      }
//    />


    </View>
    <View style={[styles.box, styles.box2]}><TextInput style={styles.inputstyle} name={camposdeexto.name2} value={camposdeexto.name2} /></View>
</View>



    )
  }
}
