import React from 'react';
import {View} from 'react-native';
import {Text} from 'native-base';

export function NoNightMarket() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <Text fontSize="lg" color="white">
          Sadge, No Night Market Available
        </Text>
      </View>
    </View>
  );
}
