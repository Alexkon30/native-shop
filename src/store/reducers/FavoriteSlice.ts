import { createSlice } from '@reduxjs/toolkit';
import { Product } from './GoodsSlice';

export interface FavoriteState {
  goods: Product[];
}

const initialState: FavoriteState = {
  goods: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
});

export default favoriteSlice.reducer;
