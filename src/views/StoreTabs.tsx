/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {TryRetry} from './TryRetry';
import {KingdomcredIcon, VPIcon, Radianite} from '../components/CurrencyIcons';
import {IconBox} from '../components/IconBox';
import {Heading, Box, Text} from 'native-base';
import {StoreCard} from '../components/StoreCard';
import {BlurView} from '@react-native-community/blur';

const FirstRoute = () => <TryRetry />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const ThirdRoute = () => (
  <>
    <StoreCard />
  </>
);

export function StoreTabs() {
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white'}}
      labelStyle={tabLabelStyle}
      style={{backgroundColor: 'black'}}
      scrollEnabled={true}
      tabStyle={{width: 'auto'}}
      gap={20}
    />
  );

  const [index, setIndex] = useState(2);

  const layout = useWindowDimensions();

  const [routes] = useState([
    {key: 'first', title: 'Featured'},
    {key: 'second', title: 'Offers'},
    {key: 'se', title: 'Night Market'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    se: ThirdRoute,
  });

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
