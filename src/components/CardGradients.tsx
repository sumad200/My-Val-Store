/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export function Gradient1() {
  return (
    <LinearGradient
      style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
      useAngle={true}
      angle={90}
      locations={[0, 0.5, 1]}
      colors={['rgba(0,188,212,1)', 'rgba(6,12,33,1)', 'rgba(0,188,212,1)']}
    />
  );
}
