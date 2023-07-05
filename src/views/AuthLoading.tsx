import {Box, Heading} from 'native-base';
import React from 'react';

export function AuthLoading(): JSX.Element {
  return (
    <Box height="25%" alignItems="center" justifyContent="center">
      <Heading color="white" fontFamily="heading" textAlign="center" size="2xl">
        Authenticating with Rito Games
      </Heading>
    </Box>
  );
}
