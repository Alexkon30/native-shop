import React, { FC, useMemo, useState } from 'react'
import { Text, View, Image, StyleSheet, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import GoodsSlice, { goodsSlice } from '../store/reducers/GoodsSlice';
import { basketSlice } from '../store/reducers/BasketSlice';
import { useNavigation } from '@react-navigation/native';

import { Product } from '../store/reducers/GoodsSlice';

import { HomeScreenNavigationProp } from '../../App'

interface CardProps {
  product: Product
}

const ProductCard: FC<CardProps> = ({ product }) => {
  const [check, setCheck] = useState(false)

  const dispatch = useAppDispatch()
  const navigation = useNavigation<HomeScreenNavigationProp>()

  const { rateProduct } = goodsSlice.actions
  const { addProduct } = basketSlice.actions
  const { goods: order } = useAppSelector(state => state.basketReducer)

  const status = useMemo(() => {
    return order.filter(item => item.id === product.id).length
  }, [order])



  return (
    <View style={styles.product}>
      <View style={{ justifyContent: 'center' }}>
        <Image
          style={styles.img}
          source={{
            uri: `${product.image}`,
          }}
        />
      </View>
      <View style={{
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'space-between',
      }}>
        <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>
          {product.name}
        </Text>

        <Text style={{ marginBottom: 5 }}>
          Price: {product.price}
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ width: '50%' }}>

            {status
              ? <Button title='to order' color='teal' onPress={() => navigation.navigate('Basket')} />
              : <Button title='add' color='cornflowerblue' onPress={() => {
                dispatch(addProduct(product))
                setCheck(true)
              }} />
            }
          </View>
          <AntDesign name={`${product.isFavorite ? 'heart' : 'hearto'}`} size={24} color="cadetblue"
            onPress={() => dispatch(rateProduct(product.id))} />
        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    resizeMode: 'cover'
  },
  product: {
    flexDirection: 'row',
    height: 120,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'lightblue',
    margin: 5,
    padding: 5

  }
})

export default ProductCard
