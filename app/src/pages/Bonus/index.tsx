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
            Seus pontos:{'\n'}
            <UserName>150</UserName>
          </HeaderTitle>

          <UserAvatar source={logoImg} />
        </Header>

        <Profile>
          <Cadastro>
            <HeaderTitle>Dados de Pontos</HeaderTitle>

            <Item>
              <InfoTitle>Km rodados: </InfoTitle>
              <UserInfo>13000 km {'\n'}(130 pontos) </UserInfo>
            </Item>
            <Item>
              <InfoTitle>Avaliações: </InfoTitle>
              <UserInfo>10 avaliações{'\n'} (20 pontos)</UserInfo>
            </Item>
          </Cadastro>

          <Truck>
            <HeaderTitle>Bônus disponíveis:</HeaderTitle>
            <Item>
              <InfoTitle>Óleo: </InfoTitle>
              <UserInfo>Troca de óleo grátis</UserInfo>
            </Item>

            <Item>
              <InfoTitle>Pneus: </InfoTitle>
              <UserInfo>Conjunto de pneus{'\n'}com 40% de desconto</UserInfo>
            </Item>

            <Item>
              <InfoTitle>Alimentação: </InfoTitle>
              <UserInfo>
                Refeição grátis no{'\n'}último restaurante{'\n'}avaliado
              </UserInfo>
            </Item>

            <Item>
              <InfoTitle>CCR: </InfoTitle>
              <UserInfo>Próximos 3 pedágios{'\n'}por conta da casa!</UserInfo>
            </Item>
          </Truck>
        </Profile>

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

export default Dashboard;
