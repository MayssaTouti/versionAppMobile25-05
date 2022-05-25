import React from 'react'
import {StyleSheet, 
Dimensions, 
ScrollView, 
TouchableOpacity, 
Text , 
View 
} from 'react-native' 
const OPTIONS = ['red', 'green', 'blue', 'white', 'black', 'purple', 'yellow']
const WIDTH = Dimensions.get('window').height; 
const HEIGHT = Dimensions.get('window').height;

const onPressItem = (option) => {

}

const option = OPTIONS.map((item, index) => {
    return (
        <TouchableOpacity style={styles.option}
        key={index}
        onPress={() => onPressItem(option)}
        >
<Tex style={styles.Text}>
    {item}
    </Tex>
        </TouchableOpacity>
    )
})

const ModalPicker = (props) => {
return(
  <TouchableOpacity
  onPress={() => props.changeModelVisibility(false)}
  style= {styles.container}
  >
<View style={[styles.modal, {
    width: WIDTH -20 , 
    height: HEIGHT /2 
}]}>
<ScrollView>
    {option}
</ScrollView>

</View>


  </TouchableOpacity>




)

}
const styles= StyleSheet.create({
container: {
   flex:1, 
   alignItems: 'center', 
   justifyContent: 'center', 
}, 
modal : {
backgroundColor: 'white', 
borderRadius: 10
}, option :  {
    alignItems: 'flex'

},
text : {
margin:20, 
fontSize:20, 
fontWeight: 'bold'
}




}); 

export  {ModalPicker}