//типы для хранилищ

//допустимые варианты режима сортировки
type Modes = 'Home' | 'Favorite' | 'Basket' | null;

//интерфейс основного хранилища
export interface GoodsState {
  goods: Product[];
  sortingMode: Modes;
  sortingBy: 'price' | 'name' | 'default';
  searchValue: string;
  isLoading: boolean;
}

//интерфейс основного продукта
export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  isFavorite: boolean;
}

//интерфейс хранилища корзины
export interface BasketState {
  goods: BasketProduct[];
}

//интерфейс продукта в корзине
export interface BasketProduct {
  id: number;
  image: string;
  name: string;
  price: number;
  count: number;
}
