import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../assets/colors';
import {AppNavigatorType} from '../utils/NavigatorTypes';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {metrics} from '../utils/metrics';
import {StackNavigationProp} from '@react-navigation/stack';

interface IProductDetailScreenProps {
  route: RouteProp<AppNavigatorType, 'Product'>;
}

const DOT_SIZE = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE * 2;

const ProductDetailScreen = ({route}: IProductDetailScreenProps) => {
  const {product} = route.params;
  const navigation: StackNavigationProp<AppNavigatorType> = useNavigation();
  //   const scrollY = React.useRef(new Animated.Value(0)).current; // TODO: must fix animated view

  const addToCart = () => {
    navigation.navigate('Cart', {
      product: {
        id: '1',
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png',
        name: 'Wild Berry',
        price: 160,
      },
      size: 42,
      quantity: 2,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scollComponent}>
        <FlatList
          data={product.images}
          renderItem={({item}) => (
            <Image source={{uri: item}} style={styles.image} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        {/* <View style={styles.pagination}>
        {product.images.map((_, index) => {
          return <View style={styles.dot} key={index} />;
        })}
        <Animated.View
          style={[
            styles.dotIndicator,
            {
              transform: [
                {
                  translateY: Animated.divide(
                    scrollY,
                    metrics.screenWidth,
                  ).interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, DOT_INDICATOR_SIZE],
                  }),
                },
              ],
            },
          ]}
        />
      </View> */}

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
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: metrics.screenWidth,
    aspectRatio: 1,
  },
  pagination: {
    position: 'absolute',
    top: metrics.screenWidth * 0.5,
    left: 20,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: colors.coldBlue,
    marginBottom: DOT_SIZE,
  },
  dotIndicator: {
    width: DOT_INDICATOR_SIZE,
    height: DOT_INDICATOR_SIZE,
    borderRadius: DOT_INDICATOR_SIZE,
    borderWidth: 1,
    borderColor: colors.coldBlue,
    position: 'absolute',
    top: -DOT_SIZE / 2,
    left: -DOT_SIZE / 2,
  },
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
});
