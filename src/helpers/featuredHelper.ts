type StoreRecord = Record<string, any>;
export function featuredHelper(storeResp: any, allSkinData: any): any[] {
  let resp = storeResp;
  let parsedDailyStore: any[] = [];
  let storeresp = resp.FeaturedBundle.Bundles;

  storeresp.forEach(bundle => {
    let offerDetails: StoreRecord = {};
    offerDetails.combinedCost =
      bundle.TotalDiscountedCost[Object.keys(bundle.TotalDiscountedCost)[0]];
    offerDetails.timeLeft = bundle.DurationRemainingInSeconds;
    offerDetails.bundleUuid = bundle.DataAssetID;
    offerDetails.skins = [];
    for (let i = 0; i < bundle.Items.length; i++) {
      if (
        bundle.Items[i].Item.ItemTypeID ===
        'e7c63390-eda7-46e0-bb7a-a6abdacd2433'
      ) {
        //console.log('hi');
        let skinRecord: StoreRecord = {};
        skinRecord.price = bundle.Items[i].BasePrice;
        for (let j = 0; j < allSkinData.length; j++) {
          let skin = allSkinData[j];
          if (skin.levels[0].uuid === bundle.Items[i].Item.ItemID) {
            //console.log('tmkcbsdkmkc');
            skinRecord.displayIcon = skin.levels[0].displayIcon;
            skinRecord.displayName = skin.displayName;
            skinRecord.contentTierUuid = skin.contentTierUuid;
            offerDetails.skins.push(skinRecord);
            break;
          }
        }
      }
    }
    parsedDailyStore.push(offerDetails);
  });
  //console.log(parsedDailyStore);
  return parsedDailyStore;
}
