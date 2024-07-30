import {Box, Heading} from 'native-base';
import React, {useEffect, useContext, useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {lmaoded, webViewAuthHelper} from '../helpers/authHelper';
import {fetchEnt} from '../helpers/entHelper';
import {AuthContext} from '../helpers/AuthContext';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 0,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export function AuthLoading(): JSX.Element {
  const {setLoggedIn} = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    async function rsoAuth() {
      const params = route.params;
      try {
        await webViewAuthHelper(params.tokenUri,params.playerShard);
        await fetchEnt(setSuccess, setFail);
        //console.log('succs');
      } catch (e: any) {
        //console.log(e);
      }
    }
    rsoAuth();
  }, [route.params]);

  useEffect(() => {
    if (success) {
      setLoggedIn(true);
    }
    if (fail) {
      navigation.navigate('LoginForm', {
        error: 'Login failed, wrong credentials or some error occured',
      });
    }
  }, [fail, success]);

  return (
    <SafeAreaView style={styles.MainContainer}>
      <Box height="25%" alignItems="center" justifyContent="center">
        <Heading
          color="white"
          fontFamily="heading"
          textAlign="center"
          size="2xl">
          Authenticating with Rito Games
        </Heading>
      </Box>
    </SafeAreaView>
  );
}
