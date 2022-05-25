import React, { useState , useContext} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Alert,
    ScrollView
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from "axios"
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated, { set } from 'react-native-reanimated';
//import CustomInput from '../components/CustomInput';
import { API_URL } from '../../utils/Env';
import { TextInput } from 'react-native-gesture-handler';


const SignUpScr = ({ navigation }) => {

    const [nom, setNom] = useState(null); 
    const [password, setPassword] = useState(null); 
    const [email, setEmail] = useState(null); 
    const [passwordRepeat, setPasswordRepeat] = useState(null); 
    const [isLoading, setIsLoading] = useState(false); 




//function register 
    const onRegisterPressed = () => {
        setIsLoading(true); 
        if (password != passwordRepeat) {
            Alert.alert("Password and password confirmation don't match");
            return;
        }
        axios.post(API_URL+"/auth/register", { email, nom , password })
            .then(() => {
                navigation.navigate('SignInScr');
                setIsLoading(false); 
            }).catch((err) => {
                if (err.response && err.response.status == 401) {
                    Alert.alert(' Registration error')
                    return;
                }
                console.log(err);
                Alert.alert("Registration error");
            });

    }; 







    return (
        <ScrollView>
            <View style={styles.container}>
           <Spinner visible={isLoading}  />
                <StatusBar backgroundColor='#009387' barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.text_header}> Create Your account   </Text>
                </View>
                <Animated.View style={styles.footer}>

                    <Text style={styles.text_footer}> User Name     </Text>
                    <View style={styles.action}>
                        <Icon name="user" size={20} color="#05375a" />
                        <TextInput
                            value={nom}
                            style={styles.textInput}
                            placeholder="Your name "
                            autoCapitalize="none"
                            onChangeText={text => setNom(text)}
                           
                        />

                        <Icon name="check-circle-o" size={20}
                            color="#053" />
                    </View>
                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}> Email    </Text>
                    <View style={styles.action}>
                        <Icon name="envelope-o" size={20} color="#05375a" />
                        <TextInput
                            value={email}
                            placeholder="Your Email"
                            onChangeText={text => setEmail(text)}
                            style={styles.textInput}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            
                        />

                      
                            <Animated.View>
                                <Icon name="check-circle-o" size={20}
                                    color="#053" />

                            </Animated.View>


                         

                    </View>
                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}> Password     </Text>
                    <View style={styles.action}>
                        <Icon name="lock" size={20}
                            color="#05375a" />
                        <TextInput
                            placeholder="Your Password"
                            value={password}
                            style={styles.textInput}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={true}
                            autoCapitalize="none"
                            
                        />

                        <TouchableOpacity>
                           

                                <Icon name="eye-slash" size={20}
                                    color="grey" />
    
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}> Confirm Password      </Text>
                    <View style={styles.action}>
                        <Icon name="lock" size={20}
                            color="#05375a" />
                        <TextInput
                            placeholder="Confirm  Password"
                            value={passwordRepeat}
                            style={styles.textInput}
                            onChangeText={text => setPasswordRepeat(text)}
                            secureTextEntry={true}
                            autoCapitalize="none"
                           
                        />

                        <TouchableOpacity>
                    <Icon name="eye" size={20}   color="grey" />
           </TouchableOpacity>
                    </View>

                    <View style={styles.button}>


                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                           
                        >
                            <Text 
                            style={[styles.textSign,
                            { color: '#fff' } ]} 
                                onPress={onRegisterPressed}
                            > Sign Up  </Text>

                        </LinearGradient>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignInScr')}
                            style={[styles.signIn, {
                                borderBottomColor: '#009387',
                                borderBottomWidth: 1,
                                marginTop: 15}]}  >
  <Text style={[styles.textSign, { color: '#009387'}]}> Sign In  </Text>
                        </TouchableOpacity>


                    </View>




                </Animated.View>
            </View>
        </ScrollView>
    )



}


export default SignUpScr

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
