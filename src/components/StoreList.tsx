import React from 'react';
import {View} from 'react-native';
import {StoreCard} from './StoreCard';
import {FeaturedHeader} from './FeaturedHeader';
import {FlashList} from '@shopify/flash-list';



function Separator() {
  // eslint-disable-next-line react-native/no-inline-styles
  return <View style={{height: 40}} />;
}

function StoreListb4(props: any) {
  return (
    <FlashList
      showsVerticalScrollIndicator={false}
      data={props.storeList}
      estimatedItemSize={7}
      ItemSeparatorComponent={Separator}
      renderItem={({item, index}) => {
        if(item.featured === true){
          return(
            <FeaturedHeader uuid={item.uuid} cost={item.cost} timeLeft={item.timeLeft} />
          )
        }
        return(
        <StoreCard
          price={item.price}
          tierUuid={item.contentTierUuid}
          itemName={item.displayName}
          imgSrc={item.displayIcon}
        />
        )}}
    />
  );
}

export const StoreList = React.memo(StoreListb4);
