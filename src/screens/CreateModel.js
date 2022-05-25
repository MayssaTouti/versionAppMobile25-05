import React,{useState , useEffect} from 'react';
import { StyleSheet, 
  Text,
  Modal,
   ImageBackground,
   SafeAreaView ,
   Image,
   View,Alert,KeyboardAvoidingView , 
  ScrollView,
  TouchableOpacity, LinearGradient} from 'react-native';
import {TextInput,Button} from 'react-native-paper'
import ImageCropPicker , { openPicker }from 'react-native-image-crop-picker';
import axios from 'axios';
import imgPlaceHolder from '../../assests/user_boy.png'; 
import { API_URL } from '../../utils/Env';
import { Picker } from '@react-native-picker/picker';

import { Caption, Paragraph, Surface, Title } from 'react-native-paper'; 
const CreateModel = ({navigation, route}) => {
 
//list of type 
const [isLoading, setLoading] = useState(true);
const [listofTiers, setListOftiers] = useState([]);
const [pickerValue, setPickerValue] = useState("Select Item ....");
const [listTypeMode , setListTypeModel] = useState([]); 

const getAllTiers = async () => {

try {
  const response = await fetch(`${API_URL}/TypeTier`);
  const jsonData = await response.json();
  setListOftiers(jsonData);
} catch (err) {
  console.log(err.message);
}finally{
  setLoading(false); 
}}
useEffect(() => {

  getAllTiers(); 
}, []
); 


  //import photo from galleri
const imagePick = () => {
   ImageCropPicker.openPicker({
    width: 400,
    height: 400,
    cropping: true

   }).then(image => {
     console.log(image); 
     setModeleDoc(image.path); 
     this.bs.current.snapTo(1); 
   });

}
// take photo 
const takePhotoFromCamera =() => {
  ImageCropPicker.openCamera({

  compressImageMaxHeight: 300, 
  compressImageMaxWidth: 300, 
  cropping: true, 
  compressImageQuality : 0.7
  }).then(image => {
    console.log(image); 
    setModeleDoc(image.path); 
    this.bs.current.snapTo(1); 
  }); 
}







    const [name, setName] = useState(null);
    const [idtype, setIdtype] = useState(null);
    const [codetier, setCodeTier] = useState(null)
    const [modal, setModal] = useState(false);  
    const [modeleDoc, setModeleDoc ] = useState(null); 
  //  const [image, setImage] = useState(null);
//function add model 


const addMode = () => {
  setLoading(true); 
axios.post(API_URL+"/addModel", {
  name, 
  idtype, 
  codetier

}).then(res => res.json()).
then((data) => {
  Alert.alert(`${data.name} is updated successfuly`)
}).
catch((err)  => {
  if (err.response && err.response.status == 401) {
    Alert.alert("someting went wrong")
    return; 
  }
}); }; 
//app.get("/typeModele", async (req, res) => {

  const getAllModele = async () => {

    try {
      const response = await fetch(`${API_URL}/typeModele`);
      const jsonData = await response.json();
      setListTypeModel(jsonData);
    } catch (err) {
      console.log(err.message);
    }finally{
      setLoading(false); 
    }}
    useEffect(() => {
    
      getAllModele(); 
    }, []
    ); 
    









return(
<ScrollView>  
<View style={styles.root}>

<View style={styles.textContainer}>
  <Title> Add Model </Title>
  
  
  </View>
    {/* Description model  */}
   <TextInput
   label="Description"
   style={styles.inputStyle}
   value={name}
   mode='outlined'
   onChangeText={text => setName(text)}/>
    {/* type model  */}
  {/* <TextInput
   label="document type"
   style={styles.inputStyle}
   value={idtype}
   mode='outlined'
   onChangeText={text => setIdtype(text)}/> */}

<Text>Type of document </Text> 

   <Picker
   style={styles.piker}
   selectedValue={idtype}
   onValueChange={text => setIdtype(text)}>

{
  listofTiers.map((tier, MyIndex) => (
   <Picker.Item key={MyIndex} label={tier.nametier + '-' + tier.type}
   value={MyIndex} />
  ))
}


   </Picker>
   <Text> Tier of doculent  </Text> 
   <Picker
   style={styles.piker}
   selectedValue={codetier}
   onValueChange={text => setCodeTier(text)}>

{
  listTypeMode.map((type, MyIndex) => (
   <Picker.Item key={MyIndex} label={type.nametype}
   value={MyIndex} />
  ))
}
</Picker>



    {/* image model  */}
     {/* <TextInput
   label="image of document "
   style={styles.inputStyle}
   value={image}
   mode='outlined'
   onChangeText={text => setImage(text)}/> */}



     {/* <TextInput
   label="tier of document"
   style={styles.inputStyle}
   value={codetier}
   mode='outlined'
   onChangeText={text => setCodeTier(text)}/> */}
<Text> Modele  of document </Text> 
  <Image style={styles.image} 
  source={modeleDoc ? {uri : modeleDoc} :imgPlaceHolder }
/>
    <Button  
    style={styles.appButtonContainer}
    onPress={() => setModal(true)}>
  add model 
  </Button>
  <Button  
    style={styles.appButtonContainer}
    onPress={addMode}>
    Save Data  
  </Button>
 <Modal
 animationType='slide'
 transparent={true}
 visible={modal}
 onRequestClose={() => {
     setModal(false)
 }}
 >
<View style={styles.modalView}>
<ImageBackground source={require('../../assests/bacground.png')} resizeMode="cover" >
    <View style={styles.modalButtonView}>
            <Button 
             mode="contained" onPress={imagePick}>
            Upload image 
        </Button>
        
        <Button 
        mode="contained"
        onPress={takePhotoFromCamera}>
          Camera
        </Button>
        <Button  
          theme={theme} 
        onPress={() => setModal(false)}>
          cancel 
        </Button>
    </View>
    </ImageBackground>



</View>

 </Modal>

{/*  
  <TouchableOpacity style={styles.commandButton} onPress={ () => console.log("Press Me ")} >
                    <Text style={styles.panelButtonTitle} >Submit </Text>

                </TouchableOpacity> */}



</View>

</ScrollView>
//camera-retro


); 

}; 

export default CreateModel
const theme = {
    colors:{
        primary:"#006aff"
    }
}; 
const styles=StyleSheet.create({
    root:{
       flex:1,
    },
    inputStyle:{
        margin:5
    },
    modalView:{
        position:"absolute",
        bottom:2,
        height: "15%", 
        width:"100%",
       

    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    }, 
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },   
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    }, 
    appButtonContainer: {
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 10,
          paddingHorizontal: 12, 
        textShadowColor: "white", 
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }, 
      profileContainer: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
      width: 400,
      height: 300,
      margin: 4, 
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 3,
  },   
   textContainer: {
    alignItems: 'center',
},
piker: {
  width: 400,
  height: 30,
  borderColor: "blue",
  color: "white",
  fontSize: 30,
  margin: 10,
  lineHeight: 84,
  fontWeight: "bold",
  backgroundColor: "#000000c0",
  textAlign: "center",

}
});