import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import { StyleSheet, Text, TouchableHighlight, Image, TextInput, View, SafeAreaView, Alert } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list' // For dropdown list
import AsyncStorage from '@react-native-async-storage/async-storage' // For data storage


export default function App() {
  //JavaScript
  const [selected, setSelected] = React.useState("")
  const countiesData = [
    {key:'1', value:'Wake County'},
    {key:'2', value:'Evil Wake County'},
    {key:'23', value:'Durham County'},
  ];

  const userData = {}
  async function saveUserData() {
    if (userData && userData[0]) {
      try {
        await AsyncStorage.setItem("userData", JSON.stringify(userData[0]))
        console.log("Saved Data");
      } catch (err) {
        console.log(err)
      }
    }
  }
  async function loadUserData() {
    try {
      const stringData = await AsyncStorage.getItem("userData")
      if (stringData) {
        userData[0] = JSON.parse(stringData)
        console.log(userData[0])
      } else {
        userData[0] = {name: "", timeBeforePost: 0}
      }
      console.log("Done!")
    } catch (err) {
      console.log(err)
    }
  }
  loadUserData()

  //HTML
  return(
   <SafeAreaView styele={styles.container}>
    <SelectList
      searchPlaceholder="Can't find your county? Search for it here!"
      notFoundText='Sorry but that county does not exist in North Carolina!'
      data={countiesData}
      setSelected={setSelected}
      save='value'
      onSelect={() => {Alert.alert("Notice", `You selected ${selected}`)}}
    />
    <TouchableHighlight onPress={() => {
      saveUserData();
      Alert.alert("Notice", "Your lost item data has been sent!")
      }}>
      <Text>Submit Data</Text>
    </TouchableHighlight>
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
