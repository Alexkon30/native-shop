import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const HomeHeader = () => {
  const [search, setSearch] = useState<string>('')
  const [isActiveSearch, setIsActiveSearch] = useState<boolean>(false)

  const navigation = useNavigation()

  return (
    <View style={styles.body}>
      <SimpleLineIcons name="menu" size={24} color="white" onPress={() => navigation.openDrawer()} />
      {!isActiveSearch
        ? <View style={styles.search}>
          <Text style={styles.header}> Awesome shop</Text>
          <AntDesign name="search1" size={24} color="white" onPress={() => setIsActiveSearch(true)} />
        </View>
        : <TextInput
          style={styles.input}
          onChangeText={setSearch}
          value={search}
          onBlur={() => setIsActiveSearch(false)}
        />}
      <SimpleLineIcons name="basket" size={24} color="white" onPress={() => navigation.navigate('Basket')} />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'darkblue',
    padding: 10,
    marginVertical: 5
  },
  input: {
    width: '50%',
    backgroundColor: 'skyblue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    color: 'darkblue'
  },
  header: {
    color: 'white',
    fontSize: 22,
    marginRight: 10
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default HomeHeader
