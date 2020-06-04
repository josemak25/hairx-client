import React, { useState } from 'react';
import { ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { createFilter } from 'react-native-search-filter';

import { productsNames } from '../../../../libs/products.json';
import Search from './search';
import CardView from './card';

import { ModalContainer, ModalTitle, ModalTitleProduct } from './styles';

interface SearchProductScreenProp {
  testID?: string;
  isVisible: boolean;
  onBackButtonPress(): void;
  productCategoryName: string;
}

const KEYS_TO_FILTERS = ['name', 'brand', 'value'];

export default function SearchProductScreen(props: SearchProductScreenProp) {
  const { productCategoryName, isVisible, onBackButtonPress } = props;

  const [search, setSearch] = useState({
    searchProduct: '',
    selectedProduct: null
  });

  const searchProductUpdated = (text: string) => {
    setSearch({ ...search, searchProduct: text });
  };

  const filteredProducts = productsNames.filter(
    createFilter(search.searchProduct, KEYS_TO_FILTERS)
  );

  const toggleSelection = (index: number) => {
    setSearch({ ...search, selectedProduct: index });
  };

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackButtonPress={onBackButtonPress}
      onBackdropPress={onBackButtonPress}
      onSwipeComplete={onBackButtonPress}
      swipeDirection={['down']}
      useNativeDriver={true}
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        margin: 0
      }}
    >
      <StatusBar hidden />
      <ModalContainer>
        <ModalTitle>
          add <ModalTitleProduct>{productCategoryName}</ModalTitleProduct>
        </ModalTitle>
        <Search
          onChangeText={(text: string) => searchProductUpdated(text)}
          placeholder="Search product here..."
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredProducts.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => toggleSelection(index)}
            >
              <CardView
                productIcon={item.image}
                name={item.name}
                brand={item.brand}
                selected={search.selectedProduct == index}
                onPress={() => toggleSelection(index)}
                value={item.value}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ModalContainer>
    </Modal>
  );
}
