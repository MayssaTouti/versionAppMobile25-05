/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'

import React from 'react';
import MainTabScreen from './src/screens/MainTabScreen';
import { StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './src/screens/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigation from './src/navigation';
import DrawerNavigator from './src/screens/DrawerNavigator';
const Drawer = createDrawerNavigator();

const App = () => {
return (
  // <SafeAreaView style={styles.root}>

  //    <Navigation />
 
  // </SafeAreaView>);



 <NavigationContainer>

<DrawerNavigator />

</NavigationContainer> 

     




    // <NavigationContainer>
    //   <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
    //   <Drawer.Screen name="tabScreen" component={MainTabScreen} />
  

    //   </Drawer.Navigator>

    // </NavigationContainer>

); 

};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }

});


export default App;
