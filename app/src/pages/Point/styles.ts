import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px ${Platform.OS === 'android' ? 170 : 40}px;
`;

export const Image = styled.Image`
  height: 189px;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
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

export const InfoTitle = styled.Text`
  color: #000;
  font-size: 15px;
`;

export const UserName = styled.Text`
  color: #4a6075;
`;

export const UserInfo = styled.Text`
  color: #4a6075;
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Item = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Profile = styled.View`
  width: 100%;
  padding: 16px;
  margin-bottom: 30px;
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

export const Cadastro = styled.View`
  margin-bottom: 30px;
`;
