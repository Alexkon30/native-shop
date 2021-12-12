//карточка товара в корзине

//react type
import React, { FC } from 'react'
//native components
import { View, Text, Button, StyleSheet } from 'react-native'
//icons
import { Entypo } from '@expo/vector-icons'
//reducers
import { basketSlice } from '../store/reducers/BasketSlice'
//hooks
import { useAppDispatch } from '../hooks/redux'
//types
import { BasketCardProps } from '../types/PropTypes'


export const BasketProductCard: FC<BasketCardProps> = ({ product }) => {

  //получаем функцию для взаимодействия с состоянием
  const dispatch = useAppDispatch()

  //извлекаем actions с помощью деструктуризации
  const { increaseCount, decreaseCount, deleteProduct } = basketSlice.actions

  return (
    <View style={styles.container}>
      <View style={styles.productName}>
        <Text>{product.name}</Text>
      </View>
      <View style={styles.countButtons}>
        <Button title='-' color='#608FD4' onPress={() => dispatch(decreaseCount(product.id))}
          //кнопка станет неактивной при значении счетчика меньше 2
          disabled={product.count < 2}
        />
        <Text style={styles.countText}>{product.count}</Text>
        <Button title='+' color='#569D8F' onPress={() => dispatch(increaseCount(product.id))} />
      </View>
      <View style={styles.totalPrice}>
        <Text>{//расчет стоимости с учетом количества
          product.price * product.count}</Text>
      </View>
      <View>
        <Entypo name="squared-cross" size={24} color="black"
          onPress={() => dispatch(deleteProduct(product.id))} />
      </View>
    </View>
  )
}

//стили
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  productName: {
    width: '55%'
  },
  countButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5
  },
  countText: {
    marginHorizontal: 5
  },
  totalPrice: {
    flex: 1,
    alignItems: 'center'
  }
})
