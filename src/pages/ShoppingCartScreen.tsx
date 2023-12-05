import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppNavigatorType} from '../utils/NavigatorTypes';
import {RouteProp} from '@react-navigation/native';
import CartItem from '../components/CartItem';

interface IShoppingCartScreenProps {
  route: RouteProp<AppNavigatorType, 'Cart'>;
}

const ShoppingCartScreen = ({route}: IShoppingCartScreenProps) => {
  const {cartItem} = route.params;

  const cart = [
    {
      product: {
        id: '2',
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike2.png',
        name: 'Air Force 1',
        price: 169,
      },
      size: 43,
      quantity: 1,
    },
    {
      product: {
        id: '3',
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike3.png',
        name: 'Nike Cosmic',
        price: 129,
      },
      size: 44,
      quantity: 1,
    },
  ];
  return (
    <FlatList
      data={cart}
      renderItem={({item}) => <CartItem cartItem={item} />}
    />
  );
};

export default ShoppingCartScreen;
