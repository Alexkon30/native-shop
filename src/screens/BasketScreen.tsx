import React, { FC } from 'react'
import { Text, View } from 'react-native';

const BasketScreen: FC = () => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>Basket is empty</Text>
    </View>
  )
}

export default BasketScreen
