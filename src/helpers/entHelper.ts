import * as SecureStore from 'expo-secure-store';
import axiosRetry from 'axios-retry';
import axios, {AxiosInstance} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


let entClient: AxiosInstance;

async function createEntClient() {
  const access_token = await SecureStore.getItemAsync('val_access_token');
  entClient = axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  });
  axiosRetry(entClient, {
    retries: 3,
    retryDelay: () => 2496,
    onRetry: (retryCount, error) => {
      //console.log(`Retry No. ${retryCount}`);
      //console.log('this is err b4 retry for entitlement');
      //console.log(error);
      //console.log('------------------------------------------------------');
    },
    retryCondition: () => {
      return true;
    },
  });
  //console.log('ent client made');
}

export async function fetchEnt(setSuccess, setFail) {
  await createEntClient();
  await entClient
    .post('https://entitlements.auth.riotgames.com/api/token/v1', {})
    .then(async res => {
      let entToken = res.data.entitlements_token;
      await SecureStore.setItemAsync('val_ent_token', entToken);
      let ent = await SecureStore.getItemAsync('val_ent_token');
      let act = await SecureStore.getItemAsync('val_access_token');
      let uuid = await AsyncStorage.getItem('playerUuid');
      //console.log('-------------------------ent-------------------------');
      //console.log(ent);
      //console.log('-------------------------act-------------------------');
      //console.log(act);
      //console.log('-------------------------uuid-------------------------');
      //console.log(uuid);
      setSuccess(true);
    })
    .catch(err => {
      setFail(true);
      //console.log(err);
    });
}
