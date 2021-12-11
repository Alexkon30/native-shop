import { createSlice } from '@reduxjs/toolkit';

export interface BasketState {
  goods: BasketProduct[];
}

export interface BasketProduct {
  id: number;
  image: string;
  name: string;
  price: number;
  count: number;
}

const initialState: BasketState = {
  goods: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.goods.push({ ...action.payload, count: 1 });
    },
    increaseCount(state, action) {
      for (let elem of state.goods) {
        if (elem.id === action.payload) {
          elem.count++;
        }
      }
    },
    decreaseCount(state, action) {
      for (let elem of state.goods) {
        if (elem.id === action.payload) {
          elem.count--;
        }
      }
    },
    deleteProduct(state, action) {
      state.goods = JSON.parse(JSON.stringify(state.goods)).filter(
        (item: BasketProduct) => item.id !== action.payload
      );
    },
    resetBasket(state) {
      state.goods = [];
    },
  },
});

export default basketSlice.reducer;
