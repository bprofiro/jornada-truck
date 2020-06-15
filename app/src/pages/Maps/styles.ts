import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 170 : 40}px;
`;

export const ImageBackground = styled.Image`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
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
  padding: 16px 30px;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.Text`
  color: #000;
  font-size: 18px;
`;
