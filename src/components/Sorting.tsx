import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { goodsSlice } from '../store/reducers/GoodsSlice'
import { useRoute } from '@react-navigation/native'

const Sorting = () => {

  const { sortingMode, sortingBy } = useAppSelector(state => state.goodsReducer)
  const { setSortingBy } = goodsSlice.actions

  const route = useRoute()
  const dispatch = useAppDispatch()

  return (
    <>
      {sortingMode === route.name &&
        <View style={styles.switch}>
          <Text>sort results</Text>
          <View>
            <Picker
              style={styles.picker}
              prompt='Sort results'
              selectedValue={sortingBy}
              onValueChange={(value) => dispatch(setSortingBy(value))}>
              <Picker.Item label="none" value="none" />
              <Picker.Item label="by name" value="name" />
              <Picker.Item label="by price" value="price" />
            </Picker>
          </View>
        </View>}
    </>
  )
}

export default Sorting


const styles = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'azure',
    paddingHorizontal: 10,
    marginBottom: 5,
    height: 60
  },
  picker: {
    width: 200
  }
})
