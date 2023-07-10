import React, {useEffect, useState} from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import {StoreTabs} from './src/views/StoreTabs';
import {StatusBar} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import {AuthLoading} from './src/views/AuthLoading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from './src/helpers/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TryRetry} from './src/views/TryRetry';

const theme = extendTheme({
  colors: {
    backgroundColor: 'red',
  },
  fontConfig: {
    MarkPro: {
      400: {
        normal: 'mark-pro--regular',
      },
      500: {
        normal: 'mark-pro--medium',
      },
      600: {
        normal: 'mark-pro--medium',
      },
      700: {
        normal: 'mark-pro--bold',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'MarkPro',
    body: 'MarkPro',
    mono: 'MarkPro',
  },
});

const Stack = createNativeStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    async function fetchMyAPI() {
      let aTokenFound =
        (await SecureStore.getItemAsync('val_access_token')) !== null;
      let eTokenFound =
        (await SecureStore.getItemAsync('val_ent_token')) !== null;
      let uuidFound = (await AsyncStorage.getItem('playerUuid')) !== null;
      setLoggedIn(!(aTokenFound && eTokenFound && uuidFound));
    }

    fetchMyAPI();
  }, []);
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <StatusBar backgroundColor="black" />
        <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
          <Stack.Navigator>
            {loggedIn === true && (
              <Stack.Screen
                name="Store"
                component={StoreTabs}
                options={{headerShown: false}}
              />
            )}
            {loggedIn === false && (
              <>
                <Stack.Screen
                  name="AuthWait"
                  component={AuthLoading}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="Login"
                  component={TryRetry}
                  options={{headerShown: false}}
                />
              </>
            )}
          </Stack.Navigator>
        </AuthContext.Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
