import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';

// import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.jpeg';

import {
  Container,
  Title,
  Footer,
  FooterText,
  HeaderTitle,
  UserAvatar,
  Header,
  UserName,
} from './styles';

const Travel: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <Header>
          <HeaderTitle>
            Para onde vamos,{'\n'}
            <UserName>Jorge?</UserName>
          </HeaderTitle>

          <UserAvatar source={logoImg} />
        </Header>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <View>
              <Title>Nova viagem</Title>
            </View>

            <Form onSubmit={() => console.log('oi')}>
              <Input
                autoCapitalize="words"
                name="name"
                placeholder="Local de Partida"
                returnKeyType="next"
              />
              <Input
                autoCapitalize="words"
                name="name"
                placeholder="Local de Destino"
                returnKeyType="next"
              />
              <Button onPress={() => navigation.navigate('Maps')}>
                Vamos lá!
              </Button>
            </Form>

            <Footer>
              <FooterText>JORNADA TRUCK @ 2020 </FooterText>
            </Footer>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Travel;
