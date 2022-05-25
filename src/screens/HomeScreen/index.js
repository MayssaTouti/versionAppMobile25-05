import React, { useState, useContext, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert ,  } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL } from '../../../utils/Env';
import { useNavigation } from '@react-navigation/native';
import SignInScr from '../SignInScr';
import Navigation from '../../navigation';
const HomeScreens = () => {
  
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();  
       async function getName() {

        try {
          const jwt = await AsyncStorage.getItem("jwt");
          const response = await fetch(`${API_URL}/dashboard/`, {
            headers: { token: jwt }
          });
          const parseRes = await response.json();
          console.log(parseRes);

          setNom(parseRes.nom);
         // setEmail(parseRes.email);
        }
          catch (err) {
              console.error(err.message);

            }
          }; 
   

  useEffect(() => {

    getName();
  });




  const userLogout = () => {
    try {
      
      AsyncStorage.removeItem("jwt");
      Alert.alert("Logout Success!"); 
      navigation.navigate('SplashScreen');
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  // const logout = () => {
    
  //   axios.get(`${API_URL}/auth/logout`, {
  //     headers: { "Authorization": `Bearer ${jwtToken}` },

  //   },
  //   ).then(res => {
  //     console.log(res.data);
      
  //     Asyncstorage.removeItem("jwt");
  //     navigation.navigate("SignIn");

  //   }).catch(e => {
  //     console.log(`lohout error ${e}`);
 
  //   });



    return (

      <View style={styles.container}>

        <Text>  welcome {nom} </Text>
        <Text>  welcome {email} </Text>
        <Button title="Logout"
          onPress={userLogout}
          color="red" />


      </View>


    );
  };

export default HomeScreens
const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});