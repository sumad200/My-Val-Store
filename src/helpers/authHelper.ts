import axiosRetry from 'axios-retry';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import CookieManager from '@react-native-cookies/cookies';
import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'base-64';

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
    //console.log(`Retry No. ${retryCount}`);
    //console.log('this is err b4 retry');
    //console.log(error);
    //console.log('------------------------------------------------------');
  },
  retryCondition: error => {
    if (error.response) {
      return error.response.status === 403;
    }
    return false;
  },
});

//console.log('client made');

async function lmaoded3(tokenUri: any): Promise<void> {
  tokenUri = new URLSearchParams(tokenUri.substring(tokenUri.indexOf('#') + 1));
  const accToken = tokenUri.get('access_token');
  const idToken = tokenUri.get('id_token');
  await SecureStore.setItemAsync('val_access_token', accToken);
  await SecureStore.setItemAsync('val_id_token', idToken);
  let playerData = JSON.parse(base64.decode(accToken.split('.')[1]));
  await AsyncStorage.setItem('playerUuid', playerData.sub);
  //console.log('Tokens stored');
}

async function lmaoded2(user, pwd, shard, setSuccess, setFail): void {
  await client
    .put('https://auth.riotgames.com/api/v1/authorization', {
      type: 'auth',
      username: `${user}`,
      password: `${pwd}`,
      remember: true,
    })
    .then(async res => {
      //console.log(res.status);
      if ('error' in res.data) {
        //console.log(res.data.error);
      }
      if (res.data.type === 'response') {
        ////console.log('gsgdsdsd');
        const tokenUri = res.data.response.parameters.uri;
        ////console.log(tokenUri);
        AsyncStorage.setItem('playerShard', shard);
        await lmaoded3(tokenUri);
      } else {
        throw new Error('Some error occured');
      }
    })
    .catch(err => {
      //console.log('erred');
      setFail(true);
      //console.log(err);
    });
}

export async function lmaoded(
  user,
  pwd,
  shard,
  setSuccess,
  setFail,
): Promise<void> {
  await CookieManager.clearAll();
  await client
    .post('https://auth.riotgames.com/api/v1/authorization', {
      client_id: 'riot-client',
      code_challenge: '',
      code_challenge_method: '',
      acr_values: '',
      claims: '',
      nonce: '69420',
      redirect_uri: 'http://localhost/redirect',
      response_type: 'token id_token',
      scope: 'openid link ban lol_region'
    })
    .then(async res => {
      await lmaoded2(user, pwd, shard, setSuccess, setFail);
    })
    .catch(err => {
      //console.log(err);
      setFail(true);
    });
}
