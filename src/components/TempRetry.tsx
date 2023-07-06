import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';
import {Text, View} from 'react-native';

export function TempCard() {
  return (
    <View>
      <View
        style={{
          zIndex: 2,
          margin: 7,
          padding: 10,
          backgroundColor: 'black',
          borderRadius: 20,
        }}>
        <Text
          style={{
            color: 'white',
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          feugiat facilisis ante, eu cursus massa facilisis sit amet. Sed
          ullamcorper massa vitae est volutpat, in dapibus elit suscipit. Mauris
          ex augue, accumsan ut dui in, finibus varius enim. Quisque ullamcorper
          odio at tincidunt scelt dolor vel mauris congue vestibulum. Nulla
          accumsan urna elementum ullamcorper ornare. Aenean eu rhoncus justo,
          sed viverra diam. Donec ut posuere mi, non fermentum nisl. In at dui
          vel erat semper porta. Donec mollis ultricies metus et tempus.
        </Text>
      </View>
      <LinearGradient
        style={{
          position: 'absolute',
          top: -2,
          bottom: -2,
          left: -2,
          right: -2,
          zIndex: -3,
        }}
        colors={['rgba(0,188,212,1)', 'rgba(6,12,33,1)', 'rgba(0,188,212,1)']}
        useAngle={true}
        angle={90}
      />
      <BlurView
        style={{
          position: 'absolute',
          top: -19,
          bottom: -14,
          left: -5,
          right: -5,
          zIndex: 0,
        }}
        blurType="light"
        blurAmount={12}
        blurRadius={7}
        overlayColor="transparent"
      />
    </View>
  );
}
