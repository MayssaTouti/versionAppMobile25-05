import React, { useState, useContext, useEffect } from 'react';
import { View, SafeAreaView, Alert  , StyleSheet , Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EditProfile from './EditProfile';
import { Avatar,
    Title,
    Caption,
    Text,
    Button,
    TouchableRipple
} from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from "../../utils/Env";
import { useNavigation } from '@react-navigation/native';

 
const ProfileScreen = () => {
  //  const navigation=useNavigation(); 
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [utilisateur, setUser] = useState([]);
// function get data from user connected 

const navigation= useNavigation();
 
 


async function getName() {

    try { 
        const jwt = await AsyncStorage.getItem('jwt'); 
        const response = await fetch (`${API_URL}/dashboard/`, {
            headers: { token: jwt }
        }); 
        const parseRes = await response.json();
       // console.log(parseRes);
          setUser(parseRes); 

    }  catch (err) {
        console.error(err.message);

      }}; 
      useEffect(() => {

        getName();
      }, []);
    
    
      const changeDirection = () => {
          navigation.navigate('EditProfile')
      }




    return(
<SafeAreaView style={styles.container}>
<View  style={styles.userInfoSection}>
<View style={{flexDirection : 'row', marginTop:20}}>

<Image
  source={require('../../assests/user_boy.png')}
size={10}
/>
<View style={{marginLeft:20}}>
<Title style={[styles.title , {
marginTop:15, 
marginBottom:5
    }]   
    }> User Name : {nom} </Title>
    <Caption style={styles.caption}> </Caption>
    <Icon.Button
                          name="user-plus"
                          size={20}
                          color="#777777"
                          backgroundColor="white"
                          onPress={changeDirection}
                      />
  </View>
</View>
</View>
<View style={styles.userInfoSection}>

<View style={styles.row}>
 
                  <Icon name="user" color="#777777" size={20} />
                  <Text style={{ color: "#777777", marginLeft: 20}}> Use Name : {nom} </Text>
              </View>
              <View style={styles.row}>
                  <Icon name="envelope" color="#777777" size={20} />
                  <Text style={{ color: "#777777", marginLeft: 20}}> User Email : {email} </Text>
              </View>
              <View style={styles.row}>
                  <Icon name="expeditedssl" color="#777777" size={20} />
                  <Text style={{ color: "#777777", marginLeft: 20}}> password : { password}</Text>
              </View>

</View>

</SafeAreaView>


    )



}
export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 14,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});