import AsyncStorage from '@react-native-async-storage/async-storage';

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
