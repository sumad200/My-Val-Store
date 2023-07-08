/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'native-base';

export function KingdomcredIcon(props: any) {
  return (
    <Image
      style={{
        width: props.width ? props.width : 18,
        height: props.width ? props.width : 18,
      }}
      alt="Kingdom Creds"
      source={require('../img/kingdom-creds_icon.png')}
      resizeMode="contain"
    />
  );
}

export function VPIcon(props: any) {
  return (
    <Image
      style={{
        width: props.width ? props.width : 18,
        height: props.width ? props.width : 18,
      }}
      source={require('../img/vp_icon.png')}
      alt="Valulrant Points"
      resizeMode="contain"
    />
  );
}

export function Radianite(props: any) {
  return (
    <Image
      style={{
        width: props.width ? props.width : 18,
        height: props.width ? props.width : 18,
      }}
      source={require('../img/radianite_icon.png')}
      alt="Radianite Points"
      resizeMode="contain"
    />
  );
}
