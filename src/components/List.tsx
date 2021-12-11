import React, { FC, useMemo } from 'react'
import { useAppSelector } from '../hooks/redux'
import ProductCard from './ProductCard'
import { Alert, Text, Button } from 'react-native'
import { goodsSlice } from '../store/reducers/GoodsSlice'
import { useRoute } from '@react-navigation/native'
import { Product } from '../store/reducers/GoodsSlice'


const List: FC = () => {
  const { goods, sortingMode, sortingBy, searchValue, isLoading } = useAppSelector(state => state.goodsReducer)
  const route = useRoute()



  const result = useMemo(() => {
    let resultValue = JSON.parse(JSON.stringify(goods))
    // if (route.name === 'Home') {
    //   resultValue = goods
    // } else 

    if (route.name === 'Favorite') {
      resultValue = resultValue.filter(item => item.isFavorite === true)
    }

    if (searchValue !== '') {
      resultValue = resultValue.filter((item: Product) => item.name.toLowerCase().includes(`${searchValue.toLowerCase()}`))
    }

    if (sortingBy === 'name') {
      resultValue.sort((a: Product, b: Product) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
        return 0
      })
    } else if (sortingBy === 'price') {
      resultValue.sort((a: Product, b: Product) => {
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
        : result.map((item: Product) => <ProductCard key={item.id} product={item} />)}
    </>
  )
}

export default List
