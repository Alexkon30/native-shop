import React, { FC, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { Sorting } from '../components/Sorting';
import { List } from '../components/List';
import { goodsAPI } from '../services/GoodsService'
import { goodsSlice } from '../store/reducers/GoodsSlice'
import { useAppDispatch } from '../hooks/redux'



export const HomeScreen: FC = () => {
  const dispatch = useAppDispatch()
  const { setGoods, setLoading } = goodsSlice.actions

  const { data, isLoading } = goodsAPI.useFetchAllGoodsQuery(null)

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setGoods(data))
      dispatch(setLoading(false))
    }
  }, [isLoading])


  return (
    <SafeAreaView style={styles.container}>
      <Header title='Awesome shop' />
      <Sorting />
      <ScrollView>
        <List />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
