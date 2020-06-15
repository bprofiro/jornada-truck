import React from 'react';
import { ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.jpeg';
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
  Truck,
  Cadastro,
  UserAvatar,
} from './styles';

import Button from '../../components/Button';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Header>
          <HeaderTitle>
            Bem vindo,{'\n'}
            <UserName>Jorge</UserName>
          </HeaderTitle>

          <UserAvatar source={logoImg} />
        </Header>

        <Profile>
          <Cadastro>
            <HeaderTitle>Dados de Cadastro</HeaderTitle>

            <Item>
              <InfoTitle>Nome: </InfoTitle>
              <UserInfo>Jorge Oliveira da Silva</UserInfo>
            </Item>
            <Item>
              <InfoTitle>CPF: </InfoTitle>
              <UserInfo>999.999.999-99</UserInfo>
            </Item>
            <Item>
              <InfoTitle>Dt. Nascimento: </InfoTitle>
              <UserInfo>14/06/1979</UserInfo>
            </Item>
            <Item>
              <InfoTitle>Trabalho: </InfoTitle>
              <UserInfo>Autônomo</UserInfo>
            </Item>

            <Item>
              <InfoTitle>Comorbidades: </InfoTitle>
              <UserInfo>Hipertenso</UserInfo>
            </Item>
          </Cadastro>

          <Truck>
            <HeaderTitle>Dados do Caminhão</HeaderTitle>
            <Item>
              <InfoTitle>Óleo: </InfoTitle>
              <UserInfo>Troca de óleo{'\n'} em 15 dias</UserInfo>
            </Item>

            <Item>
              <InfoTitle>Revisão: </InfoTitle>
              <UserInfo>Revisão daqui{'\n'}2 meses</UserInfo>
            </Item>
          </Truck>
        </Profile>

        <Button onPress={() => navigation.navigate('Travel')}>
          Iniciar um trajeto
        </Button>
        <Footer>
          <FooterText>JORNADA TRUCK @ 2020 </FooterText>
        </Footer>
      </Container>
    </ScrollView>
  );
};

export default Dashboard;
