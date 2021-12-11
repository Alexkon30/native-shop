import React, { FC } from 'react'
import { View, Text, Button } from 'react-native'
import { BasketProduct, basketSlice } from '../store/reducers/BasketSlice'
import { Entypo } from '@expo/vector-icons';
import { useAppDispatch } from '../hooks/redux';

interface BasketCardProps {
  product: BasketProduct
}

const BasketProductCard: FC<BasketCardProps> = ({ product }) => {

  const dispatch = useAppDispatch()
  const { increaseCount, decreaseCount, deleteProduct } = basketSlice.actions

  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 1 }}>
        <Text>{product.name}</Text>
      </View>
      <View>
        <Button title='-' onPress={() => dispatch(decreaseCount(product.id))} disabled={product.count < 2} />
        <Text>{product.count}</Text>
        <Button title='+' onPress={() => dispatch(increaseCount(product.id))} />
      </View>
      <View>
        <Text>{product.price}</Text>
      </View>
      <View>
        <Entypo name="squared-cross" size={24} color="black" onPress={() => dispatch(deleteProduct(product.id))} />
      </View>
    </View>
  )
}

export default BasketProductCard
