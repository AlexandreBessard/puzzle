import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
    puzzle: 1
};

//Retrieve shop from the store
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
            collections => collections.find(
                collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
            )
        );