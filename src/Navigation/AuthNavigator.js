import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { LoginContainer } from '../Screens/LoginScreen';
import { SignUpContainer } from '@/Screens/SignUpScreen';
import { RootScreens } from '@/Screens';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RootScreens.LOGIN}
        component={LoginContainer}
        options={() => ({
          headerShown: false
        })}
      />
      <Stack.Screen
        name={RootScreens.SIGNUP}
        component={SignUpContainer}
        options={() => ({
          headerShown: false
        })}
      />
    </Stack.Navigator>
  );
}
