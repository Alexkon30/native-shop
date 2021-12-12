//экран корзины

//react type
import React, { FC } from 'react'
//native components & styles func
import { StyleSheet, View } from 'react-native';
//компонент для ограничения зоны безопасной отрисовки
import { SafeAreaView } from 'react-native-safe-area-context';
//components
import { Header } from '../components/Header';
import { BasketList } from '../components/BasketList';

export const BasketScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.container}>
        <BasketList />
      </View>
    </SafeAreaView>
  )
}

//стили
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
