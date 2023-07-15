import React, {useEffect, useState} from 'react';
import {TimerView} from './StoreTimer';
import {VPIcon} from './CurrencyIcons';
import {Box, Heading, Text} from 'native-base';
import axios from 'axios';

export function FeaturedHeader(props: any) {
  const [bundleName, setBundleName] = useState();

  useEffect(() => {
    axios.get(`https://valorant-api.com/v1/bundles/${props.uuid}`).then(res => {
      setBundleName(res.data.data.displayName);
    });
  }, [props.uuid]);

  return (
    <Box m="1" p="1" justifyContent="center" alignItems="center">
      <Heading
        textAlign="center"
        textTransform="uppercase"
        size="xl"
        color="white">
        {bundleName}
      </Heading>
      <Box alignItems="center">
        <Box my="2.5" alignItems="center" flexDirection="row">
          <VPIcon width={22} height={22} />
          <Text fontSize="md" color="white">{` ${props.cost}`}</Text>
        </Box>
        <TimerView endDate={props.timeLeft} />
      </Box>
    </Box>
  );
}
