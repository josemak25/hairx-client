import styled from 'styled-components/native';
import applyScale from '../../../utils/applyScale';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  height: ${applyScale(92)}px;
  border-radius: 5px;
  padding: 0px 5%;
  background-color: ${({ theme }) => theme.colors.INPUT_FIELD_COLOR};
`;

export const Image = styled.Image`
  width: ${applyScale(58)}px;
  height: ${applyScale(58)}px;
  border-radius: 29px;
`;

export const Content = styled.View`
  width: 80%;
  height: ${applyScale(45)}px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: ${applyScale(10)}px;
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  opacity: 0.7;
`;

export const SubContent = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${applyScale(19)}px;
  justify-content: space-between;
  align-items: center;
`;
