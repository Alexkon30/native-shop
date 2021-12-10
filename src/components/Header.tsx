import React, { useState, FC, useEffect } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { goodsSlice } from '../store/reducers/GoodsSlice';


type Props = {
  title?: string;
}


const Header: FC<Props> = ({ title }) => {
  const [search, setSearch] = useState<string>('')

  const { setSortingMode, setSearchMode, setSearchValue } = goodsSlice.actions
  const { searchMode, searchValue } = useAppSelector(state => state.goodsReducer)

  const route = useRoute()
  const dispatch = useAppDispatch()
  const navigation = useNavigation()

  return (
    <View style={styles.body}>
      {route.name === 'Home'
        ? <SimpleLineIcons name="menu" size={24} color="white" onPress={() => navigation.openDrawer()} />
        : <Ionicons name="arrow-back" size={24} color="white" onPress={() => navigation.goBack()} />
      }

      {!searchMode
        ?
        <View style={styles.search}>
          <Text style={styles.header}> {title || route.name}</Text>
          {route.name !== 'Basket' && <><AntDesign name="search1" size={24} color="white" onPress={() => {
            dispatch(setSearchMode(route.name))
          }}
            style={{ marginRight: 10 }} />
            <MaterialIcons name="sort" size={24} color="white" onPress={() => dispatch(setSortingMode(route.name))} /></>}
        </View>
        : <TextInput
          style={styles.input}
          onChangeText={(value) => dispatch(setSearchValue(value))}
          value={searchValue}
          onBlur={() => dispatch(setSearchMode(null))}
        />}
      {route.name !== 'Basket' && <SimpleLineIcons name="basket" size={24} color="white" onPress={() => navigation.navigate('Basket')} />}
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
    backgroundColor: 'azure',
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
    alignItems: 'center',
  }
})

export default Header
