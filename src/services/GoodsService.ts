//RTK Query для запроса к API

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
//types
import { Product } from '../types/StoreTypes';

export const goodsAPI = createApi({
  reducerPath: 'goodsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://appevent.ru/',
  }),
  endpoints: (build) => ({
    //запрос списка товаров
    fetchAllGoods: build.query<Product[], null>({
      query: () => 'dev/task1/catalog',
      //расширить список товаров, добавив каждому
      //значение isFavorite: false
      transformResponse: (response: { items: Product[] }) =>
        response.items.map((item) => ({ ...item, isFavorite: false })),
    }),
  }),
});
