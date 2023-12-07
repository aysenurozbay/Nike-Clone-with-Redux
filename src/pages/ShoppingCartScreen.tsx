import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from '../components/CartItem'
import { colors } from '../assets/colors'
import { useSelector } from 'react-redux'
import {
  selectDeliveryPrice,
  selectSubTotal,
  totalPrice,
} from '../store/cartSlice'
import { RootState } from 'store'
import ArrowIcon from '../assets/icons/ArrowIcon'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppNavigatorType } from 'utils/NavigatorTypes'
import { useNavigation } from '@react-navigation/native'

const FooterComponent = () => {
  const subTotal = useSelector(selectSubTotal)
  const deliveryFee = useSelector(selectDeliveryPrice)
  const total = useSelector(totalPrice)

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
  )
}
const ListEmptyComponent = () => {
  return <Text style={styles.listEmpty}> Cart is empty...</Text>
}
const ShoppingCartScreen = () => {
  const navigation: StackNavigationProp<AppNavigatorType> = useNavigation()

  const cartItem = useSelector((state: RootState) => state.cart.items)
  console.log('cartItem', cartItem)

  return (
    <View>
      <FlatList
        data={cartItem}
        renderItem={({ item }) => <CartItem cartItem={item} />}
        ListEmptyComponent={<ListEmptyComponent />}
      />
      {cartItem.length !== 0 && <FooterComponent />}
      <Pressable
        style={styles.iconContainer}
        onPress={() => navigation.goBack()}
      >
        <ArrowIcon direction="left" size={30} fill={colors.coldBlue} />
      </Pressable>
    </View>
  )
}

export default ShoppingCartScreen

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
  listEmpty: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: '600',
    textAlign: 'center',
    padding: 20,
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
})
