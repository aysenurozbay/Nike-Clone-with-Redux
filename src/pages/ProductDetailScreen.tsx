import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartSlice } from '../store/cartSlice'
import { RootState } from '../store'
import ProductImageComponent from '../components/ProductImageComponent'
import ArrowIcon from '../assets/icons/ArrowIcon'
import { colors } from '../assets/colors'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppNavigatorType } from 'utils/NavigatorTypes'
import { useNavigation } from '@react-navigation/native'

const ProductDetailScreen = () => {
  const navigation: StackNavigationProp<AppNavigatorType> = useNavigation()

  const product = useSelector(
    (state: RootState) => state.products.selectedProduct
  )
  const dispatch = useDispatch()

  const addToCart = () => {
    product && dispatch(cartSlice.actions.addCartItem({ product, size: 40 }))
  }

  return product ? (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scollComponent}>
        <ProductImageComponent images={product.images} />

        <View style={styles.productDetailContainer}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
        {/* Add to cart button */}
      </ScrollView>
      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
      <Pressable
        style={styles.iconContainer}
        onPress={() => navigation.goBack()}
      >
        <ArrowIcon direction="left" size={30} fill={colors.coldBlue} />
      </Pressable>
    </View>
  ) : null
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  container: {},

  scollComponent: {
    marginBottom: 30,
  },
  productDetailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '300',
  },
  button: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 15,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
})
