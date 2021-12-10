import React, { FC } from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Sorting from '../components/Sorting';

//------
import HomeList from '../components/HomeList';
//***** */

import { useAppSelector } from '../hooks/redux';

const FavoriteScreen: FC = () => {
  const favorite = useAppSelector(state => state.favoriteReducer.goods)

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Favorite goods' />
      <Sorting />
      <ScrollView>
        <HomeList />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default FavoriteScreen
