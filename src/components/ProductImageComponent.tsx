import { StyleSheet, View, Image, Animated } from 'react-native'
import React from 'react'
import { metrics } from '../utils/metrics'
import { colors } from '../assets/colors'

interface IProductImageComponentProps {
  images: string[]
}

const DOT_SIZE = 8
const DOT_INDICATOR_SIZE = DOT_SIZE * 2

const ProductImageComponent = ({ images }: IProductImageComponentProps) => {
  const scrollX = React.useRef(new Animated.Value(0)).current

  return (
    <View>
      <Animated.FlatList
        data={images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      />
      <View style={styles.pagination}>
        {images.map((_, index) => {
          return <View style={styles.dot} key={index} />
        })}
        <Animated.View
          style={[
            styles.dotIndicator,
            {
              transform: [
                {
                  translateX: Animated.divide(
                    scrollX,
                    metrics.screenWidth
                  ).interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, DOT_INDICATOR_SIZE],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  )
}

export default ProductImageComponent

const styles = StyleSheet.create({
  container: {
    width: metrics.screenWidth,
    height: metrics.screenWidth,
    backgroundColor: 'tomato',
  },

  image: {
    width: metrics.screenWidth,
    aspectRatio: 1,
  },
  pagination: {
    position: 'absolute',
    // left: metrics.screenWidth * 0.5,
    flexDirection: 'row',
    bottom: 20,
    alignSelf: 'center',
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: colors.coldBlue,
    marginRight: DOT_SIZE,
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
})
