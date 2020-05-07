import styled from 'styled-components/native';
import applyScale from '../../../../utils/applyScale';

export const ModalContainer = styled.View`
  width: 100%;
  height: ${applyScale(700)}px;
  background-color: ${({ theme }) => theme.colors.BG_WHITE_COLOR};
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const ModalTitle = styled.Text``;
