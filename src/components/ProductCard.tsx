import React, { FC } from 'react'
import { Text, View, Image, StyleSheet, Button } from 'react-native'

interface CardProps {
  product: {
    id: number
    image: string
    name: string
    price: number
  }
}

const ProductCard: FC<CardProps> = ({ product }) => {
  return (
    <View style={styles.product}>
      <Image
        style={styles.img}
        source={{
          uri: `${product.image}`,
        }}
      />
      <Text>
        {product.name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 80,
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
