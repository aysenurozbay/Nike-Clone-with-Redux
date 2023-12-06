import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CartItem from '../components/CartItem';
import {colors} from '../assets/colors';
import {useSelector} from 'react-redux';
import {
  selectDeliveryPrice,
  selectSubTotal,
  totalPrice,
} from '../store/cartSlice';

const FooterComponent = () => {
  const subTotal = useSelector(selectSubTotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(totalPrice);

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subTotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US$</Text>
      </View>
    </View>
  );
};

const ShoppingCartScreen = () => {
  // const {cartItem} = route.params;

  const cartItem = useSelector(state => state.cart.items);
  console.log('cartItem', cartItem);

  return (
    <View>
      <FlatList
        data={cartItem}
        renderItem={({item}) => <CartItem cartItem={item} />}
        ListFooterComponent={<FooterComponent />}
      />
    </View>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: colors.gray,
  },
  textBold: {
    fontSize: 16,
    fontWeight: '500',
  },
});
