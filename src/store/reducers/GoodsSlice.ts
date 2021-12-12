//slice для работы с базовыми товарами

//функция для создания слайса
import { createSlice } from '@reduxjs/toolkit';
//types
import { GoodsState } from '../../types/StoreTypes';

//начальное состояние
const initialState: GoodsState = {
  goods: [],
  sortingMode: null,
  sortingBy: 'none',
  searchValue: '',
  isLoading: true,
};

export const goodsSlice = createSlice({
  name: 'goodsSlice',
  initialState,
  reducers: {
    //установка списка товаров
    setGoods(state, action) {
      state.goods = action.payload;
    },
    setSortingMode(state, action) {
      //проверка на то, была ли установка вызвана
      //ранее из этой же директории
      if (state.sortingMode === action.payload) {
        //спрятать компонент сортировки в случае совпадения
        //и обнулить "предыдущую" отрисовку
        state.sortingMode = null;
      } else {
        //открыть компонент сортировки
        //для данной директории
        state.sortingMode = action.payload;
      }
    },
    //установка способа сортировки
    setSortingBy(state, action) {
      state.sortingBy = action.payload;
    },
    //уставнока поиска по названию
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    //установка флага загрузки
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    //смена значения isFavorite на противоположное для товара с указанным id
    rateProduct(state, action) {
      state.goods.forEach((item) => {
        if (item.id === action.payload) {
          item.isFavorite = !item.isFavorite;
        }
      });
    },
  },
});

export default goodsSlice.reducer;
