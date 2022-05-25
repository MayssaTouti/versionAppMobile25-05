import React from 'react'
import HomeScreens from './HomeScreen/index'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Profile from './Profile';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import ProfileScreen from './ProfileScreen';
const Tab= createMaterialBottomTabNavigator(); 
import ListOfDocument from './ListOfDocument';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme, Avatar } from 'react-native-paper';
import DropDownList from './DropDownList'; 
import { View } from 'react-native-animatable';
import ProfileUser from './ProfileUser';
import DrownPicker from './DrownPicker';
import SearchTiers from './SearchTiers'; 
import CreateModel from './CreateModel';
import ScannDoc from './ScannDoc';
import EditProfile from './EditProfile';
import TestOfDoc from './TestOfDoc';
import HomeSearchTiers from '../components/HomeSearchTiers';
//const Tab= createMaterialBottomTabNavigator(); 
const ProfileStack = createStackNavigator();



const MainTabScreen = () => (



    <Tab.Navigator  
       initialRouteName="Home"
        activeColor="#42B196"
        barStyle={{ backgroundColor: '#42B196' }}
>
<Tab.Screen 
name="Home"
component={HomeScreens}
options={{
tabBarLabel: 'Home', 
    tabBarColor: '#fff',
tabBarIcon : ({color}) => (
    <Icon name='home'  color={color} size={26} />
),}}/>

<Tab.Screen
  name='ProfileScreen'
component={ProfileUser}
options={{
tabBarLabel: 'Profile', 
    tabBarColor: '#fff',
tabBarIcon:({color}) => (
        <Icon name="user" color={color} size={26} />

),}} />
 <Tab.Screen
              name="DrownList"
              component={TestOfDoc}
              options={{
                  tabBarLabel: 'DrownList',
                  tabBarColor: '#fff',
                  tabBarIcon: ({ color }) => (
                    <Icon name="list-alt" color={color} size={24} />
                  ),
              }}
          />
        <Tab.Screen
            name="ScannDocment"
            component={CreateModel}
            options={{
                tabBarLabel: 'Scan documents ',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <Icon name="folder-open-o" color={color} size={24} />
                ),
            }}
        />
        
      <Tab.Screen
            name="listDocument"
            component={EditProfile}
            options={{
                tabBarLabel: 'List documents ',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <Icon name="pencil-square" color={color} size={24} />
                ),
            }}
        />         
      {/* <Tab.Screen
            name="DropDownList"
            component={DropDownList}
            options={{
                tabBarLabel: 'List tiers ',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <Icon name="list-alt" color={color} size={24} />
                ),
            }}
        /> */}

        

    </Tab.Navigator>
  
); 


export default MainTabScreen;
