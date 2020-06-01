import React, { useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import { createFilter } from 'react-native-search-filter';
import { useThemeContext } from '../../../../theme';
import { productsNames } from '../../../../libs/products';
import { brandNames } from '../../../../libs/products';
import Search from './search';
import CardView from './card';

import { ModalContainer, ModalTitle, ModalTitleProduct } from './styles';

interface SearchProductScreenProp {
  testID?: string;
  isVisible: boolean;
  onBackdropPress(): void;
}

const KEYS_TO_FILTERS = ['name'];

export default function SearchProductScreen(props: SearchProductScreenProp) {
  const { colors } = useThemeContext();

  const [search, setSearch] = useState({
    searchBrand: '',
    searchProduct: '',
    displayBrand: null,
    displayProduct: null,
    displayBrandInput: true,
    displayProductInput: true,
    selectedProduct: null,
    selectedBrand: null
  });

  const toggleSelectedProduct = index => {
    setSearch({
      ...search,
      selectedProduct: index
    });
  };

  const toggleSelectedBrand = index => {
    setSearch({
      ...search,
      selectedBrand: index
    });
  };

  const searchBrandUpdated = text => {
    setSearch({
      ...search,
      searchBrand: text,
      displayBrand: true
    });
  };

  const brandOnclick = () => {
    setSearch({
      ...search,
      displayBrandInput: false,
      displayBrand: null
    });
  };

  const brandOnblur = () => {
    setSearch({
      ...search,
      displayBrandInput: true
    });
  };

  const searchProductUpdated = text => {
    setSearch({
      ...search,
      searchProduct: text,
      displayProduct: true
    });
  };

  const productOnclick = () => {
    setSearch({
      ...search,
      displayProductInput: false,
      displayProduct: null
    });
  };

  const productOnblur = () => {
    setSearch({
      ...search,
      displayProductInput: true
    });
  };

  const filteredProducts = productsNames.filter(
    createFilter(search.searchProduct, KEYS_TO_FILTERS)
  );

  const filteredBrands = brandNames.filter(
    createFilter(search.searchBrand, KEYS_TO_FILTERS)
  );

  return (
    <Modal
      isVisible={props.isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={props.onBackdropPress}
      useNativeDriver={true}
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        margin: 0,
        backgroundColor: colors.FONT_DARK_COLOR
      }}
    >
      <StatusBar hidden={true} />
      <ModalContainer>
        <ModalTitle>
          add <ModalTitleProduct>shampoo</ModalTitleProduct>
        </ModalTitle>
        {search.displayBrandInput ? (
          <Search
            onChangeText={text => searchBrandUpdated(text)}
            placeholder="Search brand name"
            onFocus={() => productOnclick()}
            onBlur={() => productOnblur()}
          />
        ) : null}
        {search.displayProductInput ? (
          <Search
            onChangeText={text => searchProductUpdated(text)}
            placeholder="Search product here"
            onFocus={() => brandOnclick()}
            onBlur={() => brandOnblur()}
          />
        ) : null}
        <ScrollView showsVerticalScrollIndicator={false}>
          {search.displayProduct &&
            filteredProducts.map((item, index) => (
              <CardView
                key={index}
                productIcon={item.image}
                name={item.name}
                brand={item.brand}
                selected={search.selectedProduct == index}
                onPress={() => toggleSelectedProduct(index)}
                value={item.value}
              />
            ))}
          {search.displayBrand &&
            filteredBrands.map((item, index) => (
              <CardView
                key={index}
                brandIcon={item.image}
                name={item.name}
                availableProducts={item.products}
                selected={search.selectedBrand == index}
                onPress={() => toggleSelectedBrand(index)}
                value={item.value}
              />
            ))}
        </ScrollView>
      </ModalContainer>
    </Modal>
  );
}
