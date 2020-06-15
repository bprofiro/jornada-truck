import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';

// import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, Footer, FooterText } from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <View>
              <Title>CADASTRO</Title>
            </View>

            <Form onSubmit={() => console.log('Enviado para API')}>
              <Input
                autoCapitalize="words"
                name="name"
                placeholder="Nome"
                returnKeyType="next"
              />
              <Input
                keyboardType="numeric"
                autoCorrect={false}
                autoCapitalize="none"
                name="cpf"
                placeholder="CPF"
                returnKeyType="next"
              />
              <Input
                secureTextEntry
                name="senha"
                placeholder="Senha"
                textContentType="newPassword"
                returnKeyType="next"
              />

              <Input
                keyboardType="ascii-capable"
                name="data_nascimento"
                placeholder="Data de Nascimento"
                returnKeyType="send"
              />

              <Button onPress={() => navigation.navigate('Health')}>
                Proximo
              </Button>
            </Form>
          </Container>

          <Footer>
            <FooterText>JORNADA TRUCK @ 2020 </FooterText>
          </Footer>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
