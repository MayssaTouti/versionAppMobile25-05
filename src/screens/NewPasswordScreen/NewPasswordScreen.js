import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { ScrollView } from 'react-native';

const NewPasswordScreen = () => {
 
 
   
    const [code , setCode] = useState('');
    const [ newPassword, setNewPasswor] = useState(''); 

   

 
    const onSignInPress = () => {
        console.warn('onSignInPress');
    };
    const onSendPressed = () => {
        console.warn('onSendPressed'); 
    
    }; 
    const  onSubmitPressed = () => {
        console.warn('onSubmitPressed'); 
    }; 
  




    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password </Text>
                <CustomInput
                    placeholder="Code"
                    value={code}
                    setValue={setCode}
                  />
                <CustomInput
                    placeholder="Enter your new password"
                    value={newPassword}
                    setValue={setNewPasswor}
                />
              
                <CustomButton
                    text="Submit"
                    onPress={onSubmitPressed} />
           
                <CustomButton
                    text="Back to Sign in"
                    onPress={onSignInPress}
                    type="SECONDARY" />

                <CustomButton
                    text="Send"
                    onPress={onSendPressed}
                    type="TERTIARY" 
                    />
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
export default NewPasswordScreen;


