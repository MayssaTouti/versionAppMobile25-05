import { func } from 'prop-types';
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    FlatList,
    TouchableOpacity,
    TextInput
} from 'react-native';
import SearchTiers from '../screens/SearchTiers';


export default function HomeSearchTiers() {

const [ value, setValue] = useState(); 

//function updateSearch
  function updateSearch(value){

  }

    return(
      <View  style={styles.container}>
        <View style={{ height: '20%', backgroundColor: "#3F569C", borderRadius: 10, }}>
         <Image source={require('../../assests/ic_back.png')}
         style={{ marginTop: '15%', marginLeft: '5%' }} />
         <SearchTiers
            value={value}
            updateSearch= {updateSearch}
            style={{ marginTop: '8%' }}
         />


        </View>





      </View>



    )







}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red', height: '100%', width: '100%' 
    },
});