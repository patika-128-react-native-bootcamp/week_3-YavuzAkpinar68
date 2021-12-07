import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import ProductCard from '../../../components/cards/ProductCard/ProductCard';
import mockData from '../../../MOCK_DATA.json';

export default function Products() {
  const navigation = useNavigation();

  function handleNavigateProductDetail(selectedProduct) {
    navigation.navigate('ProductDetailPage', {product: selectedProduct});
  }

  const renderProduct = ({item}) => (
    <ProductCard item={item} onSelect={() => handleNavigateProductDetail(item)}/>
  )

  return (
    <SafeAreaView>
      <FlatList
        data={mockData.products}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
}
