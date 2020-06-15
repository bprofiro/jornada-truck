import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';

// import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  HealthButton,
  Text,
  Saude,
  Footer,
  FooterText,
} from './styles';

const Health: React.FC = () => {
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
              <Title>DADOS DE SAÚDE</Title>
            </View>

            <Form onSubmit={() => console.log('Enviado para API')}>
              <Input
                keyboardType="numeric"
                name="peso"
                placeholder="Peso"
                returnKeyType="send"
              />
              <Saude>
                <HealthButton onPress={() => console.log('Diabético')}>
                  <Text>Diabete</Text>
                </HealthButton>
                <HealthButton onPress={() => console.log('Hipertenso')}>
                  <Text>Hipertensão</Text>
                </HealthButton>
              </Saude>
              <Saude>
                <HealthButton onPress={() => console.log('Depressivoi')}>
                  <Text>Depressão</Text>
                </HealthButton>
                <HealthButton
                  onPress={() => console.log('Necessita de medicação')}
                >
                  <Text>Medicação</Text>
                </HealthButton>
              </Saude>

              <Button onPress={() => navigation.navigate('Truck')}>
                Proximo
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

export default Health;
