import React, { useState } from 'react';
import {ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import SearchInput, { createFilter } from 'react-native-search-filter';
import RadioButton from 'react-native-simple-radio-button-input';
import { Ionicons } from '@expo/vector-icons';
import { useThemeContext } from '../../../../theme';
import { productsNames } from '../../../../libs/products';
import { brandNames } from '../../../../libs/products';

import {
  ModalContainer,
  ModalTitle,
  ModalTitleProduct,
  CardView,
  BrandIcon,
  Name,
  AvailableProducts,
  BrandView,
  ProductCover,
  RadioCover,
  BrandName,
  ProductIcon
} from './styles';

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
    displayProductInput: 'show',
    selectedProduct: null,
    selectedBrand: null,
  });

  const toggleSelectedProduct = (index) => {
     setSearch({
          ...search,
          selectedProduct: index
        })
  };

  const toggleSelectedBrand = (index) => {
  setSearch({
          ...search,
          selectedBrand: index
        })
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
      displayBrandInput: 'hide'
    });
  };

  const brandOnblur = () => {
    setSearch({
      ...search,
      displayBrandInput: 'show'
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
      displayProductInput: 'hide'
    });
  };

  const productOnblur = () => {
    setSearch({
      ...search,
      displayProductInput: 'show'
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
        <ScrollView showsVerticalScrollIndicator={false}>
        {search.displayProduct === true &&
          filteredProducts.map((item, index) => (
            <CardView key={index}>
              <BrandView>
                <ProductIcon source={item.image} />
              </BrandView>
              <ProductCover>
                <Name>{item.name}</Name>
                <BrandName>{item.brand}</BrandName>
              </ProductCover>
              <RadioCover>
                <RadioButton
                  color={colors.INACTIVE_FIELD_COLOR}
                  selected={search.selectedProduct == index}
                  onPress={() => toggleSelectedProduct(index)}
                  value={item.value}
                />
              </RadioCover>
            </CardView>
          ))}
        {search.displayBrand === true &&
          filteredBrands.map((item, index) => (
            <CardView key={index}>
              <BrandIcon source={item.image} />
              <ProductCover>
                <Name>{item.name}</Name>
                <AvailableProducts>{item.products}</AvailableProducts>
              </ProductCover>
              <RadioCover>
                <RadioButton
                  color={colors.INACTIVE_FIELD_COLOR}
                  selected={search.selectedBrand == index}
                  onPress={() => toggleSelectedBrand(index)}
                  value={item.value}
                />
              </RadioCover>
            </CardView>
          ))}
      </ScrollView>
      </ModalContainer>
    </Modal>
  );
}
