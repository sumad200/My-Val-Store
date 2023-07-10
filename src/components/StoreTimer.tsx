import React from 'react';
import {useCountdown} from '../helpers/useCountDown';
import {Text, Pressable} from 'native-base';
import RNRestart from 'react-native-restart';

function handlePress() {
  RNRestart.restart();
}

export function TimerView(props: any) {
  const [days, hours, minutes, seconds] = useCountdown(props.endDate);
  if (days + hours + minutes + seconds <= 0) {
    let msg =
      props.mode === 'daily'
        ? 'Daily store expired, Tap here to refresh and view updated offers'
        : 'Featured Bundle expired, Tap here to refresh and view updated store';
    return (
      <Pressable onPress={handlePress}>
        <Text color="white">{msg}</Text>
      </Pressable>
    );
  } else {
    let daysm = days > 0 ? `${days}d:` : '';
    let hrsm = hours > 0 ? `${hours}h:` : '';
    let minm = minutes > 0 ? `${minutes}m:` : '';
    let secm = seconds > 0 ? `${seconds}s` : '';
    return <Text color="white">{`${daysm} ${hrsm} ${minm} ${secm}`}</Text>;
  }
}
