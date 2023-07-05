import axiosRetry from 'axios-retry';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import CookieManager from '@react-native-cookies/cookies';

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'User-Agent':
      'RiotClient/63.0.5.4887690.4789131 rso-auth (Windows; 10;;Professional, x64)',
  },
});

axiosRetry(client, {
  retries: 3,
  retryDelay: () => 2496,
  onRetry: (retryCount, error) => {
    console.log(`Retry No. ${retryCount}`);
    console.log('this is err b4 retry');
    console.log(error);
    console.log('------------------------------------------------------');
  },
  retryCondition: () => {
    return true;
  },
});

console.log('client made');

async function lmaoded3(tokenUri: any): Promise<void> {
  tokenUri = new URLSearchParams(tokenUri.substring(tokenUri.indexOf('#') + 1));
  const accToken = tokenUri.get('access_token');
  const idToken = tokenUri.get('id_token');
  await SecureStore.setItemAsync('val_access_token', accToken);
  await SecureStore.setItemAsync('val_id_token', idToken);
  console.log('Tokens stored');
  //await SecureStore.deleteItemAsync('val_id_token');
  //await SecureStore.deleteItemAsync('val_access_token');
}

function lmaoded2(): void {
  client
    .put('https://auth.riotgames.com/api/v1/authorization', {
      type: 'auth',
      username: 'xyz69OP',
      password: 'Aakpaakm416',
      remember: true,
    })
    .then(async res => {
      console.log(res.status);
      if ('error' in res.data) {
        console.log(res.data.error);
      }
      if (res.data.type === 'response') {
        console.log('gsgdsdsd');
        const tokenUri = res.data.response.parameters.uri;
        console.log(tokenUri);
        await lmaoded3(tokenUri);
      } else {
        console.log('some error occured');
      }
    })
    .catch(err => {
      console.log('erred');
      console.log(err);
    });
}

export async function lmaoded(): Promise<void> {
  console.log('hiiiii');
  await CookieManager.clearAll();
  client
    .post('https://auth.riotgames.com/api/v1/authorization', {
      client_id: 'riot-client',
      code_challenge: '',
      code_challenge_method: '',
      acr_values: '',
      claims: '',
      nonce: '69420',
      redirect_uri: 'http://localhost/redirect',
      response_type: 'token id_token',
      scope: 'openid link ban lol_region',
    })
    .then(res => {
      console.log(res.status);
      console.log(res.data);
      console.log('----------------b4 lmaoded 2----------------------------');
      lmaoded2();
    })
    .catch(err => {
      console.log(err);
    });
}
