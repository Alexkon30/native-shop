import { createSlice } from '@reduxjs/toolkit';

export interface GoodsState {
  goods: Product[];
}

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

const initialState: GoodsState = {
  goods: [
    {
      id: 1,
      image: 'https://appevent.ru/devtasks/img/catalog_item_1.jpg',
      name: 'Браслет Xiaomi Mi Band 4',
      price: 1790,
    },
    {
      id: 2,
      image: 'https://appevent.ru/devtasks/img/catalog_item_2.jpg',
      name: 'Умная колонка Apple HomePod',
      price: 29490,
    },
    {
      id: 3,
      image: 'https://appevent.ru/devtasks/img/catalog_item_3.jpg',
      name: 'Робот-пылесос Xiaomi Mijia Sweeping Vacuum Cleaner 1C',
      price: 15000,
    },
    {
      id: 4,
      image: 'https://appevent.ru/devtasks/img/catalog_item_4.jpg',
      name: 'Aqara Выключатель настенный двухклавишный Wall Switch',
      price: 2000,
    },
    {
      id: 5,
      image: 'https://appevent.ru/devtasks/img/catalog_item_5.jpg',
      name: 'Ноутбук Acer ASPIRE 3 (A315-41G)',
      price: 27990,
    },
    {
      id: 6,
      image: 'https://appevent.ru/devtasks/img/catalog_item_6.jpg',
      name: 'Смартфон Samsung Galaxy A10',
      price: 7450,
    },
    {
      id: 7,
      image: 'https://appevent.ru/devtasks/img/catalog_item_7.jpg',
      name: 'Умная колонка Яндекс.Станция Мини',
      price: 3999,
    },
    {
      id: 8,
      image: 'https://appevent.ru/devtasks/img/catalog_item_8.jpg',
      name: 'Фотоаппарат Canon EOS 90D Body',
      price: 79990,
    },
    {
      id: 9,
      image: 'https://appevent.ru/devtasks/img/catalog_item_9.jpg',
      name: 'Ноутбук Apple MacBook Pro 16 with Retina display',
      price: 190640,
    },
    {
      id: 10,
      image: 'https://appevent.ru/devtasks/img/catalog_item_10.jpg',
      name: 'Часы Samsung Galaxy Watch (46 mm)',
      price: 18480,
    },
    {
      id: 11,
      image: 'https://appevent.ru/devtasks/img/catalog_item_11.jpg',
      name: 'Умная колонка Яндекс.Станция',
      price: 10990,
    },
    {
      id: 12,
      image: 'https://appevent.ru/devtasks/img/catalog_item_12.jpg',
      name: 'Часы Apple Watch Series 3 42mm',
      price: 17990,
    },
    {
      id: 13,
      image: 'https://appevent.ru/devtasks/img/catalog_item_13.jpg',
      name: 'Фотоаппарат Canon EOS M6 Mark II Kit',
      price: 73990,
    },
    {
      id: 14,
      image: 'https://appevent.ru/devtasks/img/catalog_item_14.jpg',
      name: 'Умная колонка Prestigio Smartmate Маяк Edition',
      price: 6990,
    },
    {
      id: 15,
      image: 'https://appevent.ru/devtasks/img/catalog_item_15.jpg',
      name: 'Шагомер Smarterra Fitmaster Run',
      price: 490,
    },
  ],
};

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
});

export default goodsSlice.reducer;
