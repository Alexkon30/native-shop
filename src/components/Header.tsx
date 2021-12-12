//универсальный компонент шапки сайта
//для отображения на всех скринах

//react type
import React, { FC } from 'react'
//natice components & styles func
import { View, StyleSheet, Text } from 'react-native'
//icons
import { SimpleLineIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
//hooks
import { useNavigation, useRoute } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
//reducers
import { goodsSlice } from '../store/reducers/GoodsSlice'
//types
import { ScreenNavigationProp } from '../types/PropTypes'
import { HeaderProps } from '../types/PropTypes'



export const Header: FC<HeaderProps> = ({ title }) => {
  //получаем объект текущего местонахождения
  const route = useRoute()

  //получаем функцию для взаимодействия с состоянием
  const dispatch = useAppDispatch()

  //получаем объект навигации
  const navigation = useNavigation<ScreenNavigationProp>()

  //извлекаем actions с помощью деструктуризации
  const { setSortingMode } = goodsSlice.actions

  //извлекаем данные о товарах в корзине с помощью деструктуризации
  //и присваиваем новое имя
  const { goods: order } = useAppSelector(state => state.basketReducer)

  return (
    <View style={styles.body}>
      <View >
        {//условный рендеринг в зависимости от директории
          route.name === 'Home'
            //отобразить иконку "Меню" для скрина "Home"
            ? <SimpleLineIcons name="menu" size={24} color="white"
              onPress={() => navigation.openDrawer()} />
            //для остальных скринов - стрелочка "Назад"
            : <Ionicons name="arrow-back" size={24} color="white"
              onPress={() => navigation.goBack()} />
        }
      </View>
      <View style={styles.search}>
        <Text style={styles.header}>
          {//если пропс title не передан - отобразить в заголовке имя скрина
            title || route.name}
        </Text>

        { //для всех скринов кроме корзины
          //отобразить иконку настроек поиска
          route.name !== 'Basket' &&
          <AntDesign name="search1" size={24} color="white"
            onPress={() => { dispatch(setSortingMode(route.name)) }} />}
      </View>
      <View>
        { //для всех скринов кроме корзины
          //отобразить иконку корзины
          route.name !== 'Basket' && <>
            <SimpleLineIcons name="basket" size={24} color="white"
              onPress={() => navigation.navigate('Basket')} />
            { //отобразить баджи над иконкой корзины
              //только если в корзине что-то есть
              order.length > 0 &&
              <View style={styles.badgeContainer}>
                <Text
                  onPress={() => navigation.navigate('Basket')}
                  style={styles.badge}>
                  {order.length}
                </Text>
              </View>}
          </>}
      </View>
    </View>
  )
}

//стили
const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B8873',
    padding: 10,
    marginVertical: 5
  },
  header: {
    color: 'white',
    fontSize: 22,
    marginRight: 10,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  badgeContainer: {
    position: 'absolute',
    right: -10,
    top: -10,
    backgroundColor: '#EAB65D',
    borderRadius: 8,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    color: '#173664',
    fontSize: 13,
  }
})
