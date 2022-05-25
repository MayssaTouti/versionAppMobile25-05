import React, {useEffect, useState} from "react";
import { SafeAreaView , StatusBar , Text, View } from 'react-native'; 
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import TextRecognition from 'react-native-text-recognition';



const ScannDoc = () => {
    const [image , setImage] = useState(null); 
    const [text , setText] = useState(null); 
    useEffect(() => {
        launchImageLibrary({}, setImage); 

    }, []);

    useEffect(() => { 
   (    async () => {
        if(image){
            const result = await TextRecognition.recognize(image.assets[0].uri);
            console.log(image); 
            setText(result); 
         }
       } )(); 


   
  


    },[image]); 


return(

<SafeAreaView>
  <StatusBar />
  <View>

      <Text> Text Recognition </Text>
      {
          text ? 
          <Text>
       {text}
      </Text> : null}
  </View>
</SafeAreaView>


)




}
export default ScannDoc