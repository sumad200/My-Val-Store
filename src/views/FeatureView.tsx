import React from 'react';
import {StoreList} from '../components/StoreList';
import {FeaturedHeader} from '../components/FeaturedHeader';

function FeatureViewb4(props: any) {
  return (
    <>
      {props.featuredStore.map((ele: any) => (
        <>
          <StoreList storeList={ele.skins}>
            <FeaturedHeader
              uuid={ele.bundleUuid}
              timeLeft={props.now + ele.timeLeft * 1000}
              cost={ele.combinedCost}
            />
          </StoreList>
        </>
      ))}
    </>
  );
}

export const FeatureView = React.memo(FeatureViewb4);
