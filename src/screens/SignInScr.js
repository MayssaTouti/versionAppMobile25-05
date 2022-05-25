import React, { useContext, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Feather } from 'react-native-feather';
import { useTheme } from '@react-navigation/native';
import Animated, { set } from 'react-native-reanimated';
import axios from 'axios';
import { API_URL } from '../../utils/Env';
import CustomInput from '../components/CustomInput/CustomInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignInScr = ({ navigation }) => {


    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null);
    const [isLoading, setIsLoading] = useState(false); 




    const onSignInPressed = () => {
        console.warn(" Sign In ");
        // validate user
        axios.post(API_URL + "/auth/login", { email, password })
            .then((res) => {
                AsyncStorage.setItem("jwt", res.data.jwtToken);
                navigation.navigate('Home');
            }).catch((err) => {
                if (err.response && err.response.status == 401) {
                    Alert.alert("Incorrect email or password");
                    return
                }
                console.log(err);
                Alert.alert('Login failed')
            })
    };

    const onTermsOfUserPressed = () => {
        console.warn('onTermsOfUserPressed');

    };



    return (

        <View style={styles.container}>
            <Spinner visible={isLoading} />
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}> Login  </Text>

            </View>
            <Animated.View style={styles.footer}>

                <Text style={styles.text_footer}> Email    </Text>
                <View style={styles.action}>
                    <Icon name="user" size={20} color="#05375a" />

                    <TextInput
                        value={email}
                        placeholder="Your Email"
                        keyboardType="email-address"
                        onChangeText={text => setEmail(text)}
                        autoCapitalize="none"
                        style={styles.textInput}  />
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
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                        autoCapitalize="none" />
                    <TouchableOpacity>
                        <Icon name="eye-slash" size={20} color="grey" />

                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <LinearGradient colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}   >
                        <Text style={[styles.textSign,
                        { color: '#fff' }
                        ]}
                            onPress={onSignInPressed}
                        > Sign In  </Text>

                    </LinearGradient>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScr')}
                        style={[styles.signIn, {
                            borderBottomColor: '#009387',
                            borderBottomWidth: 1,
                            marginTop: 15


                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}> Sign Up </Text>
                    </TouchableOpacity>


                </View>




            </Animated.View>
        </View>
    )



}


export default SignInScr

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
