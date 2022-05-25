import React, {useContext} from 'react'
import { StatusBar, ScrollView } from 'react-native'; 
import welcome from '../../assests/img/expo-bg2.png'; 
import { Avatar, 
WelcomeImage, 
PageTitle, 
SubTitle, 
StyledFormArea, 
StyledButton, InnerContainer, 
WelcomeContainer, 
ButtonText, 
Line

} from '../components/Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext} from "../components/CredentialsContext"; 
const Welcome = () => {
    const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
    const { name, email, photoUrl } = storedCredentials;
    const AvatarImg = photoUrl ? 
    {
        uri : photoUrl, 
    }
   : require('../../assests/img/expo-bg1.png'); 

    const clearLogin = () => {
        AsyncStorage.removeItem('flowerCribCredentials')
        .then(() => {
            setStoredCredentials(""); 
        })
        .catch((error) => console.log(error)); 

    }

  return (
      <ScrollView>
          <StatusBar barStyle="light" />
          <InnerContainer>
              <WelcomeImage resizeMode="cover" source={require('../../assests/img/expo-bg2.png')} />

              <WelcomeContainer>
                  <PageTitle welcome={true}>Welcome! Buddy</PageTitle>
                  <SubTitle welcome={true}>{name || 'Olga Simpson'}</SubTitle>
                  <SubTitle welcome={true}>{email || 'olgasimp@gmail.com'}</SubTitle>

                  <StyledFormArea>
                      <Avatar style={{resizeMode : "cover"}} source={AvatarImg} />

                      <Line />
                      <StyledButton>
                          <ButtonText>Logout</ButtonText>
                      </StyledButton>
                  </StyledFormArea>
              </WelcomeContainer>
          </InnerContainer>
      </ScrollView>
  ); 
}; 

export default Welcome
