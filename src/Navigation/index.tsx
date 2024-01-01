import React, {useEffect} from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { MainNavigator } from "./Main";
import { WelcomeContainer } from "@/Screens/Welcome";
import { RootScreens } from "@/Screens";
import { Onboarding1Container } from "@/Screens/Onboarding1";
import { Onboarding2Container } from "@/Screens/Onboarding2";
import { Onboarding3Container } from "@/Screens/Onboarding3";
import { LoginContainer } from "@/Screens/Login";
import { SignUpContainer } from "@/Screens/SignUp";
import AuthNavigator from "./AuthNavigator";

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
  [RootScreens.ONBOARD1]: undefined;
  [RootScreens.ONBOARD2]: undefined;
  [RootScreens.ONBOARD3]: undefined;
  [RootScreens.AuthNavigator]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  const accessToken = useSelector((state: any) => state.auth.accessToken);

  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {/* <RootStack.Screen
          name={RootScreens.WELCOME}
          component={WelcomeContainer}
        /> */ }
         {/* <RootStack.Screen 
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
        /> */}
        {/* <RootStack.Screen
          name={RootScreens.LOGIN}
          component={LoginContainer}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={RootScreens.SIGNUP}
          component={SignUpContainer}
          options={{ headerShown: false }}
        /> */}
        {accessToken === null ?
        (<RootStack.Screen
          name={RootScreens.AuthNavigator}
          component={AuthNavigator}
          options={{}}
        />)  : 
        (<RootStack.Screen
          name={RootScreens.MAIN}
          component={MainNavigator}
          options={{}}
        />) }
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
