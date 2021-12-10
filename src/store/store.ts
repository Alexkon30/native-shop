import { configureStore, combineReducers } from '@reduxjs/toolkit';
import goodsReducer from './reducers/GoodsSlice';
import basketReducer from './reducers/BasketSlice';
import favoriteReducer from './reducers/FavoriteSlice';
import { goodsAPI } from '../services/GoodsService';

const rootReducer = combineReducers({
  goodsReducer,
  basketReducer,
  favoriteReducer,
  [goodsAPI.reducerPath]: goodsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(goodsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
