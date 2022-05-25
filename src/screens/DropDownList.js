import React, {useState} from 'react'
import {View, Text, 
    SafeAreaView, 
StyleSheet, 
ImageBackground,
Modal, 
TouchableOpacity
} from "react-native" 
import axios from 'axios';
import { API_URL } from '../../utils/Env'
import { bool } from 'prop-types';
const image = {uri : '../../assests/bacground'}; 
import { ModalPicker } from '../components/ModalPicker';


const changeModelVisibility = (bool) => {
  setisModalVisible(bool)  
}




const DropDownList = () => {
const [chooseData , setchooseData] = useState('Select Item.... '); 
const [isModalVisible, setisModalVisible] = useState(false); 
    return (
<View style={styles.container}>
    <ImageBackground source={require('../../assests/bacground.png')} resizeMode="cover" style={styles.image}>
   <TouchableOpacity
   onPress={() => changeModelVisibility(true) }
   style={styles.touchableOpcity}
   >
       
       
<Text style={styles.text}>{chooseData} </Text>

   </TouchableOpacity>
 <Modal 
 transparent={true}
animationType='fade'
visibl= {isModalVisible}  
nRequestClose={() =>changeModelVisibility(false)} 
 >
<ModalPicker
changeModelVisibility={changeModelVisibility}
/>
</Modal>
   </ImageBackground>
</View>
      


)
}
export default DropDownList 



const styles = StyleSheet.create({
    container: {
      flex: 1 , 
      
    },
    touchableOpcity : { 
    alignSelf: 'stretch', 
    paddingHorizontal:20

    }, 
    text :{
        color: "white",
        fontSize: 30,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }, 
    image: {
        flex: 1,
        justifyContent: "center"
      },



}); 