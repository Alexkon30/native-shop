//slice для работы с товарами в корзине

//функция для создания слайса
import { createSlice } from '@reduxjs/toolkit';
//types
import { BasketState } from '../../types/StoreTypes';

//начальное состояние
const initialState: BasketState = {
  goods: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    //добавить товар в корзину
    addProduct(state, action) {
      state.goods.push({ ...action.payload, count: 1 });
    },
    //увеличить счетчик для товара с указанным id
    increaseCount(state, action) {
      state.goods.forEach((item) => {
        if (item.id === action.payload) {
          item.count++;
        }
      });
    },
    //уменьшить счетчик для товара с указанным id
    decreaseCount(state, action) {
      state.goods.forEach((item) => {
        if (item.id === action.payload) {
          item.count--;
        }
      });
    },
    //удалить из корзины товар с указанным id
    deleteProduct(state, action) {
      let index = state.goods.findIndex((item) => item.id === action.payload);
      state.goods.splice(index, 1);
    },
    //очистить корзину
    resetBasket(state) {
      state.goods = [];
    },
  },
});

export default basketSlice.reducer;
