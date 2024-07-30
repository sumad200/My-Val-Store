import { useNavigation } from '@react-navigation/native';
import { Box, Button, Center, CheckIcon, FormControl, Heading, Select, Text, WarningOutlineIcon } from 'native-base'
import React, { useEffect, useState } from 'react'
import { BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

const quitApp = ()=>{
    BackHandler.exitApp();
}


function ShardSelect(props) {
    const [shard,setShard] = useState("");
    let navigation = useNavigation();
    const submitShard = (ritotokenUri,shard)=>{
        if(shard.length <= 0){
            //console.log("Invalid shard");
        }
        navigation.navigate("AuthWait",{
            tokenUri: ritotokenUri,
            playerShard: shard
        })
    }
    
    //console.log(props)
  return (
        <Center flex="1" backgroundColor="black">
        {props.route && props.route.params && props.route.params.error && (
  <Text paddingBottom="4" color="white">
    {props.route.params.error}
  </Text>
)}
      {
        (props.route.params===undefined || props.route.params.tokenUri === undefined)?<>
        <Heading marginBottom="5" color="white" fontFamily="heading" size="xl">
        Some error occured while logging in, try restarting the app
      </Heading>
      <Button onPress={()=>quitApp()} mt="10" colorScheme="red">
        Quit and Try Again
      </Button>
        </>:<>
        <Heading marginBottom="5" color="white" fontFamily="heading" size="xl">
        You're Logged In, select your shard(region) to proceed
      </Heading>
      <FormControl isReadOnly w="3/4" maxW="300" isRequired isInvalid={shard.length<=0} >
        <FormControl.Label>Choose Shard</FormControl.Label>
        <Select focusOutlineColor="red.700"
            variant="underlined"
            onValueChange={itemValue => setShard(itemValue)}
            size="lg"
            placeholder="Choose your shard"
            _selectedItem={{
              bg: 'red.700',
            }}
            mt="1">
          <Select.Item label="APAC" value="ap" />
          <Select.Item label="EU" value="eu" />
          <Select.Item label="Korea" value="kr" />
          <Select.Item label="North America" value="na" />
        </Select>
        <Button onPress={()=>{submitShard(props.route.params.tokenUri,shard)}} mt="10" colorScheme="red">
        LFG
      </Button>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
        </>
      }
        </Center>
  )
}

export default ShardSelect