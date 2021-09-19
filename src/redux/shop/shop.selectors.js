import { createSelector } from "reselect";

const selectShop = state => state.shop;

//shop.collections come from collections fom Reducer: INITIAL_STATE
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);
  
  export const selectCollection = collectionUrlParam =>
    createSelector(
      [selectCollections],
      collections => collections[collectionUrlParam]
);