import {Box, Heading} from 'native-base';
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

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
