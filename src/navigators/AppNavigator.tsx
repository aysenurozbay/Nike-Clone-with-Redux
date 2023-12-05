import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppNavigatorType} from '../utils/NavigatorTypes';
import HomeScreen from '../pages/HomeScreen';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {images} from '../assets/images';
import ProductDetailScreen from '../pages/ProductDetailScreen';

const AppNavigator = () => {
  const RootStack = createNativeStackNavigator<AppNavigatorType>();
  return (
    <SafeAreaView style={styles.container}>
      {/* <Image
        source={images.nike_logo}
        style={styles.image}
        resizeMode="contain"
      /> */}
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,

          animationTypeForReplace: 'push',
          animation: 'slide_from_bottom',
        }}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Product" component={ProductDetailScreen} />
      </RootStack.Navigator>
    </SafeAreaView>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {
    width: 50,
    height: 30,
    margin: 10,
  },
});
