import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppNavigatorType } from '../utils/NavigatorTypes'
import HomeScreen from '../pages/HomeScreen'
import { SafeAreaView, StyleSheet } from 'react-native'

import ProductDetailScreen from '../pages/ProductDetailScreen'
import ShoppingCartScreen from '../pages/ShoppingCartScreen'
import { colors } from '../assets/colors'

const AppNavigator = () => {
  const RootStack = createNativeStackNavigator<AppNavigatorType>()
  return (
    <SafeAreaView style={styles.container}>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // headerShown: false,

          contentStyle: { backgroundColor: colors.white },
          animationTypeForReplace: 'push',
          animation: 'slide_from_bottom',
        }}
      >
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Product" component={ProductDetailScreen} />
        <RootStack.Screen
          name="Cart"
          component={ShoppingCartScreen}
          options={{ presentation: 'modal' }}
        />
      </RootStack.Navigator>
    </SafeAreaView>
  )
}

export default AppNavigator

const styles = StyleSheet.create({
  container: { flex: 1 },
})
