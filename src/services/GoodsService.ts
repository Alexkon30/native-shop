import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Product, GoodsState } from '../store/reducers/GoodsSlice';

export const goodsAPI = createApi({
  reducerPath: 'goodsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://appevent.ru/dev/task1/catalog',
  }),
  endpoints: (build) => ({
    fetchAllGoods: build.query<Product[], null>({
      query: () => '',
      transformResponse: (response: { items: Product[] }) =>
        response.items.map((item) => ({ ...item, isFavorite: false })),
    }),
  }),
});
