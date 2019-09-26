import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const contenido = {
  name: 'nombreinput',
  text: 'cosa que va dentro del input como value',
  classeinput: 'form-control',
}



class Inputs extends Component {
  render() {
 <View style={styles.container}>
 <View style={styles.info}>
      <TextInput name="{contenido.name}" class="{contenido.classeinput}" id="" value="{contenido.text}" />
    </View>
     </View>
  }
}


const styles = new StyleSheet.create({
  container: {},
  info: {},
  classeinput: {}
})


export default Inputs;