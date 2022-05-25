import React from 'react'
import { View } from 'react-native'
import { 
    LeftIcon, 
    StyledInputLabel, 
    StyledTextInput, 
    RightIcon
} from "../components/Style"; 
import { Ionicons } from 'react-native-vector-icons'
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {

  return (
    <View>
      <LeftIcon>


      </LeftIcon>
      <StyledInputLabel>
          
      </StyledInputLabel>

    </View>
  )
}

export default MyTextInput
