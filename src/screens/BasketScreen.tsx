import React, { FC } from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';

//-------
import HomeList from '../components/HomeList';
//********** */

const BasketScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        {/* <HomeList /> */}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default BasketScreen
