//экран товаров, добавленных в избранное

//react type
import React, { FC } from 'react'
//native components & styles func
import { StyleSheet, ScrollView } from 'react-native';
//компонент для ограничения зоны безопасной отрисовки
import { SafeAreaView } from 'react-native-safe-area-context';
//components
import { Header } from '../components/Header';
import { Sorting } from '../components/Sorting';
import { List } from '../components/List';


export const FavoriteScreen: FC = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Favorite goods' />
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
