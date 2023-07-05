import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const sytles = StyleSheet.create({
  cardContainer: {
    color: 'white',
    backgroundColor: 'black',
    position: 'relative',
    borderRadius: 20,
    padding: 5,
  },
  cardContent: {
    color: 'white',
    padding: 10,
  },
  gradientStyle: {
    position: 'absolute',
    top: -5,
    left: -5,
    right: -5,
    bottom: -5,
    zIndex: -1,
  },
});

export function MyCard() {
  return (
    <View style={sytles.cardContainer}>
      <View style={{borderRadius: 20, backgroundColor: 'black'}}>
        <Text style={sytles.cardContent}>
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
      <View style={sytles.gradientStyle}>
        <LinearGradient
          style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
          useAngle={true}
          angle={90}
          locations={[0, 0.5, 1]}
          colors={['rgba(0,188,212,1)', 'rgba(6,12,33,1)', 'rgba(0,188,212,1)']}
        />
        <BlurView
          overlayColor="transparent"
          blurType="xlight"
          blurAmount={32}
          blurRadius={24}
        />
      </View>
    </View>
  );
}
