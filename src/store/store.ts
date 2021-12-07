import { configureStore, combineReducers } from '@reduxjs/toolkit';
import goodsReducer from './reducers/GoodsSlice';
import basketReducer from './reducers/BasketSlice';
import favoriteReducer from './reducers/FavoriteSlice';

const rootReducer = combineReducers({
  goods: goodsReducer,
  basket: basketReducer,
  favorite: favoriteReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
