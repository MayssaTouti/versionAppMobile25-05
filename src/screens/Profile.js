import ImageCropPicker from 'react-native-image-crop-picker'
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'

import imgPlaceHolder from "../../assests/user_boy.png"
import Entypo from 'react-native-vector-icons/Entypo'
import { Caption, Paragraph, Surface, Title } from 'react-native-paper'
import { openPicker } from 'react-native-image-crop-picker';
import { useState } from 'react'
import { ScrollView } from 'react-native'
import Colors from '../../constants/Colors'
import AppHeader from '../components/AppHeader'

const dummy_text ="Lorem aaslmaa"
const Profile = ({navigation , route }) => {
  const [profile, setProfile] = useState(null)

  const imagePick = () => {
    ImageCropPicker.openPicker({
      width: 400,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setProfile(image.path)
    });
  }
  return (

  
    <View style={styles.container}>
 
      <View style={styles.profileContainer}>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={profile ? { uri: profile } : imgPlaceHolder} />
          <TouchableOpacity onPress={imagePick}
            style={{ alignItems: 'flex-end', top: -10 }}>
            <Entypo name="pencil" size={20} color={Colors.green} />
          </TouchableOpacity>
  </View>
        <View style={styles.textContainer}>
          <Title>Nom Utilisateur </Title>
          <Caption>... </Caption>
        </View>
        </View>

      <View style={styles.userInfo}>
        <Surface style={styles.bio}>
          <Title>Bio</Title>
          <Paragraph numberOfLines={4}>{dummy_text}</Paragraph>
        </Surface>
        <Surface style={styles.bio}>
          <Title>Notes</Title>
          <TextInput
            placeholder="write here"
            underlineColorAndroid={Colors.green}
          />
        </Surface>
        <Surface style={styles.bio}>
          <Title>Notes</Title>
          <TextInput
            placeholder="write here"
            underlineColorAndroid={Colors.green}
          />
        </Surface>
      </View>
   

    </View>
  
  )
}

export default Profile
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgContainer: {},
  textContainer: {
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: Colors.black,
    borderWidth: 3,
  },
  userInfo: {
    flex: 1,
  },
  bio: {
    borderRadius: 10,
    padding: 16,
    margin: 16
  }
})