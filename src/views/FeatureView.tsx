import React from 'react';
import {StoreList} from '../components/StoreList';

function FeatureViewb4(props) {
  return (
    <>
      {props.featuredStore.map(ele => (
        <StoreList storeList={ele.skins} />
      ))}
    </>
  );
}

export const FeatureView = React.memo(FeatureViewb4);
