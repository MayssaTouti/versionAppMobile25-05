import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useWindowDimensions } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';
const ForgetPassword = () => {
    const navigation = useNavigation(); 
 
 
   
    const [username , setUserName] = useState('');

    const onSignInPress = () => {
        console.warn('SignIn');
    };
    const onSendPressed = () => {
        console.warn('NewPassword'); 
    
    }
  




    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password </Text>
                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUserName}
                  />
              
                <CustomButton
                    text="Send"
                    onPress={onSendPressed} />
           
                <CustomButton
                    text="Back to Sign in"
                    onPress={onSignInPress}
                    type="SECONDARY" />

              
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
        color: '#FDBB75'
        
    }
});
export default ForgetPassword;


