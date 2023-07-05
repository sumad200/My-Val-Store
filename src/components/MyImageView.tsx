import React from 'react';
import {ImageBackground} from 'react-native';

export function MyImgBg(props: any) {
  return (
    <ImageBackground source={require('../img/sample-gradient.webp')}>
      {props.children}
    </ImageBackground>
  );
}
