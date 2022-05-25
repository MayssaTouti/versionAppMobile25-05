import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Alert } from 'react-native'
import { useWindowDimensions } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SocialSignInButton from '../../components/SocialSignInButton';
import axios from 'axios';
import { API_URL } from '../../../utils/Env';
const SingnInScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation(); 


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const onSignUpPressed = () => {
        console.warn('onSignUpPressed'); 
        
        navigation.navigate('SignUp'); 
    }; 


    const onSignInPressed = () => {
        console.warn(" Sign In "); 
        // validate user
        axios.post(API_URL + "/auth/login", { email : username, password })
            .then((res) => {
                AsyncStorage.setItem("jwt", res.data.jwtToken);
                navigation.navigate('Home'); 
            }).catch((err) => {
                if(err.response && err.response.status == 401){
                    Alert.alert("Incorrect email or password");
                    return
                }
                console.log(err);
                Alert.alert('Login failed')
            })
    }; 
    const onForgetPassword = () => {
        console.warn('onForgetPassword'); 
        navigation.navigate("ForgetPass"); 
    }; 

    return (
    <ScrollView>
        <View>
               
           
            <CustomInput
                value={username}
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                setValue={setUsername}
                placeholder="Email" />
            <CustomInput
                placeholder="password"
                value={password}
                setValue={setPassword}
                iconType="lock" 
                secureTextEntry={true}

            />
            <CustomButton
             text="Sign In"
             onPress={onSignInPressed} />

            <CustomButton
             text="Forget Password?" 
             bgColor="#E7EAF4"
             onPress={onForgetPassword} 
             type="TERTIARY"
            />
    <SocialSignInButton />
          <CustomButton 
          text="Dont have an account? create "
          onPress={onSignUpPressed}
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
        margin:10 , 
    }
});
export default SingnInScreen;


