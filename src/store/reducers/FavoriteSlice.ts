import { createSlice } from '@reduxjs/toolkit';

export interface FavoriteState {
  goods: Product[];
}

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
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
