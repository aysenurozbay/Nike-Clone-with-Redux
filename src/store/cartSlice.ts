import {PayloadAction, createSelector, createSlice} from '@reduxjs/toolkit';
import {CartItemType, ProductType} from '../utils/Types';

export interface ProductSliceState {
  items: CartItemType[];
  delivertFee: number;
  freeDeliveryFrom: number;
}

const initialState: ProductSliceState = {
  items: [],
  delivertFee: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (
      state,
      action: PayloadAction<{product: ProductType; size: number}>,
    ) => {
      const newProduct = action.payload.product;
      const productSize = action.payload.size;

      const cartItem = state.items.find(
        item => item.product.id === newProduct.id,
      );

      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({product: newProduct, quantity: 1, size: productSize});
      }
    },
    changeQuantity: (
      state,
      action: PayloadAction<{productId: string; amount: number}>,
    ) => {
      const {productId, amount} = action.payload;
      const cartItem = state.items.find(item => item.product.id === productId);

      if (cartItem) {
        cartItem.quantity += amount;
      }

      //remove item if it is 0

      if (cartItem?.quantity <= 0) {
        state.items = state.items.filter(item => item !== cartItem);
      }
    },
  },
});

export const selectNumberOfItem = state => state.cart.items.length;

export const selectSubTotal = state =>
  state.cart.items.reduce(
    (sum: number, cartItem: CartItemType) =>
      sum + cartItem.product.price * cartItem.quantity,
    0,
  );

const cartSelector = state => state.cart;

//useselector -> to create new selector with other selectors
export const selectDeliveryPrice = createSelector(
  cartSelector,
  selectSubTotal,
  (cart, subTotal) => (subTotal > cart.freeDeliveryFrom ? 0 : cart.delivertFee),
);

export const totalPrice = createSelector(
  selectDeliveryPrice,
  selectSubTotal,
  (sub, delivery) => sub + delivery,
);
