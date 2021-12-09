import React, { FC } from 'react'
import { ScrollView, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../components/HomeHeader';
import HomeSorting from '../components/HomeSorting';
import HomeList from '../components/HomeList';



const HomeScreen: FC = () => {

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <HomeSorting />
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
