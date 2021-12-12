//типы для пропсов

//store types
import { BasketProduct, Product } from './StoreTypes';
//navogation props
import { DrawerScreenProps } from '@react-navigation/drawer';

//пропсы для карточки товара в корзине
export interface BasketCardProps {
  product: BasketProduct;
}

//пропсы для карточки товара в списке
//на основном и экране с избранными товарами
export interface ProductCardProps {
  product: Product;
}

//пропсы для компонента заголовка
export interface HeaderProps {
  title?: string;
}

export type RootDrawerParamList = {
  Home: undefined;
  Favorite: undefined;
  Basket: undefined;
};

type Props = DrawerScreenProps<RootDrawerParamList>;
export type ScreenNavigationProp = Props['navigation'];
