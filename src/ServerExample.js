import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'



class ServerExample extends Component {

    constructor(props) {
        super(props)
        this.state = {
            response: "click to connect server "
        }
    }
    connect = async () => {
        const URL = 'http://192.168.43.247:8080/roles';
       try {
      const  response = await fetch (URL); 
      if (response.status != 200){
          throw new Error("somthing is wrong"); 
      }
    const responseText =await response.text(); 
    this.setState({response: responseText}); 

       } catch (error) {
           alert.alert(error.message); 

       }


    }


    render() {
        return (

            <View>
                <Text style={styles.title}>
                    {this.state.response}
                </Text>
                <Button title='connect'
                    onPress={this.connect}
                ></Button>
            </View>
        );
    }

}
export default ServerExample
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        margin: 10,
        textAlign: "center"
    }

}); 