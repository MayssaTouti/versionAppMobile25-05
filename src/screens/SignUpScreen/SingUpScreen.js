import React, { useEffect, useState } from 'react'
import { View, Text , StyleSheet, Alert } from 'react-native'
import { useWindowDimensions } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SocialSignInButton from '../../components/SocialSignInButton';
import Navigation from '../../navigation';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../../../utils/Env';
import axios from "axios"

const SingUpScreen = () => {

    const navigation = useNavigation(); 


    const { height } = useWindowDimensions();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(''); 
    const [passwordRepeat, setPasswordRepeat] = useState(''); 

     const onPrivacyPressed = () => {
         console.warn('onPrivacyPressed'); 

     }; 
     const onTermsOfUserPressed = () => {
         console.warn('onTermsOfUserPressed'); 
         
     }; 

    const onSignInPressed = () => {
        
        navigation.navigate('SignUp'); 
    }; 
    const onRegisterPressed = () => {
        if(password != passwordRepeat){
            Alert.alert("Password and password confirmation don't match");
            return;
        }
        axios.post(API_URL  + "/auth/register", { email, nom : username, password })
            .then(() => {
                navigation.navigate('SignIn'); 
            }).catch((err) => {
                if(err.response && err.response.status == 401){
                    Alert.alert('User exists already')
                    return;
                }
                console.log(err);
                Alert.alert("Registration error");
            })

    }; 


  

    return (
    <ScrollView>
        <View style={styles.root}>
           <Text style={styles.title}> Create Account </Text>
            <CustomInput
                value={username}
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
               setValue={setUsername}
                placeholder="Username" />
                <CustomInput
                    value={email}
                    iconType="email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    setValue={setEmail}
                    placeholder="email-address" />
            <CustomInput
                placeholder="password"
                value={password}
                setValue={setPassword}
                iconType="lock" 
                secureTextEntry={true}

            />
                <CustomInput
                    placeholder="Repeat password"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    iconType="lock"
                    secureTextEntry={true}

                />
            <CustomButton
             text="Register"
              onPress={onRegisterPressed} />
                <Text style={styles.text}>By registering, 
                you confirm that you accept our {''} <Text style={styles.link} onPress={onTermsOfUserPressed} >Terms of Use </Text>  and {''}
                 <Text style={styles.link}  onPress={onPrivacyPressed} > Privacy Policy . </Text>
     </Text>         
 <SocialSignInButton /> 
        
          <CustomButton 
          text="Have an account? Sign In  "
                    onPress={onSignInPressed}
                type="TERTIARY" />
        </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,

    },
    logo: {
        width: '70%',
        paddingLeft: 150,
        maxWidth: 500,
        height: 300,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    }, 
    link: {
        color: '#FDBB75', 
    
    }
});
export default SingUpScreen;


