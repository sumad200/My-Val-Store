import React from 'react';
import {TimerView} from './StoreTimer';
import {Box, Heading} from 'native-base';

export function DailyHeader(props: any) {
  return (
    <Box m="2" p="3" justifyContent="center" alignItems="center">
      <Heading
        textAlign="center"
        textTransform="uppercase"
        size="xl"
        color="white">
        DAILY STORE
      </Heading>
      <Box alignItems="center">
        <TimerView endDate={props.timeLeft} />
      </Box>
    </Box>
  );
}
