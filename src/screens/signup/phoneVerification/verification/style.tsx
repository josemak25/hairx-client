import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 40px;
`;

export const Info = styled.Text``;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  font-size: 15px;
  opacity: 0.7;
  text-align: left;
`;

export const Time = styled.Text`
  font-family: ${({ theme }) => theme.fonts.JOST_BOOK};
  text-align: center;
  font-size: 13px;
  width: 327px;
  height: 18px;
  margin-bottom: 20px;
`;
