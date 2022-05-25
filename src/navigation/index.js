import React from 'react';

import SearchComponent from '../testFetch/SearchComponent';
//importation des screens 
import ForgetPassword from '../screens/ForgetPassword';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmSignUp from '../screens/ConfirmSignUp';
import ServerExample from '../ServerExample'
import HomeScreens from '../screens/HomeScreen/index';
import Welcome from '../screens/Welcome';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screens/OnboardingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
//import OnboardingScreen from 
import SplashScreen from '../screens/SplashScreen';
import SignUpScr from '../screens/SignUpScr';
import SignInScr from '../screens/SignInScr';

import DrawerNavigator from '../screens/DrawerNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import MainTabScreen from '../screens/MainTabScreen';

const Stack = createNativeStackNavigator();



//import { createDrawerNavigator } from '@react-navigation/drawer';


//const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (

//     <Drawer.Navigator>
//       <Drawer.Screen name="welcome" component={Welcome} />

//     </Drawer.Navigator>


//   )
// }


const Navigation = () => {

  // const {userInfo} = useContext(AuthContext); 



  const [defaultRoute, setDefaultRoute] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem("jwt")
      .then((jwt) => {
        if (jwt != null)
          setDefaultRoute("MainTabScreen")
        else
          setDefaultRoute("splash")
      });
  }, [])

  if (!defaultRoute) return <></>;
  return (
<NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={defaultRoute} >


        <Stack.Screen name="Home" component={HomeScreens} />
        <Stack.Screen name="SignInScr" component={SignInScr} />
        <Stack.Screen name="SignUpScr" component={SignUpScr} />

        <Stack.Screen name="ForgetPass" component={ForgetPassword} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="Onbording" component={OnboardingScreen} />

        <Stack.Screen name="server" component={ServerExample} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmSignUp} />
        <Stack.Screen name="serach" component={SearchComponent} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="settings" component={Settings} />
        <Stack.Screen name="splash" component={SplashScreen} />

    
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="MainTabScreen" component={MainTabScreen} />
       
        <Stack.Screen name="drawerNavigator" component={DrawerNavigator} />


      </Stack.Navigator>

      </NavigationContainer>


  );
};

export default Navigation; 
