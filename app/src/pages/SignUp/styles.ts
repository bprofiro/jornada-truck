import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 170 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #000;
  font-family: 'Comfortaa';
  margin: 64px 0 24px;
`;

export const Footer = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-width: 1px;
  padding: 16px 0;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.Text`
  color: #000;
  font-size: 18px;
`;
