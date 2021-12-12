//настройка хранилища для приложения

//функции для конфигурации
import { configureStore, combineReducers } from '@reduxjs/toolkit';
//reducer для запроса списка товаров
import { goodsAPI } from '../services/GoodsService';
//reducers
import goodsReducer from './reducers/GoodsSlice';
import basketReducer from './reducers/BasketSlice';

//объединение всех редьюсеров
const rootReducer = combineReducers({
  goodsReducer,
  basketReducer,
  [goodsAPI.reducerPath]: goodsAPI.reducer,
});

//функция для инициализации хранилища
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
