import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export async function getWalletUrl() {
  let shard = await AsyncStorage.getItem('playerShard');
  let puuid = await AsyncStorage.getItem('playerUuid');
  return `https://pd.${shard}.a.pvp.net/store/v1/wallet/${puuid}`;
}

export async function getStoreUrl() {
  let shard = await AsyncStorage.getItem('playerShard');
  let puuid = await AsyncStorage.getItem('playerUuid');
  return `https://pd.${shard}.a.pvp.net/store/v2/storefront/${puuid}`;
}

export async function getClientInfo(){
  axios.get('https://valorant-api.com/v1/version').then((res)=>{
    //console.log(res.data.data["riotClientVersion"]);
    return res.data.data["riotClientVersion"];
  })
}