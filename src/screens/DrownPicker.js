import React, {useState, useEffect} from 'react'
import { View , Text, StatusBar, Dimensions, TouchableOpacity , StyleSheet, ImageBackground} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'
import { API_URL } from '../../utils/Env'


export default function DrownPicker() {

    const[listofTiers , setListOftiers] = useState([]); 
    const [pickerValue , setPickerValue] = useState("Select Item ...."); 

// functio get all tiers 

const getListofTiers = async () => {



  try{

     const response = await fetch (`${API_URL}/type`); 
      const jsonData = await response.json(); 
      setListOftiers(jsonData); 
     

  }catch(err){
console.log(err.message); 
  }



}

useEffect(() => {

getListofTiers(); 
}, []); 





return (
<View style={styles.container}>
  <View  style={styles.header}>
  <ImageBackground source={require('../../assests/bacground.png')} resizeMode="cover" style={styles.image}>
   /</ImageBackground> 

  </View>



<View style={styles.footer}>

<Picker 
style={styles.piker}
selectedValue={pickerValue}
onValueChange={(itemValue)  => setPickerValue(itemValue)}
>
{
  listofTiers.map((tier, myIndex) => (
<Picker.Item   key={myIndex} label={tier.nametier +'-'+tier.pays}
value={myIndex} />



  ))
}


</Picker>

</View>






</View>



); 




}
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles= StyleSheet.create({
 container: {
 flex:1, 
//  justifyContent: 'center', 
//  alignItems: "center"
}, 
piker : {
width: 400, 
height : 30, 
borderColor : "blue", 
color: "white",
fontSize: 30,
margin:10,
lineHeight: 84,
fontWeight: "bold",
backgroundColor: "#000000c0",
textAlign: "center", 

} , 
   image: {
    flex: 1,
    justifyContent: "center"
  },header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
},
footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
},
logo: {
    width: height_logo,
    height: height_logo
},
title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold'
},
text: {
    color: 'grey',
    marginTop: 5
},
button: {
    alignItems: 'flex-end',
    marginTop: 30
},
signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
},
textSign: {
    color: 'white',
    fontWeight: 'bold'
},
thumbnail: {
    width: 270,
    height: 59,
}



}); 