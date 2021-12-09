import React, { FC } from 'react'
import { useAppSelector } from '../hooks/redux'
import ProductCard from './ProductCard'


const HomeList: FC = () => {

  const goods = useAppSelector(state => state.goods)

  return (
    <>
      {goods.goods.map(item => <ProductCard key={item.id} product={item} />)}
    </>
  )
}

export default HomeList
