import React from 'react';
import {Box} from 'native-base';

const BoxIconStyle: any = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export function IconBox(props: {children: any}) {
  return (
    <Box
      borderWidth="0.69"
      borderColor="white"
      borderRadius="full"
      p="2"
      mr="1.5"
      style={BoxIconStyle}>
      {props.children}
    </Box>
  );
}
