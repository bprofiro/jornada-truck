import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 170 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #000;
  margin: 64px 0 24px;
`;

export const Saude = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 80px;
`;

export const HealthButton = styled(RectButton)`
  width: 120px;
  height: 60px;
  background: #fff;
  border-radius: 10px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 18px;
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
