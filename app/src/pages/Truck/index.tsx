import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';

// import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, Footer, FooterText } from './styles';

const Truck: React.FC = () => {
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
              <Title>DADOS DO CAMINHÃO</Title>
            </View>

            <Form onSubmit={() => console.log('Enviado para API')}>
              <Input
                name="oleo"
                keyboardType="ascii-capable"
                placeholder="Troca de óleo"
                returnKeyType="next"
              />
              <Input
                keyboardType="ascii-capable"
                name="pneus"
                placeholder="Troca de Pneus"
                returnKeyType="next"
              />
              <Input
                name="revisao"
                keyboardType="ascii-capable"
                placeholder="Última revisão"
                returnKeyType="next"
              />

              <Input
                keyboardType="ascii-capable"
                name="tastilhas_freio"
                placeholder="Troca de Pastilhas de Freio"
                returnKeyType="send"
              />

              <Button onPress={() => navigation.navigate('Dashboard')}>
                Cadastrar
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

export default Truck;
