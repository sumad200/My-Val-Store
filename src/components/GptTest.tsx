import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';

const BlurredGradientCard = ({text}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['red', 'blue']} style={styles.gradient}>
        <BlurView
          style={styles.blurContainer}
          blurType="light"
          blurAmount={5}
          reducedTransparencyFallbackColor="white">
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet blandit nulla. Duis rhoncus, tellus vel pretium mattis, erat
            justo convallis odio, eu tincidunt nisi felis sed massa. Ut vitae mi
            quis purus auctor vulputate at ac libero. Praesent porttitor porta
            auctor. Vivamus egestas accumsan dapibus. Aliquam commodo tortor vel
            ante vehicula consequat. Morbi et dui et lectus fringilla faucibus
            et eu elit. Quisque non risus rutrum, bibendum nisi eu, tincidunt
            nis
          </Text>
        </BlurView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  gradient: {
    width: 'auto',
    aspectRatio: undefined,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  blurContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  },
});

export default BlurredGradientCard;
