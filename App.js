import React from 'react'
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppStack from './src/navigation/appStack';
import AuthStack from './src/navigation/authStack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />    
    </NavigationContainer>
  );
};

export default App;