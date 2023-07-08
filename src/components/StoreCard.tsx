import React from 'react';
import {Text} from 'native-base';
import {View, Image, StyleSheet} from 'react-native';
import GradientContainer from './GptTest';
import {VPIcon} from './CurrencyIcons';
import {skinTiers} from '../constants/tierConstants';

const styles = StyleSheet.create({
  imgContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tierIcon: {
    alignSelf: 'flex-start',
    width: 32,
    height: 32,
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  itemImage: {
    resizeMode: 'contain',
    width: 350,
    height: 145,
  },
  cardDesc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  priceHolder: {flexDirection: 'row', alignItems: 'center'},
});

//Todo : Tier Image, Make gradient modular

function StoreCardb4(props: any) {
  let tier: string = props.tierUuid;
  let gradientBg = skinTiers[tier].gradientColor;
  let tierIcon = skinTiers[tier].iconSrc;
  return (
    <GradientContainer gradient={gradientBg}>
      <View style={styles.imgContainer}>
        <Image
          source={tierIcon ? {uri: tierIcon} : require('../img/prime-tier.png')}
          style={styles.tierIcon}
        />
        <Image
          source={
            props.imgSrc
              ? {uri: props.imgSrc}
              : require('../img/prime-vandal.png')
          }
          resizeMode="contain"
          style={styles.itemImage}
        />
      </View>
      <View style={styles.cardDesc}>
        <Text maxW="269" bold fontSize="xl" color="white">
          {props.itemName ? props.itemName : 'Some Random Store Item'}
        </Text>
        <View style={styles.priceHolder}>
          <VPIcon width={27} height={27} />
          <Text fontSize="xl" color="white">
            {props.price ? ` ${props.price}` : ' 69420'}
          </Text>
        </View>
      </View>
    </GradientContainer>
  );
}

export const StoreCard = React.memo(StoreCardb4);
