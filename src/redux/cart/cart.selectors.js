import { createSelector } from "reselect";

//Input selector or Output selector
//Input
const selectCart = state => state.cart;

//Rely on selectCart
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

//Rely on selectCartItems
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
    )
);