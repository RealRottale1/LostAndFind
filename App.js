import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableHighlight, Image, TextInput, View, SafeAreaView, Alert } from 'react-native';
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
      searchPlaceholder="Can't find your county? Search for it here!"
      notFoundText='Sorry but that county does not exist in North Carolina!'
      data={countiesData}
      setSelected={setSelected}
      save='value'
      onSelect={() => {Alert.alert("Notice",`You selected ${selected}`)}}
    />
   </SafeAreaView>
  )
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(141, 128, 128)',
  },

});
