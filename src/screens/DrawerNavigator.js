import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./MainTabScreen"; 
import  { DrawerContent} from "./DrawerContent"


const Drawer = createDrawerNavigator();



const DrawerNavigator = () => {
return(

    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />  }>
   <Drawer.Screen name="tabScreen" component={MainTabScreen} />



    </Drawer.Navigator>




)


}

export default DrawerNavigator