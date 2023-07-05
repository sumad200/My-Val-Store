import * as SecureStore from 'expo-secure-store';
import axiosRetry from 'axios-retry';
import axios, {AxiosInstance} from 'axios';

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
      console.log(`Retry No. ${retryCount}`);
      console.log('this is err b4 retry for entitlement');
      console.log(error);
      console.log('------------------------------------------------------');
    },
    retryCondition: () => {
      return true;
    },
  });
  console.log('ent client made');
}

export async function fetchEnt() {
  await createEntClient();
  entClient
    .post('https://entitlements.auth.riotgames.com/api/token/v1', {})
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
}
