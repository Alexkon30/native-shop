import React, { FC, useEffect, useMemo } from 'react'
import { useAppSelector } from '../hooks/redux'
import ProductCard from './ProductCard'
import { goodsAPI } from '../services/GoodsService'
import { Alert, Text, Button } from 'react-native'
import { useAppDispatch } from '../hooks/redux'
import { goodsSlice } from '../store/reducers/GoodsSlice'
import { useRoute } from '@react-navigation/native'
import { Product } from '../store/reducers/GoodsSlice'


const HomeList: FC = () => {
  const { data, isLoading } = goodsAPI.useFetchAllGoodsQuery(null)
  const dispatch = useAppDispatch()
  const { setGoods } = goodsSlice.actions
  const { goods, sortingMode, sortingBy, searchValue } = useAppSelector(state => state.goodsReducer)
  const route = useRoute()

  useEffect(() => {
    if (!isLoading && data) {
      // Alert.alert('test', JSON.stringify(data))
      dispatch(setGoods(data.map(item => ({ ...item, isFavorite: false }))))
    }
  }, [isLoading])



  const result = useMemo(() => {
    let resultValue = JSON.parse(JSON.stringify(goods))

    if (searchValue !== '') {
      resultValue = resultValue.filter((item: Product) => item.name.toLocaleLowerCase().includes(`${searchValue.toLocaleLowerCase()}`))
    }

    if (sortingMode && sortingBy === 'name') {
      resultValue = resultValue.sort((a: Product, b: Product) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
        return 0
      })
    } else if (sortingMode && sortingBy === 'price') {
      resultValue = resultValue.sort((a: Product, b: Product) => {
        if (a.price < b.price) return -1
        if (a.price > b.price) return 1
        return 0
      })
    }

    return resultValue

  }, [goods, sortingMode, sortingBy, searchValue])




  return (
    <>
      {isLoading
        ? <Text>Loading...</Text>
        : result?.map((item: Product) => <ProductCard key={item.id} product={item} />)}
    </>
  )
}

export default HomeList
