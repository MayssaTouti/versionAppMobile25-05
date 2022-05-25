import React from 'react'
import {  Text, StyleSheet } from 'react-native'
import { Pressable } from 'react-native';

const CustomButton = ({ type = "PRIMARY", bgColor, fgColor, onPress, text }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container,
            styles['container_${type}'],
            bgColor ? { backgroundColor: bgColor } : {},

            ]}>
            <Text
                style={[styles.text,
                styles['text_${type}'],
                fgColor ? { color: fgColor } : {},
                ]}> {text} </Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 15,
        justifyContent: 'center',
        borderRadius: 5,

        marginVertical: 6,
        backgroundColor: '#3B71F3',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        height: 60,
    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3'
    },
    container_TERTIARY: {},
    container_SECONDARY: {
      borderColor: '#3B71F3', 
      borderWidth: 2,
    }, 
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_TERTIARY: {
        color: 'gray'
    }, 
    text_SECONDARY: {
        color: '#3B71F3', 
    }

    
});

export default CustomButton
