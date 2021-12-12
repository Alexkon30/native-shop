//главный компонент приложения

import React from 'react'
import 'react-native-gesture-handler'
//Основные скрины/директории
import { HomeScreen } from './src/screens/HomeScreen'
import { BasketScreen } from './src/screens/BasketScreen'
import { FavoriteScreen } from './src/screens/FavoriteScreen'
//контейнер для навигации
import { NavigationContainer } from '@react-navigation/native'
//функция для создания навигации
import { createDrawerNavigator } from '@react-navigation/drawer'
//провайдер для ограничения безопасной зоны отрисовки
import { SafeAreaProvider } from 'react-native-safe-area-context'
//store
import { setupStore } from './src/store/store'
//store provider
import { Provider } from 'react-redux'
//types
import { RootDrawerParamList } from './src/types/PropTypes'

//создаем типизированную навигационную обертку
const Drawer = createDrawerNavigator<RootDrawerParamList>()
//инициализируем store
const store = setupStore()


export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home"
            //не отображать стандартную шапку с именем директории
            screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Favorite" component={FavoriteScreen} />
            <Drawer.Screen name="Basket" component={BasketScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  )
}
