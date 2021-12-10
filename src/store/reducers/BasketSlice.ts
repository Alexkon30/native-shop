import { createSlice } from '@reduxjs/toolkit';

export interface BasketState {
  goods: Product[];
  totalPrice: number;
}

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  count: number;
}

const initialState: BasketState = {
  goods: [],
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
});

export default basketSlice.reducer;
