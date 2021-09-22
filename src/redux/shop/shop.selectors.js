import { createSelector } from "reselect";

//Retrieve shop from the store
const selectShop = state => state.shop;

//shop.collections come from collections fom Reducer: INITIAL_STATE
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => 
    Object.keys(collections).map(key => collections[key])
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    //set properties as keys from object (puzzle) 
    //and convert into an array
    collections => 
    Object.keys(collections).map(key => collections[key])
)
  
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);
        