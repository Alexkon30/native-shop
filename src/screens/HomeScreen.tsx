import React, { FC } from 'react'
import { ScrollView, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Sorting from '../components/Sorting';
import HomeList from '../components/HomeList';



const HomeScreen: FC = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Awesome shop' />
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

export default HomeScreen
