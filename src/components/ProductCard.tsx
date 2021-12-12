//карточка товара

//react type, hooks
import React, { FC, useMemo } from 'react'
//native components & styles func
import { Text, View, Image, StyleSheet, Button } from 'react-native'
//icons
import { AntDesign } from '@expo/vector-icons'
//hooks
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useNavigation } from '@react-navigation/native'
//reducers
import { goodsSlice } from '../store/reducers/GoodsSlice'
import { basketSlice } from '../store/reducers/BasketSlice'
//types
import { ProductCardProps } from '../types/PropTypes'
import { ScreenNavigationProp } from '../types/PropTypes'


export const ProductCard: FC<ProductCardProps> = ({ product }) => {

  //получаем функцию для взаимодействия с состоянием
  const dispatch = useAppDispatch()

  //получаем объект навигации
  const navigation = useNavigation<ScreenNavigationProp>()

  //извлекаем actions с помощью деструктуризации
  const { rateProduct } = goodsSlice.actions
  const { addProduct } = basketSlice.actions

  //извлекаем state корзины с помощью деструктуризации
  //и присваиваем новое имя
  const { goods: order } = useAppSelector(state => state.basketReducer)


  //проверка на наличие в корзине товара с таким же id
  const onBasket: boolean = useMemo(() => {
    return order.some(item => item.id === product.id)

    //значение будет пересчитываться при каждом изменении в корзине
  }, [order])


  return (
    <View style={styles.product}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: `${product.image}`,
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>
          {product.name}
        </Text>

        <Text style={styles.productPrice}>
          Price: {product.price}
        </Text>

        <View style={styles.productActions}>
          <View style={styles.productButton}>
            {onBasket // условный рендеринг в зависимости от того, есть ли товар в корзине

              //кнопка для перехода на экран корзины
              ? <Button title='buy' color='#54D1B8'
                onPress={() => navigation.navigate('Basket')} />

              //кнопка для добавления товара в корзину
              : <Button title='add' color='#8AB0E9'
                onPress={() => { dispatch(addProduct(product)) }} />
            }
          </View>
          <AntDesign
            //условное свойство, зависящее от того, отмечен ли товар как избранный
            name={`${product.isFavorite ? 'heart' : 'hearto'}`}
            size={18}
            color="#FD0B05"
            //по нажатию на иконку товар меняет
            //свое состояние на противоположное
            onPress={() => dispatch(rateProduct(product.id))} />
        </View>
      </View>
    </View>
  )
}

//cтили
const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    resizeMode: 'center',
  },
  product: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'lightblue',
    margin: 5,
    padding: 5,
  },
  imgContainer: {
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  infoContainer: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'space-between'
  },
  productName: {
    marginBottom: 5,
    fontWeight: 'bold'
  },
  productPrice: {
    marginBottom: 5
  },
  productActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  productButton: {
    width: 100
  }
})
