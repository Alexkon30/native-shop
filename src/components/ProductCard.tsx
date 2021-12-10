import React, { FC, useState } from 'react'
import { Text, View, Image, StyleSheet, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

interface CardProps {
  product: {
    id: number
    image: string
    name: string
    price: number
    isFavorite: boolean
  }
}

const ProductCard: FC<CardProps> = ({ product }) => {
  const [check, setCheck] = useState(false)

  return (
    <View style={styles.product}>
      <View style={{ justifyContent: 'center' }}>
        <Image
          style={styles.img}
          source={{
            uri: `${product.image}`,
          }}
        />
      </View>
      <View style={{
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'space-between',
      }}>
        <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>
          {product.name}
        </Text>

        <Text style={{ marginBottom: 5 }}>
          Price: {product.price}
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ width: '50%' }}>
            <Button title={`${check ? 'to order' : 'add'}`} color={`${check ? 'teal' : 'cornflowerblue'}`} />
          </View>
          <AntDesign name={`${product.isFavorite ? 'heart' : 'hearto'}`} size={24} color="cadetblue" />
        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    resizeMode: 'cover'
  },
  product: {
    flexDirection: 'row',
    height: 120,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'lightblue',
    margin: 5,
    padding: 5

  }
})

export default ProductCard
