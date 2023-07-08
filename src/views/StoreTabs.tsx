/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {TryRetry} from './TryRetry';
import {KingdomcredIcon, VPIcon, Radianite} from '../components/CurrencyIcons';
import {IconBox} from '../components/IconBox';
import {Heading, Box, Text} from 'native-base';
import {StoreList} from '../components/StoreList';

const FirstRoute = () => <TryRetry />;

const ThirdRoute = () => <View style={{flex: 1, backgroundColor: '#673ab7'}} />;

export function StoreTabs() {
  const [dailyStore, setDailyStore] = useState([
    {
      displayName: 'Endeavour Operator',
      price: 875,
      contentTierUuid: '12683d76-48d7-84a3-4e09-6985794f0445',
      displayIcon:
        'https://media.valorant-api.com/weaponskins/bdf1484c-44a7-2ef1-3d21-45b66ff8a89f/displayicon.png',
    },
    {
      displayName: 'Sakura Vandal',
      displayIcon:
        'https://media.valorant-api.com/weaponskins/f946ef5c-46ab-e146-a712-1d99a1651356/displayicon.png',
      price: 1275,
      contentTierUuid: '0cebb8be-46d7-c12a-d306-e9907bfc5a25',
    },
    {
      displayName: 'Sarmad Phantom',
      contentTierUuid: '0cebb8be-46d7-c12a-d306-e9907bfc5a25',
      displayIcon:
        'https://media.valorant-api.com/weaponskins/cd07ba8f-4dae-0410-582e-71acdef102ce/displayicon.png',
      price: 1275,
    },
    {
      displayName: 'Oni Bulldog',
      contentTierUuid: '60bca009-4182-7998-dee7-b8a2558dc369',
      displayIcon:
        'https://media.valorant-api.com/weaponskins/325d2274-487b-8672-84d6-6db8e9798447/displayicon.png',
      price: 1775,
    },
  ]);

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

  const [index, setIndex] = useState(1);

  const layout = useWindowDimensions();

  const [routes] = useState([
    {key: 'first', title: 'Featured'},
    {key: 'second', title: 'Offers'},
    {key: 'se', title: 'Night Market'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute />;
      case 'second':
        return <StoreList storeList={dailyStore} />;
      case 'se':
        return <ThirdRoute />;
    }
  };

  const tabLabelStyle = {
    fontFamily: 'mark-pro--medium',
    fontSize: 13,
    fontWeight: 500,
  };

  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Heading
          color="white"
          size="xl"
          fontFamily="heading"
          pt="3.5"
          pb="2.5"
          pl="1.5">
          My Store
        </Heading>
        <Box pt="2.5" pb="2.5">
          <Box flexDirection="row" p="0" m="0">
            {index !== 2 && (
              <IconBox>
                <VPIcon />
                <Text color="white"> 69420</Text>
              </IconBox>
            )}
            {index !== 2 && (
              <IconBox>
                <Radianite />
                <Text color="white"> 999999</Text>
              </IconBox>
            )}
            {index === 2 && (
              <IconBox>
                <KingdomcredIcon />
                <Text color="white"> 10000</Text>
              </IconBox>
            )}
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
    </>
  );
}
