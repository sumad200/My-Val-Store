import React from 'react';
import {TimerView} from './StoreTimer';
import {Box, Heading} from 'native-base';

export function StoreTitleHeader(props: any) {
  return (
    <Box m="2" p="3" justifyContent="center" alignItems="center">
      <Heading
        textAlign="center"
        textTransform="uppercase"
        size="xl"
        color="white">
        {props.title}
      </Heading>
      <Box alignItems="center">
        <TimerView endDate={props.timeLeft} />
      </Box>
    </Box>
  );
}
