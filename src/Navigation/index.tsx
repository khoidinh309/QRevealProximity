import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootScreens } from "@/Screens";
import { Onboarding1Container } from "@/Screens/Onboarding1";
import { Onboarding2Container } from "@/Screens/Onboarding2";
import { Onboarding3Container } from "@/Screens/Onboarding3";
//import { LoginContainer } from "@/Screens/Login";
//import { SignUpContainer } from "@/Screens/SignUp";

export type RootStackParamList = {
  [RootScreens.ONBOARD1]: undefined;
  [RootScreens.ONBOARD2]: undefined;
  [RootScreens.ONBOARD3]: undefined;
  [RootScreens.LOGIN]: undefined;
  [RootScreens.SIGNUP]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
       
         <RootStack.Screen 
          name={RootScreens.ONBOARD1}
          component={Onboarding1Container}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={RootScreens.ONBOARD2}
          component={Onboarding2Container}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={RootScreens.ONBOARD3}
          component={Onboarding3Container}
          options={{ headerShown: false }}
        />
        {/*
        <RootStack.Screen
          name={RootScreens.LOGIN}
          component={LoginContainer}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={RootScreens.SIGNUP}
          component={SignUpContainer}
          options={{ headerShown: false }} 
        />*/}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
