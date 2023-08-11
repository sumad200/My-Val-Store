type StoreRecord = Record<string, string>;
export function nightMarketHelper(store: any, allSkinData: any): any[] {
  let resp = store;
  let parsedNightMarket: any[] = [];

  if (resp.BonusStore) {
    let nightMarketOffers = resp.BonusStore.BonusStoreOffers;

    nightMarketOffers.forEach(ele => {
      let offerDetails: StoreRecord = {};
      offerDetails.price = ele.DiscountCosts[Object.keys(ele.DiscountCosts)[0]];

      for (let i = 0; i < allSkinData.length; i++) {
        let skin = allSkinData[i];
        if (skin.levels[0].uuid === ele.Offer.OfferID) {
          offerDetails.displayIcon = skin.levels[0].displayIcon;
          offerDetails.displayName = skin.displayName;
          offerDetails.contentTierUuid = skin.contentTierUuid;
          parsedNightMarket.push(offerDetails);
          break;
        }
      }
    });
  }
  return parsedNightMarket;
}
