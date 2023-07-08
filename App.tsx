import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import {StoreTabs} from './src/views/StoreTabs';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 0,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar backgroundColor="black" />
      <SafeAreaView style={styles.MainContainer}>
        <StoreTabs />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
