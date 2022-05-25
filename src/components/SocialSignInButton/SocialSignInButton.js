import React from 'react'
import CustomButton from '../CustomButton';
const SocialSignInButton = () => {
    const onSignInFacebook = () => {
        console.warn('onSignInFacebook');
    };
    const onSignInGoogle = () => {
        console.warn('onSignInGoogle');
    }; 
  return (
   <>
          <CustomButton
              text="Sign In with Facebook"
              fgColor="#4765A9"
              bgColor="#E7EAF4"
              onPress={onSignInFacebook} />
          <CustomButton
              text="Sign In with Google"
              bgColor="#FAE9EA"
              fgColor="#DD4D44"
              onPress={onSignInGoogle} />


   </>
  ); 
}; 

export default SocialSignInButton; 
