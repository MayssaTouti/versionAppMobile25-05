import React from "react";
import { Text , View } from "react-native"






const getTiers = async  type => 
{
    if (!type)
    try{

        const response = await fetch (`${API_URL}/type/${type}`); 
         const jsonData = await response.json(); 
         setListOftiers(jsonData); 
        
     }catch(err){
   console.log(err.message); 
     }; 
   
   useEffect(() => {
   
   getTiers(); 
   }, []);

}
export default getTiers