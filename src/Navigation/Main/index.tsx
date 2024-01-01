import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { HomeContainer } from "@/Screens/Home";
import { ScannerContainer } from "@/Screens/Scanner";
import { HistoryScreens, HomeScreens,ProfileScreens } from "@/Screens";
import { LocationDetailsContainer } from "@/Screens/LocationDetails";
import HistoryContainer from "@/Screens/History/HistoryContainer";
import { fetchUserProfile } from "@/Store/reducers";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ProfileContainer } from "@/Screens/Profile";
import { ListInformationContainer } from "@/Screens/ListInformation";
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
export type ListInformationStackParaList = {
  [ProfileScreens.LISTINFORMATION]: undefined
  [ProfileScreens.PROFILE]: undefined,
  
}
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator<HomeStackParaList>();
const ScannerStack = createNativeStackNavigator<ScannerStackParaList>();
const HistoryStack = createNativeStackNavigator<HistoryStackParaList>();
const ListInformationStack = createNativeStackNavigator<ListInformationStackParaList>();
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
const ListInformation = () => {
  return (
    <ListInformationStack.Navigator>
      
      <ListInformationStack.Screen 
        name={ProfileScreens.LISTINFORMATION}
        component={ListInformationContainer}
        //options={{ headerShown: false }}
        options={{
          title: 'Option',
          headerStyle: {
            backgroundColor: '#469FD1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
       <ListInformationStack.Screen 
        name={ProfileScreens.PROFILE}
        component={ProfileContainer}
        //options={{ headerShown: false }}
        options={{
          title: 'Edit Infomation',
          headerStyle: {
            backgroundColor: '#469FD1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </ListInformationStack.Navigator>
  );
};
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
      <Tab.Screen
        name={ProfileScreens.LISTINFORMATION}
        component={ListInformation}
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
