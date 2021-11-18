import React from 'react'
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailPost, CommentScreen, Post, Place, Store, Food, PlaceScreen, PickPlaceScreen, EditProfile} from './src/screens';

import AppStack from './src/navigation/appStack';
import AuthStack from './src/navigation/authStack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppStack" screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="AppStack"
          component={AppStack}
        />
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
        />
        <Stack.Screen
          name="DetailPost"
          component={DetailPost}
        />
        <Stack.Screen
          name="CommentScreen"
          component={CommentScreen}
        />
        <Stack.Screen
          name="Food"
          component={Food}
        />
        <Stack.Screen
          name="PlaceScreen"
          component={PlaceScreen}
        />
        <Stack.Screen
          name="PickPlaceScreen"
          component={PickPlaceScreen}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;