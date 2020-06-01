import React, { useState } from 'react';
import { ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { createFilter } from 'react-native-search-filter';
import { useThemeContext } from '../../../../theme';
import { productsNames } from '../../../../libs/products.json';
import { brandNames } from '../../../../libs/products.json';
import Search from './search';
import CardView from './card';

import { ModalContainer, ModalTitle, ModalTitleProduct } from './styles';

interface SearchProductScreenProp {
  testID?: string;
  isVisible: boolean;
  onBackdropPress(): void;
  productCategoryName: string;
}

const KEYS_TO_FILTERS = ['name'];

export default function SearchProductScreen(props: SearchProductScreenProp) {
  const { productCategoryName, isVisible, onBackdropPress } = props;

  const { colors } = useThemeContext();

  const [search, setSearch] = useState({
    searchBrand: '',
    searchProduct: '',
    displayBrand: false,
    displayProduct: false,
    displayBrandInput: 'show',
    displayProductInput: 'show',
    selectedProduct: null,
    selectedBrand: null,
    canShow: { brandInput: true, productInput: true }
  });

  const searchBrandUpdated = text => {
    setSearch({
      ...search,
      searchBrand: text,
      displayBrand: true
    });
  };

  const searchProductUpdated = text => {
    setSearch({
      ...search,
      searchProduct: text,
      displayProduct: true
    });
  };

  const handleToggle = (
    canShow: {
      brandInput: boolean;
      productInput: boolean;
    },
    displayProduct: boolean,
    displayBrand: boolean
  ) => {
    setSearch({ ...search, canShow, displayProduct, displayBrand });
  };

  const filteredProducts = productsNames.filter(
    createFilter(search.searchProduct, KEYS_TO_FILTERS)
  );

  const filteredBrands = brandNames.filter(
    createFilter(search.searchBrand, KEYS_TO_FILTERS)
  );

  const toggleSelection = (
    selected: object,
    displayProduct: boolean,
    displayBrand: boolean
  ) => {
    setSearch({
      ...search,
      ...selected,
      canShow: { productInput: true, brandInput: true },
      displayProduct,
      displayBrand
    });
  };

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={onBackdropPress}
      onSwipeComplete={onBackdropPress}
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
        {search.canShow.brandInput && (
          <Search
            onChangeText={text => searchBrandUpdated(text)}
            placeholder="Search brand name"
            onFocus={() =>
              handleToggle(
                { productInput: false, brandInput: true },
                false,
                true
              )
            }
          />
        )}
        {search.canShow.productInput && (
          <Search
            onChangeText={text => searchProductUpdated(text)}
            placeholder="Search product here"
            onFocus={() =>
              handleToggle(
                { productInput: true, brandInput: false },
                true,
                false
              )
            }
          />
        )}
        <ScrollView showsVerticalScrollIndicator={false}>
          {search.displayProduct &&
            filteredProducts.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  toggleSelection({ selectedProduct: index }, true, false)
                }
              >
                <CardView
                  productIcon={item.image}
                  name={item.name}
                  brand={item.brand}
                  selected={search.selectedProduct == index}
                  onPress={() =>
                    toggleSelection({ selectedProduct: index }, true, false)
                  }
                  value={item.value}
                />
              </TouchableOpacity>
            ))}
          {search.displayBrand &&
            filteredBrands.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  toggleSelection({ selectedBrand: index }, false, true)
                }
              >
                <CardView
                  brandIcon={item.image}
                  name={item.name}
                  availableProducts={item.products}
                  selected={search.selectedBrand == index}
                  onPress={() =>
                    toggleSelection({ selectedBrand: index }, false, true)
                  }
                  value={item.value}
                />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </ModalContainer>
    </Modal>
  );
}
