import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {StoreCard} from './StoreCard';

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 7,
  },
});

function Separator() {
  // eslint-disable-next-line react-native/no-inline-styles
  return <View style={{height: 40}} />;
}

function StoreListb4(props: any) {
  return (
    <FlatList
      ListHeaderComponent={props.children}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      data={props.storeList}
      ItemSeparatorComponent={Separator}
      renderItem={(ele: any) => (
        <StoreCard
          price={ele.item.price}
          tierUuid={ele.item.contentTierUuid}
          itemName={ele.item.displayName}
          imgSrc={ele.item.displayIcon}
        />
      )}
    />
  );
}

export const StoreList = React.memo(StoreListb4);
