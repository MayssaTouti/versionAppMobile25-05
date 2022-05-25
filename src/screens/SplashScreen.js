import React from 'react'
import {
    View
    , Text,
    StatusBar,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Image
} from 'react-native'


import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '@react-navigation/native';


const SplashScreen = ({navigation }) => {
    const { colors } = useTheme();
  
  
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assests/user_boy.png')}
                    style={styles.logo}
                    resizeMode="stretch"

                />
            </View>
            <Animated.View style={styles.footer}>
                <Text style={styles.title}> Stay connected with everyone !  </Text>
                <Text style={styles.text} > Sign In with account   </Text>
                {/*  */}

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUpScr')}>
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign} > Get started </Text>
                            <Icon name="chevron-right" size={20} color="#fff" />
                        </LinearGradient>

                    </TouchableOpacity>
                </View>

            </Animated.View>
        </View>
    )
}

export default SplashScreen

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
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
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },
    thumbnail: {
        width: 270,
        height: 59,
    },
});

