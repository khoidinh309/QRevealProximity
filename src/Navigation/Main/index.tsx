import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeContainer } from "@/Screens/Home";
import { ScannerContainer } from "@/Screens/Scanner";
import { HistoryScreens, HomeScreens } from "@/Screens";
import { LocationDetailsContainer } from "@/Screens/LocationDetails";
import HistoryContainer from "@/Screens/History/HistoryContainer";

export type ScannerStackParaList = {
  [HomeScreens.SCANNER_CAMERA]: undefined,
  [HomeScreens.LOCATION_DETAILS]: undefined
}

export type HistoryStackParaList = {
  [HistoryScreens.HISTORY]: undefined
}

export type HomeStackParaList = {
  [HomeScreens.HOME]: undefined,
  [HomeScreens.HOME_SCREEN]: undefined
  [HomeScreens.SCANNER_CAMERA]: undefined,
  [HomeScreens.LOCATION_DETAILS]: undefined
}

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator<HomeStackParaList>();
const ScannerStack = createNativeStackNavigator<ScannerStackParaList>();
const HistoryStack = createNativeStackNavigator<HistoryStackParaList>();

const HomeStackScreen = () => {

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={HomeScreens.HOME_SCREEN}
        component={HomeContainer}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={HomeScreens.SCANNER_CAMERA}
        component={ScannerContainer}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen 
        name={HomeScreens.LOCATION_DETAILS}
        component={LocationDetailsContainer}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const HistoryStackScreen = () => {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen
        name={HistoryScreens.HISTORY}
        component={HistoryContainer}
        options={{ headerShown: false }}
      />
    </HistoryStack.Navigator>
  )
}

// @refresh reset
export const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
          headerShown: false
        }}
      />
      <Tab.Screen 
        name="Lịch sử"
        component={HistoryStackScreen}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
