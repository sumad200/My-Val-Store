import React from 'react';
import {Box, Text, Heading} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {position} from 'native-base/lib/typescript/theme/styled-system';

const linearGradStyle = StyleSheet.create({
  lgcont: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: -2,
    bottom: -2,
    left: -2,
    right: -2,
    zIndex: -1,
  },
  lg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export function StoreCard(props: any) {
  return (
    <>
      <Box ml="5%" mr="5%" mt="5%">
        {/*Card Container */}
        <Box>
          {/*Card Elements*/}
          <Text color="white" fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod
            consequat enim sit amet efficitur. Vestibulum a odio sapien. Sed
            facilisis dui vitae bibendum finibus. ultricies nunc nec rhoncus.
            Mauris lacus metus, imperdiet ut congue quis, porttitor sed sapien.
            Nulla aliquet in neque eget lacinia. Sed in pulvinar magna ultricies
            nunc nec rhoncus. Mauris lacus metus, imperdiet ut congue quis,
            porttitor sed sapien. Nulla aliquet in neque eget lacinia. Sed in
            pulvinar magna
          </Text>
        </Box>
        <Box style={linearGradStyle.lgcont}>
          {/* Gradient Container that extends beyond box */}
          <LinearGradient
            style={linearGradStyle.lg}
            colors={['#89ff00', '#060c21', '#00bcd4']}
          />
        </Box>
      </Box>
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
        blurAmount={32}
        blurRadius={24}
      />
    </>
  );
}
