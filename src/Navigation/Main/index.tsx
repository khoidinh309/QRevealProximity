import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeContainer } from "@/Screens/Home";
import { ScannerContainer } from "@/Screens/Scanner";
import { HomeScreens } from "@/Screens";
import { LocationDetailsContainer } from "@/Screens/LocationDetails";

export type ScannerStackParaList = {
  [HomeScreens.SCANNER_CAMERA]: undefined,
  [HomeScreens.LOCATION_DETAILS]: undefined
}

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ScannerStack = createNativeStackNavigator<ScannerStackParaList>();

const ScannerStackScreen = () => {
  return (
    <ScannerStack.Navigator>
      <ScannerStack.Screen
        name={HomeScreens.SCANNER_CAMERA}
        component={ScannerContainer}
        options={{ headerShown: false }}
      />
      <ScannerStack.Screen 
        name={HomeScreens.LOCATION_DETAILS}
        component={LocationDetailsContainer}
        options={{ headerShown: false }}
      />
    </ScannerStack.Navigator>
  );
};

// @refresh reset
export const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      />
      <Tab.Screen
        name={HomeScreens.SCANNER}
        component={ScannerStackScreen}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
