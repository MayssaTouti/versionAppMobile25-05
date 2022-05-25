
import { View, Text, Button, TouchableOpacity,  StyleSheet} from 'react-native'; 
import { windowHeight, windowWidth } from '../utils/Dimentions';
import React from 'react'

const ForumButton = ({buttonTitle, ...rest}) => {
  return (
      <TouchableOpacity style={styles.buttonContainer} {...rest}>
  <Text style={styles.buttonText}> {buttonTitle} </Text>

      </TouchableOpacity>

  );
}; 

export default ForumButton; 

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
    },
});


