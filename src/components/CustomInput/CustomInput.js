import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
       <TextInput 
       value={value}
       style={styles.textInput}
       onChangeText={setValue}
       placeholder={placeholder}
        secureTextEntry={secureTextEntry}

        />
  
  ); 
}; 

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
      

}); 


export default CustomInput; 
