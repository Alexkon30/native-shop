//универсальный компонент сортировки
//для отображения на скринах Home и Favorite

//react type
import React, { FC } from 'react'
//native components & styles func
import { View, StyleSheet, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker'
//hooks
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useRoute } from '@react-navigation/native'
//reducers
import { goodsSlice } from '../store/reducers/GoodsSlice'

export const Sorting: FC = () => {

  //получаем объект текущего местонахождения
  const route = useRoute()

  //получаем функцию для взаимодействия с состоянием
  const dispatch = useAppDispatch()

  //извлекаем данные о сортировке с помощью деструктуризации
  const { sortingMode, sortingBy, searchValue } = useAppSelector(state => state.goodsReducer)

  //извлекаем actions с помощью деструктуризации
  const { setSortingBy, setSearchValue } = goodsSlice.actions


  return (
    <>
      { //отрисовывать компонент при условии совпадения
        //режима сортировки с именем экрана
        sortingMode === route.name &&
        <View style={styles.switch}>
          <TextInput
            //поле ввода для поиска по названию
            autoFocus={true}
            placeholder='Product name'
            style={styles.input}
            onChangeText={(value) => dispatch(setSearchValue(value))}
            value={searchValue}
          />
          <View style={styles.picker}>
            <Picker
              //select для выбора способа сортировки
              prompt='Sort results by'
              selectedValue={sortingBy}
              onValueChange={(value) => dispatch(setSortingBy(value))}>
              <Picker.Item label="default" value="default" />
              <Picker.Item label="name" value="name" />
              <Picker.Item label="price" value="price" />
            </Picker>
          </View>
        </View>}
    </>
  )
}

//стили
const styles = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  picker: {
    flex: 1
  },
  input: {
    width: '65%',
    backgroundColor: 'azure',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    color: 'darkblue',
    textDecorationLine: 'none'
  },
})
