//компонент списка корзины

//react type, hook
import React, { FC, useMemo } from 'react'
//native components
import { Text, View, Button, ScrollView, StyleSheet } from 'react-native'
//icons
import { FontAwesome5 } from '@expo/vector-icons';
//компонент карточки товара в корзине
import { BasketProductCard } from './BasketProductCard'
//hooks
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useNavigation } from '@react-navigation/native'
//reducers
import { basketSlice } from '../store/reducers/BasketSlice'
//types
import { ScreenNavigationProp } from '../types/PropTypes'
import { BasketProduct } from '../types/StoreTypes'


export const BasketList: FC = () => {

  //получаем функцию для взаимодействия с состоянием
  const dispatch = useAppDispatch()

  //получаем объект навигации
  const navigation = useNavigation<ScreenNavigationProp>()

  //извлекаем state корзины с помощью деструктуризации
  const { goods } = useAppSelector(state => state.basketReducer)

  //извлекаем actions с помощью деструктуризации
  const { resetBasket } = basketSlice.actions


  //общая стоимость всех товаров в корзине
  const totalPrice = useMemo<number>(() => {
    return goods.reduce((acc: number, b: BasketProduct) => {
      return acc + b.price * b.count
    }, 0)

    //значение будет пересчитываться при каждом изменении в корзине
  }, [goods])


  return (
    <View style={styles.container}>
      {//условный рендеринг в зависимости от наличия товаров в корзине
        goods.length
          ?
          //отобразить список товаров если в корзине что-то есть
          <View style={styles.listContainer}>
            <ScrollView>
              {goods.map(item => <BasketProductCard product={item} key={item.id} />)}
              <Text style={styles.listTotal}>Total: {totalPrice}</Text>
              <View style={styles.listButton}>
                <Button title='Buy' color='#A3C0E9' onPress={() => {
                  dispatch(resetBasket())
                  navigation.navigate('Home')
                }} />
              </View>
            </ScrollView>
          </View >
          :
          //отобразить уведомление о том, что корзина пуста
          //и кнопку для перехода на главный экран
          <View style={styles.emptyContainer}>
            <FontAwesome5 name="shopping-basket" size={100} color="#8AB0E9" />
            <Text style={styles.emptyHeader}>Basket is empty</Text>
            <View style={styles.emptyButton}>
              <Text onPress={() => navigation.navigate('Home')}
                style={styles.emptyButtonText}>Go shopping</Text>
            </View>
          </View>
      }
    </View >
  )
}

//cтили
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emptyHeader: {
    marginBottom: 20,
    fontSize: 20,
    color: 'dodgerblue'
  },
  emptyButton: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'lightblue',
    backgroundColor: 'lightblue',
    padding: 8,
    alignItems: 'center'
  },
  emptyButtonText: {
    fontSize: 18,
    color: 'white'
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContainer: {
    padding: 7
  },
  listButton: {
    marginBottom: 100,
    width: 150,
    alignSelf: 'center',
    marginTop: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#A3C0E9'
  },
  listTotal: {
    fontSize: 18,
    alignSelf: 'flex-end',
    marginRight: 14
  }
})
