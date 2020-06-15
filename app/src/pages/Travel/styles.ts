import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 170 : 40}px;
`;
export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserAvatar = styled.Image`
  height: 56px;
  width: 56px;
  border-radius: 28px;
`;

export const HeaderTitle = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 23px;
`;

export const UserName = styled.Text`
  color: #4a6075;
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
