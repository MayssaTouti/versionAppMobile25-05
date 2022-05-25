import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    Alert
} from 'react-native';

import { useRoute } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { API_URL } from '../../utils/Env';
import ImageCropPicker from 'react-native-image-crop-picker';
import { setPath } from 'react-native-reanimated/lib/types/lib/reanimated2/animation/styleAnimation';
import axios from 'axios';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
const EditProfile = () => {

    const route = useRoute(); 
    const { colors } = useTheme();
    const [image, setImage] = useState('https://static.vecteezy.com/ti/vecteur-libre/t2/1993889-belle-femme-latine-avatar-icone-personnage-gratuit-vectoriel.jpg'); 
   
//function update informyion simple user
const [isLoading, setLoading] = useState(true);
const [email, setEmail] =useState(); 
const [nom, setName] = useState(); 
const [password, setPassword] = useState(); 
const [passwordRepeat, setPasswordRepeat] = useState(); 
//const [id_user, setIdUser] = useState(user.id_user); 
//update call API with axios 


const updateUser = async () => {
  //information user connecte 
  const [userData, setUserData] = useState([]);
  const [email, setEmail] =useState(); 
  const [nom, setName] = useState(); 
  const [password, setPassword] = useState();
    

//function getName where user connected 

async function getName() {

    try {
      const jwt = await AsyncStorage.getItem("jwt");
      const response = await fetch(`${API_URL}/dashboard/`, {
        headers: { token: jwt }
      });
      const parseRes = await response.json();
      console.log(parseRes);

      setNom(parseRes.nom);
     setEmail(parseRes.email);
     setPassword(parseRes.password);
    }
      catch (err) {
          console.error(err.message);

        }
      }; 
 useEffect(() => {

        getName();
      });
    
    
    
      

//app.put("/simple/:id", async (req, res) => {

   //  const  body = ; 
 /*     axios.put(`${API_URL}/UpdateUser/${id_user}`, 
     { email, nom, password})
     .then(response => console.log(response.data));  
}; 
 */

const handleSave = (item) => {

axios.put(`${API_URL}/UpdateUser/${item}`, {


email: email, 
nom: nom, 
password: password

}).then((res) => {
    setUserData(
  userData.map((user) => 
  user.id_user == res.data.id_user - 1 ? res.data : user )

    ); 
})}









 const   takePhotoFromCamera = () => {
ImageCropPicker.openCamera({
compressImageMaxHeight:300, 
compressImageMaxWidth:300, 
cropping: true, 
compressImageQuality: 0.7
}).then(image => {
    console.log(image); 
    setImage(image.path); 
    this.bs.current.snapTo(1); 
}); 
 }
const choosePhotoFromLibray = () => {
ImageCropPicker.openPicker({
    width: 300,
    height: 300,
    cropping: true, 
    compressImageQuality: 0.7
}).then(image => {
    console.log(image); 
    setImage(image.path); 
    this.bs.current.snapTo(1); 
}); 

}

 renderInner = () => (
    <View style={styles.panel}>
    <View style={{alignItems: 'center'}}>
      <Text style={styles.panelTitle}>Upload Photo</Text>
      <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
    </View>
    <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
      <Text style={styles.panelButtonTitle}>Take Photo</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibray}>
      <Text style={styles.panelButtonTitle}>Choose From Library</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.panelButton}
      onPress={() => this.bs.current.snapTo(1)}>
      <Text style={styles.panelButtonTitle}>Cancel</Text>
    </TouchableOpacity>
  </View>
    );





     renderHeader = () => (
        <View style={styles.header}>
          <View style={styles.panelHeader}>
            <View style={styles.panelHandle} />
          </View>
        </View>
      );

      bs = React.createRef();
      fall = new Animated.Value(1);
  
    return (
        <View style={styles.container}>
            <BottomSheet
             ref={this.bs}
             snapPoints={[330, 0]}
             renderContent={this.renderInner}
             renderHeader={this.renderHeader}
             initialSnap={1}
             callbackNode={this.fall}
             enabledGestureInteraction={true}
            />
            <Animated.View style={{ margin: 20 }}>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                        <View style={{
                             height: 100,
                             width: 100,
                             borderRadius: 15,
                             justifyContent: 'center',
                             alignItems: 'center',
                        }}>
                            <ImageBackground
                               source={{
                                uri: image,
                              }}
                                style={{ height: 100, width: 100 }}
                                imageStyle={{ borderRadius: 15 }}
                            >
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>

                              
                                <Icon name="camera"
                                    size={35}
                                    color="#fff"
                                    style={{
                                      opacity: 0.7,
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      borderWidth: 1,
                                      borderColor: '#fff',
                                      borderRadius: 10,
                                    }} />
                                      </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}  >
                    User Name : {nom}
                    </Text>
                </View>
                <View style={styles.action}>
                    <Icon name="user" size={20} />
                    <TextInput
                        placeholder="First name"
                        mode='outlined'
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        
                        style={styles.textInput}
                        defaultValue={nom}
                        onChangeText={nom => setName(nom)}
                    />
                </View>
                <View style={styles.action}>
        <Text style={{ color: "#777777", marginLeft: 20}}> {email} </Text>
                    <Icon name="envelope-o" size={20} />
                    <TextInput
                        placeholder=" Email"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                        defaultValue={email}
                        onChangeText={email => setEmail(email)}

                    />
                </View>
                <View style={styles.action}>
                <Text style={{ color: "#777777", marginLeft: 20}}> {password} </Text>
                    <Icon name="unlock-alt" size={20} />

                    <TextInput
                        placeholder="Password "
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                        defaultValue={password}
                        onChangeText={password => setPassword(password)}
                    />
                </View>
                {/* <Text style={{ color: "#777777", marginLeft: 20}}> Confirm Password </Text>
                <View style={styles.action}>
                
                    <Icon name="unlock-alt" size={20} />

                    <TextInput
                    placeholder="Confirm  Password"
                        placeholderTextColor="#666666"
                        value={passwordRepeat}
                        autoCorrect={false}
                        style={styles.textInput}
                        onChangeText={passwordRepeat => setPasswordRepeat(passwordRepeat)}
                    />
                </View> */}
                <TouchableOpacity style={styles.commandButton} onPress={  e => updateUser(this)} >
                    <Text style={styles.panelButtonTitle} >Submit </Text>

                </TouchableOpacity>






        </Animated.View>
</View >


)


            }
}
export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
});

