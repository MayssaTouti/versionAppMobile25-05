
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View ,Image,Linking,Platform,Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Title,Card,Button, Avatar} from 'react-native-paper'
import Icon  from 'react-native-vector-icons/FontAwesome';
import { API_URL } from '../../utils/Env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const ProfileUser = () => {





    const navigation= useNavigation();
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 //   const [utilisateur, setUser] = useState([]);
// function get data from user connected 

//function getData for use 

async function getName() {

  try {
    const jwt = await AsyncStorage.getItem("jwt");
    const response = await fetch(`${API_URL}/dashboard/`, {
      headers: { token: jwt }
    });
    const parseRes = await response.json();
    console.log(parseRes);

    setNom(parseRes.nom);
   setEmail(parseRes.email);
   setPassword(parseRes.password);
  }
    catch (err) {
        console.error(err.message);

      }
    }; 


useEffect(() => {

getName();
}, []);
    
      const changeDirection = () => {
        navigation.navigate('hee ')
    }





return(
<View style={styles.root}>

<LinearGradient
         colors={["#FFFFF0","#A9A9A9"]}
       style={{height:"20%", marginTop: 5}}
        />

<View style={{alignItems:"center"}}>

<Image
  source={require('../../assests/user_boy.png')}
  style={{width:140,height:140,borderRadius:140/2,marginTop:-50}}
/>
</View>
<View style={{alignItems: "center"}}>
    <Title> User Name </Title>
    <Text style={{fontSize:15}}> {nom}   </Text>
</View>

<Card style={styles.mycard}>
  <View style={styles.cardContent}>
  <Icon name="user" color="#777777" size={20} />
  <Text style={styles.mytext}> {nom} </Text>
  </View>
</Card>


<Card style={styles.mycard}>
  <View style={styles.cardContent}>
  <Icon name="envelope" color="#777777" size={20} />
  <Text style={styles.mytext}> {email} </Text>
  </View>
</Card>


<Card style={styles.mycard}>
  <View style={styles.cardContent}>
  <Icon name="expeditedssl" color="#777777" size={20} />
  <Text style={styles.mytext}> {password} </Text>
  </View>
</Card>

<View style={{flexDirection:"row",justifyContent:"space-around",padding:10}}>
<Button icon="pencil" 
mode='contained'
 theme={theme}
    onPress={changeDirection}>
    Edit Profile 
  </Button>

</View>

</View>

)



}

const theme = {
    colors:{
        primary:"#006aff"
    }
}


const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        margin:3
    },
cardContent:{
    flexDirection:"row",
    padding:8
},
mytext:{
    fontSize:15, 
    marginTop:3,
    marginLeft:5
}
})
export default ProfileUser