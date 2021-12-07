import { createSlice } from '@reduxjs/toolkit';

export interface GoodsState {
  goods: Product[];
}

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

const initialState: GoodsState = {
  goods: [],
};

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
});

export default goodsSlice.reducer;
