import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeContainer } from "@/Screens/Home";
import { ScannerContainer } from "@/Screens/Scanner";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { HomeScreens } from "@/Screens";
import { LocationDetailsContainer } from "@/Screens/LocationDetails";
import { ProfileContainer } from "@/Screens/Profile";
import { ListInformationContainer } from "@/Screens/ListInformation";
export type ScannerStackParaList = {
  [HomeScreens.SCANNER_CAMERA]: undefined,
  [HomeScreens.LOCATION_DETAILS]: undefined
}

export type ListInformationStackParaList = {
  [HomeScreens.LISTINFORMATION]: undefined
  [HomeScreens.PROFILE]: undefined,
  
}

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ScannerStack = createNativeStackNavigator<ScannerStackParaList>();
const ListInformationStack = createNativeStackNavigator<ListInformationStackParaList>();

const ScannerStackScreen = () => {
  return (
    <ScannerStack.Navigator>
      <ScannerStack.Screen
        name={HomeScreens.SCANNER_CAMERA}
        component={ScannerContainer}
        //options={{ headerShown: false }}
      />
      <ScannerStack.Screen 
        name={HomeScreens.LOCATION_DETAILS}
        component={LocationDetailsContainer}
        //options={{ headerShown: false }}
      />
    </ScannerStack.Navigator>
  );
};

const ListInformation = () => {
  return (
    <ListInformationStack.Navigator>
      
      <ListInformationStack.Screen 
        name={HomeScreens.LISTINFORMATION}
        component={ListInformationContainer}
        //options={{ headerShown: false }}
      />
       <ListInformationStack.Screen 
        name={HomeScreens.PROFILE}
        component={ProfileContainer}
        //options={{ headerShown: false }}
      />
    </ListInformationStack.Navigator>
  );
};

// @refresh reset
export const MainNavigator = () => {
  const myNavigationTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    },
  };
  return (
    <PaperProvider theme={myNavigationTheme}>
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
      <Tab.Screen
        name={HomeScreens.LISTINFORMATION}
        component={ListInformation}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
    </PaperProvider>
  );
};
