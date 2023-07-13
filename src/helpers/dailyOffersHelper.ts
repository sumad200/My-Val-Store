type StoreRecord = Record<string, string>;
export function dailyOffersHelper(store: any, allSkinData: any): any[] {
  let resp = store;
  //console.log(resp);
  let parsedDailyStore: any[] = [];
  let storeresp = resp.SkinsPanelLayout.SingleItemStoreOffers;

  storeresp.forEach(offer => {
    let offerDetails: StoreRecord = {};
    offerDetails.price = offer.Cost[Object.keys(offer.Cost)[0]];

    for (let i = 0; i < allSkinData.length; i++) {
      let skin = allSkinData[i];
      if (skin.levels[0].uuid === offer.OfferID) {
        offerDetails.displayIcon = skin.levels[0].displayIcon;
        offerDetails.displayName = skin.displayName;
        offerDetails.contentTierUuid = skin.contentTierUuid;
        parsedDailyStore.push(offerDetails);
        break;
      }
    }
  });
  return parsedDailyStore;
}
