import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { ScrollView } from 'react-native';


const ConfirmSignUp = () => {
 
     const navigation = useNavigation();  
   
    const [code , setCode] = useState('');

    const onConfirmPressed = () => {
      navigation.navigate('Home'); 
    };
   

    const onSignInPressed = () => {
        navigation.navigate('SignIn'); 
    };
    const onResendPressed = () => {
        console.warn('onSignUpPressed');
    };

  




    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}> Confirm your Email  </Text>
                <CustomInput
                    iconType="user"
                    value={code}
                    setValue={setCode}
                    placeholder="Enter Your Confirmation code " />
              
                <CustomButton
                    text="Confirm"
                    onPress={onConfirmPressed} />
           
                <CustomButton
                    text="Resend code"
                    onPress={onResendPressed}
                    type="SECONDARY" />

                <CustomButton
                    text="Back to Sign in? Sign In  "
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
        color: '#FDBB75'
        
    }
});
export default ConfirmSignUp;


