import {Box, Button} from 'native-base';
import React from 'react';
import {lmaoded} from '../helpers/authHelper';
import {fetchEnt} from '../helpers/entHelper';

export function TryRetry(): JSX.Element {
  return (
    <Box p="2" mt="5">
      <Button onPress={lmaoded} colorScheme="primary">
        TRY ME
      </Button>
      <Button onPress={fetchEnt} colorScheme="secodary">
        TRY ENTITLEMENT
      </Button>
    </Box>
  );
}
