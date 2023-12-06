import React from 'react'
import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { ProductType } from '../utils/Types'
import { AppNavigatorType } from '../utils/NavigatorTypes'
import { useNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import { colors } from '../assets/colors'
import CartIcon from '../assets/icons/CartIcon'
import { images } from '../assets/images'
import { metrics } from '../utils/metrics'
import { useDispatch, useSelector } from 'react-redux'
import { productSlice } from '../store/productSlice'
import { selectNumberOfItem } from '../store/cartSlice'
import { RootState } from 'store'

const HomeScreen = () => {
  const navigation: StackNavigationProp<AppNavigatorType> = useNavigation()

  const products = useSelector((state: RootState) => state.products.products)

  const numberOfItems = useSelector(selectNumberOfItem)

  const dispatch = useDispatch()
  const renderItem: ListRenderItem<ProductType> = ({ item }) => (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => {
        //update selected product
        dispatch(productSlice.actions.setSelectedProduct(item.id))
        navigation.navigate('Product')
      }}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={images.nike_logo}
          style={styles.logoimage}
          resizeMode="contain"
        />
        <Pressable
          style={styles.iconContainer}
          onPress={() => {
            navigation.navigate('Cart')
          }}
        >
          <CartIcon fill={colors.black} size={25} />
          <Text style={styles.cartText}>{numberOfItems}</Text>
        </Pressable>
      </View>
      <FlatList data={products} renderItem={renderItem} numColumns={2} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '50%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    width: metrics.screenWidth,
    paddingTop: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoimage: {
    width: 50,
    height: 30,
    margin: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartText: {
    color: colors.red,
    fontSize: 15,
    fontWeight: '600',
  },
})
