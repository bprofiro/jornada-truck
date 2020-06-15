import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Health from './pages/Health';
import Truck from './pages/Truck';
import Travel from './pages/Travel';
import Maps from './pages/Maps';
import Bonus from './pages/Bonus';
import Point from './pages/Point/index';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5',
          },
        }}
      >
        <AppStack.Screen name="SignUp" component={SignUp} />
        <AppStack.Screen name="Health" component={Health} />
        <AppStack.Screen name="Truck" component={Truck} />
        <AppStack.Screen name="Dashboard" component={Dashboard} />
        <AppStack.Screen name="Travel" component={Travel} />
        <AppStack.Screen name="Maps" component={Maps} />
        <AppStack.Screen name="Bonus" component={Bonus} />
        <AppStack.Screen name="Point" component={Point} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
