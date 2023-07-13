import React, {useState} from 'react';
import {
  Input,
  Stack,
  FormControl,
  Box,
  Heading,
  Select,
  Button,
  Text,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const styles = StyleSheet.create({
  label: {
    color: 'white',
    fontSize: 18,
  },
  sheet: {
    backgroundColor: 'black',
  },
});

export const LoginForm = () => {
  const [formData, setData] = React.useState({});
  const [shard, setShard] = React.useState('');
  const navigation = useNavigation();
  const route = useRoute();

  const handleSubmit = () => {
    //console.log(formData);
    //console.log(shard);
    navigation.navigate('AuthWait', {
      userName: formData.username,
      pwd: formData.pwd,
      shard: shard,
    });
  };

  return (
    <Box p="5" flex="1" justifyContent="center" bg="black">
      {route.params && (
        <Text paddingBottom="4" color="white">
          {route.params.error}
        </Text>
      )}
      <Heading marginBottom="5" color="white" fontFamily="heading" size="xl">
        Login with your Riot Account
      </Heading>
      <FormControl>
        <Stack space={5}>
          <Stack>
            <FormControl.Label _text={styles.label}>Username</FormControl.Label>
            <Input
              onChangeText={value => setData({...formData, username: value})}
              focusOutlineColor="red.700"
              color="white"
              variant="underlined"
              p={2}
              size="lg"
              placeholder="Not Riot ID#Tagline"
            />
            <FormControl.HelperText>
              Your username is not your Riot ID, multifactor and social sign in
              is not supported
            </FormControl.HelperText>
          </Stack>
          <Stack>
            <FormControl.Label _text={styles.label}>Password</FormControl.Label>
            <Input
              onChangeText={value => setData({...formData, pwd: value})}
              focusOutlineColor="red.700"
              color="white"
              type="password"
              variant="underlined"
              size="lg"
              p={2}
              placeholder="Password"
            />
          </Stack>
        </Stack>
      </FormControl>
      <FormControl isReadOnly>
        <Stack paddingTop="5">
          <FormControl.Label _text={styles.label}>Shard</FormControl.Label>
          <Select
            _actionSheet={styles.sheet}
            focusOutlineColor="red.700"
            variant="underlined"
            onValueChange={itemValue => setShard(itemValue)}
            size="lg"
            placeholder="Choose your shard"
            _selectedItem={{
              bg: 'red.700',
            }}
            mt="1">
            <Select.Item label="ap" value="ap" />
            <Select.Item label="eu" value="eu" />
            <Select.Item label="kr" value="kr" />
            <Select.Item label="na" value="na" />
          </Select>
        </Stack>
      </FormControl>
      <Button onPress={handleSubmit} mt="10" colorScheme="red">
        Log In
      </Button>
    </Box>
  );
};
