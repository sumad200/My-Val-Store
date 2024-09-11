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
  try{
  const [res1,res2] = await Promise.all([entClient
    .post('https://entitlements.auth.riotgames.com/api/token/v1', {}),entClient.get("https://auth.riotgames.com/userinfo")]);
  
    let entToken = res1.data.entitlements_token;
    let ritoAccName = res2.data.acct;
    let playerTag = `${ritoAccName.game_name}#${ritoAccName.tag_line}`
    //console.log(`Setting player Tag ${playerTag}`);
    await Promise.all([
    AsyncStorage.setItem('player_tag',playerTag),
    SecureStore.setItemAsync('val_ent_token', entToken)]);
    setSuccess(true);
  }
  catch(err){
    setFail(true);
    //console.log("Error getting ent token and setting player name "+ err);
  }
}
