import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import BasketScreen from './src/screens/BasketScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import { setupStore } from './src/store/store';


type RootStackParamList = {
  Home: { title: string };
  Favorite: { title: string };
  Basket: undefined;
};

type Props = DrawerScreenProps<RootStackParamList, 'Home'>;
export type HomeScreenNavigationProp = Props['navigation'];

const Drawer = createDrawerNavigator<RootStackParamList>();
const store = setupStore()


export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Favorite" component={FavoriteScreen} />
            <Drawer.Screen name="Basket" component={BasketScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
