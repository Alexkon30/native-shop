import { createSlice } from '@reduxjs/toolkit';

type Modes = 'Home' | 'Favorite' | 'Basket' | null;

export interface GoodsState {
  goods: Product[];
  sortingMode: Modes;
  searchMode: Modes;
  sortingBy: 'price' | 'name' | 'none';
  searchValue: string;
  isLoading: boolean;
}

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  isFavorite: boolean;
}

const initialState: GoodsState = {
  goods: [],
  sortingMode: null,
  sortingBy: 'none',
  searchMode: null,
  searchValue: '',
  isLoading: true,
};

export const goodsSlice = createSlice({
  name: 'goodsSlice',
  initialState,
  reducers: {
    setGoods(state, action) {
      state.goods = action.payload;
    },
    setSearchMode(state, action) {
      state.searchMode = action.payload;
    },
    setSortingMode(state, action) {
      if (state.sortingMode !== action.payload) {
        state.sortingMode = action.payload;
      } else {
        state.sortingMode = null;
      }
    },
    setSortingBy(state, action) {
      state.sortingBy = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    rateProduct(state, action) {
      for (let elem of state.goods) {
        if (elem.id === action.payload) {
          elem.isFavorite = !elem.isFavorite;
        }
      }
    },
  },
});

export default goodsSlice.reducer;
