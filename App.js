import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableHighlight, Image, TextInput, View, SafeAreaView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

export default function App() {
  //JavaScript
  const [selected, setSelected] = React.useState("");

  const countiesData = [
    {key:'1', value:'Wake County'},
    {key:'2', value:'Evil Wake County'},
    {key:'23', value:'Durham County'},
  ];

  //HTML
  return(
   <SafeAreaView styele={styles.container}>
    <SelectList
      data={countiesData}
      setSelected={setSelected}
    />
   </SafeAreaView>
  )
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },

});
