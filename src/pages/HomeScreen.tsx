import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import products from '../data/products';
import {ProductType} from '../utils/Types';
import {AppNavigatorType} from '../utils/NavigatorTypes';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

const HomeScreen = () => {
  const navigation: StackNavigationProp<AppNavigatorType> = useNavigation();
  const renderItem: ListRenderItem<ProductType> = ({item}) => (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => {
        navigation.navigate('Product', {product: item});
      }}>
      <Image source={{uri: item.image}} style={styles.image} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={renderItem} numColumns={2} />
    </View>
  );
};

export default HomeScreen;

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
});
