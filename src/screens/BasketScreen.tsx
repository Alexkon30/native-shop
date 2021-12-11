import React, { FC } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import BasketList from '../components/BasketList';

const BasketScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={{ flex: 1 }}>
        <BasketList />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default BasketScreen
