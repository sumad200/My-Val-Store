/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'native-base';

export function KingdomcredIcon() {
  return (
    <Image
      style={{
        width: 18,
        height: 18,
      }}
      alt="Kingdom Creds"
      source={require('../img/kingdom-creds_icon.png')}
      resizeMode="contain"
    />
  );
}

export function VPIcon() {
  return (
    <Image
      style={{
        width: 18,
        height: 18,
      }}
      source={require('../img/vp_icon.png')}
      alt="Valulrant Points"
      resizeMode="contain"
    />
  );
}

export function Radianite() {
  return (
    <Image
      style={{
        width: 18,
        height: 18,
      }}
      source={require('../img/radianite_icon.png')}
      alt="Radianite Points"
      resizeMode="contain"
    />
  );
}
