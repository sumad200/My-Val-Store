import React from 'react';
import {Box, Text} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, View, Image} from 'react-native';
import {BlurView} from '@react-native-community/blur';

const linearGradStyle = StyleSheet.create({
  lgcont: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 5,
    bottom: 5,
    left: 5,
    right: 5,
  },
  lg: {
    flex: 1,
    margin: 10,
  },
});

export function StoreCard(props: any) {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <View
          style={{width: '35%', height: '30%', padding: 5, borderColor: 'red'}}>
          <LinearGradient
            style={linearGradStyle.lg}
            colors={['#89ff00', '#060c21', '#00bcd4']}
          />
        </View>
        <BlurView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          overlayColor="transparent"
          blurType="light"
          blurAmount={5}
          blurRadius={15}
        />
      </View>
    </>
  );
}
