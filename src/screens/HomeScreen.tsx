//основной экран приложения

//react type & hooks
import React, { FC, useEffect } from 'react'
//native components & styles func
import { StyleSheet, ScrollView } from 'react-native';
//компонент для ограничения зоны безопасной отрисовки
import { SafeAreaView } from 'react-native-safe-area-context';
//components
import { Header } from '../components/Header';
import { Sorting } from '../components/Sorting';
import { List } from '../components/List';
//reducers
import { goodsAPI } from '../services/GoodsService'
import { goodsSlice } from '../store/reducers/GoodsSlice'
//hooks
import { useAppDispatch } from '../hooks/redux'



export const HomeScreen: FC = () => {

  //получаем функцию для взаимодействия с состоянием
  const dispatch = useAppDispatch()

  //извлекаем actions с помощью деструктуризации
  const { setGoods, setLoading } = goodsSlice.actions

  //RTK Query автоматически загрузит данные при монтировании компонента
  const { data, isLoading } = goodsAPI.useFetchAllGoodsQuery(null)

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setGoods(data))
      dispatch(setLoading(false))
    }

    //вызов эффекта произойдет при изменении флага isLoading,
    //возвращаемого из запроса товаров
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


//стили
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
