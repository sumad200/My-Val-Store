import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  useWindowDimensions,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {TryRetry} from './TryRetry';
import {VPIcon, Radianite} from '../components/CurrencyIcons';
import {IconBox} from '../components/IconBox';
import {getWalletUrl, getStoreUrl, getClientInfo} from '../helpers/urlHelper';
import {Heading, Box, Text} from 'native-base';
import {dailyOffersHelper} from '../helpers/dailyOffersHelper';
import {StoreList} from '../components/StoreList';
import axios, {AxiosInstance} from 'axios';
import {featuredHelper} from '../helpers/featuredHelper';
import * as SecureStore from 'expo-secure-store';
import {AuthContext} from '../helpers/AuthContext';
import {FeatureView} from './FeatureView';
import {StoreTitleHeader} from '../components/DailyHeader';
import {NoNightMarket} from '../components/NoNightMarket';
import {nightMarketHelper} from '../helpers/nightMarketHelper';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 0,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

let client: AxiosInstance;
let walletUrl: string;
let storeUrl: string;

async function gameDataHeaders() {
  let entToken = await SecureStore.getItemAsync('val_ent_token');
  let authToken = await SecureStore.getItemAsync('val_access_token');
  walletUrl = await getWalletUrl();
  storeUrl = await getStoreUrl();
  let clientVersion = await getClientInfo();
  //console.log(storeUrl);

  client = axios.create({
    headers: {
      'X-Riot-Entitlements-JWT': `${entToken}`,
      Authorization: `Bearer ${authToken}`,
      'X-Riot-ClientPlatform': 'ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9',
      'X-Riot-ClientVersion': `${clientVersion}`
    },
  });
}

export function StoreTabs() {
  //console.log('tabs ran');
  const {setLoggedIn} = useContext(AuthContext);
  const [store, setStore] = useState({});
  const [dailyStore, setDailyStore] = useState([]);
  const [nightMarket, setNightMarket] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [offersTimer, setOffersTimer] = useState();
  const [nightMarketTimer, setNightMarketTimer] = useState();
  const [reqTime, setReqTime] = useState();
  const [allSkinData, setAllSkinData] = useState([]);
  const [vpBalance, setVpBalance] = useState(69420);
  const [rpBalance, setRpBalance] = useState(99999);

  useEffect(() => {
    async function fetchWallet() {
      await gameDataHeaders();
      client
        .get(walletUrl)
        .then(res => {
          let balances = res.data.Balances;
          setVpBalance(balances['85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741']);
          setRpBalance(balances['e59aa87c-4cbf-517a-5983-6e81511be9b7']);
        })
        .catch(err => {
          if (err.response) {
            if (err.response.status === 400) {
              //console.log('relogin needed');
              setLoggedIn(false);
            }
          }
        });
    }
    fetchWallet();
  }, []);

  useEffect(() => {
    axios
      .get('https://valorant-api.com/v1/weapons/skins')
      .then(res => {
        let skins = res.data.data;
        setAllSkinData(skins);
      })
      .catch(err => {
        //console.log(`Oh No! some error - ${err}`);
      });
  }, []);

  useEffect(() => {
    async function fetchStore() {
      await gameDataHeaders();
      client
        .get(storeUrl)
        .then(res => {
          //console.log(res.data);
          setStore(res.data);
          let now = new Date().getTime();
          setReqTime(now);
          setOffersTimer(
            now +
              res.data.SkinsPanelLayout
                .SingleItemOffersRemainingDurationInSeconds *
                1000,
          );
          if (res.data.BonusStore) {
            setNightMarketTimer(
              now +
                res.data.BonusStore.BonusStoreRemainingDurationInSeconds * 1000,
            );
          }
        })
        .catch(err => {
          //console.log(`Oh No! some error - ${err}`);
        });
    }
    fetchStore();
  }, [storeUrl]);

  useEffect(() => {
    if (allSkinData.length > 0 && Object.keys(store).length > 0) {
      setDailyStore(dailyOffersHelper(store, allSkinData));
      setFeatured(featuredHelper(store, allSkinData));
      setNightMarket(nightMarketHelper(store, allSkinData));
    }
  }, [allSkinData, store]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white'}}
      labelStyle={tabLabelStyle}
      style={{backgroundColor: 'black'}}
      scrollEnabled={true}
      tabStyle={{width: 'auto'}}
      gap={55}
    />
  );

  const [index, setIndex] = useState(0);

  const layout = useWindowDimensions();

  const [routes] = useState([
    {key: 'first', title: 'Featured'},
    {key: 'second', title: 'Offers'},
    {key: 'se', title: 'Night Market'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <FeatureView now={reqTime} featuredStore={featured} />;
      case 'second':
        return (
          <>
            <StoreTitleHeader title="DAILY OFFERS" timeLeft={offersTimer} />
            <StoreList storeList={dailyStore} />
          </>
        );
      case 'se':
        if (nightMarket.length <= 0) {
          return <NoNightMarket />;
        } else {
          return (
            <>
              <StoreTitleHeader
                title="NIGHT.MARKET"
                timeLeft={nightMarketTimer}
              />
              <StoreList storeList={nightMarket} />
            </>
          );
        }
    }
  };

  const tabLabelStyle = {
    fontFamily: 'mark-pro--medium',
    fontSize: 13,
    fontWeight: 500,
  };

  return (
    <>
      <SafeAreaView style={styles.MainContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Heading
            color="white"
            size="xl"
            fontFamily="heading"
            pt="3.5"
            pb="2.5"
            pl="1.5">
            My Val Store
          </Heading>
          <Box pt="2.5" pb="2.5">
            <Box flexDirection="row" p="0" m="0">
              <IconBox>
                <VPIcon />
                <Text color="white">{` ${vpBalance}`}</Text>
              </IconBox>
              <IconBox>
                <Radianite />
                <Text color="white">{` ${rpBalance}`}</Text>
              </IconBox>
              {/*index === 2 && (
                <IconBox>
                  <KingdomcredIcon />
                  <Text color="white"> 10000</Text>
                </IconBox>
              )*/}
            </Box>
          </Box>
        </View>
        <TabView
          navigationState={{index, routes}}
          renderTabBar={renderTabBar}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
      </SafeAreaView>
    </>
  );
}
