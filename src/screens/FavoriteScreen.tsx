import React, { FC } from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Sorting from '../components/Sorting';
import List from '../components/List';


const FavoriteScreen: FC = () => {

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

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default FavoriteScreen
