import React, { createContext, useState } from 'react'
import { API_URL } from '../../utils/Env';
import axios from 'axios';
export const AuthContext = createContext(); 




export const AuthProvider = ({children}) => {

  const [userInfo, setUserInfo] = useState({}); 
  const [isLoading , setIsLoading ] = useState(false); 


  //SingUp function 
//     const resgister = (nom, email, password  ) => {
//     setIsLoading(true); 

//         axios.post(API_URL + "/auth/register", { email, nom, password })
//     .then(res => {
//     let userInfo = res.data ; 
//     setUserInfo(userInfo); 
//         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo)); 
//       setIsLoading(false); 


//     console.log(userInfo); 
//     }).catch(e => {
//         console.log(`register error ${e}`); 
//       setIsLoading(false);
//       //  Alert.alert('Registration error '); 
//     });


// } ; 

// login function 

// const login= (email, password) => {
//  //setIsLoading(true); 
//   axios.post(API_URL + "/auth/login", { email , password })
//   .then(res => {
//     let userInfo = res.data; 
//     AsyncStorage.setItem("jwt", res.data.jwtToken);
//      navigation.navigate('Home');
//     setUserInfo(userInfo); 
//     //AsyncStorage.setItem('userInfo', JSON.stringify(userInfo)); 
//    // setIsLoading(false); 
//     console.log(userInfo); 
//   }).catch((err) => {
//                if (err.response && err.response.status == 401) {
//                    Alert.alert("Incorrect email or password");
//                    return
//               }
//               console.log(err);
//               Alert.alert('Login failed')
//            })
//     };




  return (

    <AuthContext.Provider
      value={{
        userInfo,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  ); 

 

    
    // localStorage.removeItem('userInfo');
    // setIsLoggedin(false);
  }; 





