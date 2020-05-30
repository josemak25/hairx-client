import React, { useState } from 'react';
import Modal from 'react-native-modal';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { Ionicons } from '@expo/vector-icons';

import { useThemeContext } from '../../../../theme';
import { productsNames } from '../../../../libs/products';
import { brandNames } from '../../../../libs/products';

import { ModalContainer, ModalTitle, ModalTitleProduct } from './styles';

interface SearchhProductScreenProp {
  testID?: string;
  isVisible: boolean;
  onBackdropPress(): void;
}

const KEYS_TO_FILTERS = ['name'];

export default function SearchProductScreen(props: SearchhProductScreenProp) {
  const { colors } = useThemeContext();

  const [search, setSearch] = useState({
    searchBrand: '',
    searchProduct: '',
    displayBrand: false,
    displayProduct: false,
    displayBrandInput: 'show',
    displayProductInput: 'show'
  });

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
      displayBrandInput: 'hide'
    })
  }

  const brandOnblur = () => {
    setSearch({
      ...search,
      displayBrandInput: 'show'
    })
  }


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
      displayProductInput: 'hide'
    })
  }

  const productOnblur = () => {
    setSearch({
      ...search,
      displayProductInput: 'show'
    })
  }

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
      style={{ display: 'flex', justifyContent: 'flex-end', margin: 0 }}
    >
      <ModalContainer>
        <ModalTitle>
          add <ModalTitleProduct>shampoo</ModalTitleProduct>
        </ModalTitle>
       {search.displayBrandInput === 'show' ? (
          <SearchInput
          onChangeText={text => searchBrandUpdated(text)}
          placeholder="Search brand name"
          onFocus={() => productOnclick()}
          onBlur={() => productOnblur()}
          inputViewStyles={{
            backgroundColor: colors.BG_LIGHT_GRAY,
            width: '93%',
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 35,
            height: 55,
            borderRadius: 5
          }}
          inputFocus={true}
          clearIcon={
            <Ionicons
              name="ios-search"
              size={17}
              color={colors.FONT_DARK_COLOR_LOW_OPACITY}
            />
          }
          clearIconViewStyles={{ position: 'absolute', top: 18, left: 10 }}
        />
       ) : null}
        {search.displayProductInput === 'show' ? (
          <SearchInput
          onChangeText={text => searchProductUpdated(text)}
          placeholder="Search product here"
          onFocus={() => brandOnclick()}
          onBlur={() => brandOnblur()}
          inputViewStyles={{
            backgroundColor: colors.BG_LIGHT_GRAY,
            width: '93%',
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 35,
            height: 55,
            borderRadius: 5,
            marginTop: 15
          }}
          inputFocus={true}
          clearIcon={
            <Ionicons
              name="ios-search"
              size={17}
              color={colors.FONT_DARK_COLOR_LOW_OPACITY}
            />
          }
          clearIconViewStyles={{ position: 'absolute', top: 18, left: 10 }}
        />
        ) : null}
        {search.displayProduct === true &&
          filteredProducts.map(item => <ModalTitle>{item.name}</ModalTitle>)}
        {search.displayBrand === true &&
          filteredBrands.map(item => <ModalTitle>{item.name}</ModalTitle>)}
      </ModalContainer>
    </Modal>
  );
}
