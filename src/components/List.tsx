//универсальный компонент списка товаров
//для отображения на скринах Home и Favorite

//react type & hook
import React, { FC, useMemo } from 'react'
//hooks
import { useRoute } from '@react-navigation/native'
import { useAppSelector } from '../hooks/redux'
//natice components & styles func
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'
//types
import { Product } from '../types/StoreTypes'
//компонент карточки товара
import { ProductCard } from './ProductCard'


export const List: FC = () => {
  const { goods, //извлекаем state всех товаров
    sortingMode, //режим сортировки
    sortingBy,   //метод сортировки
    searchValue, //значение из поля ввода для поиска по названию
    isLoading    //флаг загрузки
  } = useAppSelector(state => state.goodsReducer)

  //получаем объект текущего местонахождения
  const route = useRoute()

  //итоговый список товаров с учетом всех сортировок
  const result = useMemo<Product[]>(() => {
    //создаем копию состояния
    let resultValue: Product[] = JSON.parse(JSON.stringify(goods))

    //проверка на текущую директорию и соответсвующая фильтрация
    if (route.name === 'Favorite') {
      resultValue = resultValue.filter((item) => item.isFavorite === true)
    }

    //проверка на поиск по названию и соответсвующая фильтрация
    if (searchValue !== '' && sortingMode === route.name) {
      resultValue = resultValue.filter((item) =>
        item.name.toLowerCase().includes(`${searchValue.toLowerCase()}`))
    }

    //проверка на способ сортировки
    if (sortingBy === 'name') {
      resultValue.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
        return 0
      })
    } else if (sortingBy === 'price') {
      resultValue.sort((a, b) => {
        if (a.price > b.price) return 1
        if (a.price < b.price) return -1
        return 0
      })
    }

    return resultValue

    //результат будет пересчитываться при изменении в стейте таких значений,
    //как общий список товаров, режим/способ сортировки или значение поиска по названию
  }, [goods, sortingMode, sortingBy, searchValue])

  return (
    <>
      {//условный рендеринг в зависимости от флага загрузки
        isLoading
          ? <View style={styles.loadingContainer}>
            <ActivityIndicator color='#1B8873' size='large' />
          </View>
          : result.length
            //условный рендеринг в зависимости от количества найденных результатов
            //вывести список, если длина списка больше 0, иначе текст "Not found"
            ? result.map((item: Product) => <ProductCard key={item.id} product={item} />)
            : <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Not found</Text>
            </View>
      }
    </>
  )
}

//стили
const styles = StyleSheet.create({
  loadingContainer: {
    marginTop: 14
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 7
  },
  emptyText: {
    fontSize: 20,
    color: '#5E789F'
  }
})
