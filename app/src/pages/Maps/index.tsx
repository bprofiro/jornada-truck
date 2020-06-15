import React from 'react';
import { useNavigation } from '@react-navigation/native';

import backgroundImage from '../../assets/mapa.png';

// import api from '../../services/api';

import Button from '../../components/Button';

import { Footer, ImageBackground } from './styles';

const Maps: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <ImageBackground source={backgroundImage} />
      <Footer>
        <Button onPress={() => navigation.navigate('Point')}>
          Avalie algum ponto!
        </Button>
        <Button onPress={() => navigation.navigate('Bonus')}>
          Resgate seu bônus!
        </Button>
      </Footer>
    </>
  );
};

export default Maps;
