import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  Image,
  View, 
  SafeAreaView
} from "react-native";
import { Icon } from "react-native-vector-icons/FontAwesome";
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'
import { API_URL } from '../../utils/Env'
import { Button } from "react-native-elements";
import { StatusBar } from "react-native";
export default function SearchTiers() {
  const [isLoading, setLoading] = useState(true);

  const [listofTiers, setListOftiers] = useState([]);

  const [error, setError] = useState()

  const [pickerValue, setPickerValue] = useState("Select Item ....");



  // const getListofTiers = async () => {
  //  try{

  //      const response = await fetch (`${API_URL}/type/?name=${name}`); 
  //       const jsonData = await response.json(); 
  //       setListOftiers(jsonData); 
  //  }catch(err){
  //  console.log(err.message); 
  //   }}

  //  useEffect(() => {

  //  getListofTiers(); 
  // }, []); 

  //get all tiers 

  const getAllTiers = async () => {
    try {
      const response = await fetch(`${API_URL}/type`);
      const jsonData = await response.json();
      setListOftiers(jsonData);

    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllTiers();
  },
    []);







  //function search 





  return (
    <View style={styles.views}>
      <ImageBackground source={require('../../assests/bacground.png')} resizeMode="cover" style={styles.image}>

        <View style={styles.container}>
          <Image style={styles.icSearch} source={require('../../assests/ic_search.png')} />
          <TextInput
            style={styles.textInput}
            placeholderTextColor='white'
            placeholder="Search"
            onChangeText={(text) => {
              const letters = /^$|^[a-zA-Z._\b ]+$/;
              if (text.length > 12)
                setError("Query too long.")
              else if (text.match(letters)) {
                setQuery(text)
                if (error)
                  setError(false)
              }
              else setError("Please only enter alphabets")
            }}
          />

          <TouchableOpacity style={styles.panelButton}

          >
            <Text style={styles.textSign} > Search </Text>
          </TouchableOpacity>
          <View style={styles.views}>
            <Picker
              style={styles.piker}
              selectedValue={pickerValue}
              onValueChange={(itemValue) => setPickerValue(itemValue)}
            >
              {
                listofTiers.map((tier, myIndex) => (
                  <Picker.Item key={myIndex} label={tier.nametier + '-' + tier.pays}
                    value={myIndex} />
                ))
              }

            </Picker>
          </View>
 {/* <SafeAreaView style={styles.view}>
{
  isLoading ? <ActivityIndicator/> :(
   <FlatList
   data={listofTiers}
   key={({codetier}, index) => codetier}
   renderItem={({item}) => (
     <Text> {item.nametier} , {item.pays} </Text>
   )}

/>
  )
}


          </SafeAreaView> */}


        </View>
      </ImageBackground>

    </View>

  )



}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4%',
    marginLeft: '0%',
    width: '100%',
    paddingLeft: 10,
    flex: 1
  },
  textInput: {
    backgroundColor: '#BFBFBF',
    width: '99%',
    borderRadius: 5,
    height: 50,

    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: '',
    marginTop: 30
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
  }, panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#008B8B',
    alignItems: 'flex-end',
    marginVertical: 7,
  },
  views: {
    flex: 1
  },
  view :{
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  piker: {
    width: 400,
    height: 30,
    borderColor: "blue",
    color: "white",
    fontSize: 30,
    margin: 10,
    lineHeight: 84,
    fontWeight: "bold",
    backgroundColor: "#000000c0",
    textAlign: "center",

  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  icSearch: {
    height: 18, width: 18
  }

});