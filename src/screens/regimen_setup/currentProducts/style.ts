import styled from 'styled-components/native';
import applyScale from '../../../utils/applyScale';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  height: ${applyScale(92)}px;
  border-radius: 5px;
  padding: 0px 10px;
  background-color: ${({ theme }) => theme.colors.INPUT_FIELD_COLOR};
`;

export const ProductImage = styled.View`
  width: ${applyScale(58)}px;
  height: ${applyScale(58)}px;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
  border-radius: 58px;
  overflow: hidden;
`;

export const Content = styled.View`
  flex: 1;
  height: ${applyScale(45)}px;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 10px;
`;

export const Title = styled.Text`
  font-size: ${applyScale(10)}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  opacity: 0.7;
`;

export const SubContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
