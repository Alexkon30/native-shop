import React, { FC, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Text, View, Button, ScrollView, StyleSheet } from 'react-native'
import BasketProductCard from './BasketProductCard'
import { BasketProduct, basketSlice } from '../store/reducers/BasketSlice'

import { HomeScreenNavigationProp } from '../../App'
import { useNavigation } from '@react-navigation/native'


const BasketList: FC = () => {
  const dispatch = useAppDispatch()
  const { goods } = useAppSelector(state => state.basketReducer)
  const { resetBasket } = basketSlice.actions
  const navigation = useNavigation<HomeScreenNavigationProp>()

  const totalPrice = useMemo(() => {
    return goods.reduce((acc: number, b: BasketProduct) => {
      return acc + b.price * b.count
    }, 0)
  }, [goods])


  return (
    <View style={{ flex: 1 }}>
      {goods.length
        ? <View>
          <ScrollView>
            {goods.map(item => <BasketProductCard product={item} key={item.id} />)}
            <Text>{totalPrice}</Text>
            <Button title='Buy' onPress={() => {
              dispatch(resetBasket())
              navigation.navigate('Home')
            }} />
          </ScrollView>
        </View>
        : <View style={styles.container}>
          <Text style={styles.emptyHeader}>Basket is empty</Text>
          <View style={styles.emptyButton}>
            <Text onPress={() => navigation.navigate('Home')} style={styles.emptyButtonText}>Go shopping</Text>
          </View>
        </View>}
    </View>
  )
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default BasketList
