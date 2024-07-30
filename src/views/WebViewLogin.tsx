import { useNavigation } from '@react-navigation/native';
import { Box,Center,Heading, Text } from 'native-base'
import React from 'react'
import { WebView } from 'react-native-webview';



function WebViewLogin() {
  let navigation = useNavigation();

  const handleNavChange = (webViewState)=>{
    if(webViewState.url.startsWith('https://playvalorant.com')&&webViewState.url.includes('access_token')){
      //console.log("Got successful redirect");
      //console.log(webViewState.url);
      
      navigation.navigate('ShardSelect',{
        tokenUri: webViewState.url
      })
      return false;
    }
    else{
      //console.log(`On url ${webViewState.url}`);
      return true;
    }
  }

  return (
    <Box flex="1">
      <Center backgroundColor="black">
        <Heading  color="white" fontFamily="heading" size="lg">
        Login with your Riot Account </Heading>
        <Text>Do select "Stay Signed in"</Text>
      
      </Center>
        <WebView
        incognito={true}
        onShouldStartLoadWithRequest={handleNavChange}
        source={{ uri: 'https://auth.riotgames.com/authorize?redirect_uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in&client_id=play-valorant-web-prod&response_type=token%20id_token&nonce=69&scope=account%20openid' }}
      />
    </Box>
  )
}

export default WebViewLogin