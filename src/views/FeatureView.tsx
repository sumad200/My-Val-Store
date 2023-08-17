import React from 'react';
import {StoreList} from '../components/StoreList';

type bundleHeader = Record<string, any>;

function FeatureViewb4(props: any) {
  let listData = [];

  props.featuredStore.forEach(ele => {
    let headerData: bundleHeader = {};
    headerData['uuid'] = ele.bundleUuid;
    headerData['timeLeft'] = props.now + ele.timeLeft * 1000;
    headerData['cost'] = ele.combinedCost;
    headerData['featured'] = true;
    ele.skins.unshift(headerData);
    //console.log(ele.skins);
    listData = listData.concat(ele.skins);
  });

  //console.log(listData);

  return <StoreList storeList={listData} />;
}

export const FeatureView = React.memo(FeatureViewb4);
