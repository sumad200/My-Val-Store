import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {Svg, Defs, RadialGradient, Stop, Rect} from 'react-native-svg';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.18)',
    shadowColor: 'rgba(31, 38, 135, 0.37)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 32,
    elevation: 5,
  },
  svg: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -5,
    overflow: 'hidden',
  },
});

const GradientContainer = (props: any) => (
  <Pressable android_ripple={{color: props.gradient}} style={styles.container}>
    <Svg style={styles.svg}>
      <Defs>
        <RadialGradient
          id="gradient"
          cx="80%"
          cy="0%"
          r="120%"
          fx="50%"
          fy="50%">
          <Stop offset="0%" stopColor={props.gradient} stopOpacity="0.25" />
          <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
        </RadialGradient>
      </Defs>
      <Rect
        x="0"
        y="0"
        rx="7.2"
        width="100%"
        height="100%"
        fill="url(#gradient)"
      />
    </Svg>
    {props.children}
  </Pressable>
);

export default React.memo(GradientContainer);
