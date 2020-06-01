import React from 'react';
import SearchInput from 'react-native-search-filter';
import { useThemeContext } from '../../../../theme';
import { Ionicons } from '@expo/vector-icons';

interface SearchProductScreenProp {
  testID?: string;
  placeholder: string;
  onFocus: any;
  onChangeText: any;
  onBlur: any;
}

export default function Search(props: SearchProductScreenProp) {
  const { colors } = useThemeContext();
  return (
    <SearchInput
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
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
  );
}
