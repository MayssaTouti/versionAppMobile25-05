import React, {useState, useEffect} from 'react'; 
import {  createNativeStackNavigator} from '@react-navigation/native-stack'; 
import SignupScreen from '../src/screens/SignUpScreen/SingUpScreen'; 
import SingnInScreen from '../src/screens/SignInScreen/SingnInScreen';
import OnboardingScreen from '../src/screens/OnboardingScreen'; 
import {  View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import { StackActions } from '@react-navigation/native';

const Stack = createNativeStackNavigator(); 

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;
useEffect(() => {

AsyncStorage.getItem('alreadyLaunched').then((value) => {
   if (value == null ){
       AsyncStorage.setItem('alreadyLaunched','true' ); 
       setIsFirstLaunch(true); 

   }else {
       setIsFirstLaunch(false); 
   }

}); 


}, []); 
if (isFirstLaunch == null ){
    return null ; 
}else if (isFirstLaunch == true ){
    routeName ='Onboarding'; 
}else {
    routeName = 'Login'; 
}

    return (
        <Stack.Navigator initialRouteName={routeName}>

        <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{ header: () => null }}/>

            <Stack.Screen
                name="Login"
                component={SignupScreen}
                options={{ header: () => null }}   />
            <Stack.Screen
                name="Signup"
                component={SingnInScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerStyle: {
                        backgroundColor: '#f9fafd',
                        shadowColor: '#f9fafd',
                        elevation: 0,
                    },
                    headerLeft: () => (
                        <View style={{marginLeft: 10}}>
                           <FontAwesome.Button
                           name='long-arrow-left'
                           size={25}
                                backgroundColor="#f9fafd"
                                color="#333"
                                onPress={() => navigation.navigate('Login')
                                } />

                        </View>    
                    ), 
                            })}
                            />


        </Stack.Navigator>
  ); 
}; 

export default AuthStack
