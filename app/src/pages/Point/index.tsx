import React from 'react';
import { ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.jpeg';
import PointImage from '../../assets/PointImage.png';
// import api from '../../services/api';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  Item,
  Profile,
  UserInfo,
  InfoTitle,
  Footer,
  FooterText,
  Cadastro,
  Image,
  UserAvatar,
} from './styles';

import Button from '../../components/Button';

const Point: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Header>
          <HeaderTitle>
            O que achou desse ponto{'\n'}
            <UserName>Jorge?</UserName>
          </HeaderTitle>

          <UserAvatar source={logoImg} />
        </Header>

        <Profile>
          <Cadastro>
            <HeaderTitle>Restaurante da Dona Maria</HeaderTitle>

            <Image source={PointImage} />

            <Item>
              <InfoTitle>Localização: </InfoTitle>
              <UserInfo>
                Rua das Flores{'\n'}547{'\n'}São Paulo - SP{' '}
              </UserInfo>
            </Item>
            <Item>
              <InfoTitle>Avaliações: </InfoTitle>
              <UserInfo>10 avaliações</UserInfo>
            </Item>
          </Cadastro>
        </Profile>

        <Button onPress={() => console.log('Avaliado')}>
          Avalie esse Ponto!
        </Button>

        <Button onPress={() => navigation.navigate('Dashboard')}>
          Voltar ao Dashboard
        </Button>
        <Footer>
          <FooterText>JORNADA TRUCK @ 2020 </FooterText>
        </Footer>
      </Container>
    </ScrollView>
  );
};

export default Point;
