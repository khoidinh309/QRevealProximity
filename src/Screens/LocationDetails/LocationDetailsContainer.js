import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { useLazyGetUserQuery } from "@/Services";
import { LocationDetails } from "./LocationDetails";
import { RouteProp } from "@react-navigation/native";
import { ScannerStackParamList } from "../Scanner/utils/NavigationParams";
import { HomeScreens } from "..";
import { View, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import RequestStatus from "@/Store/reducers/requestStatus";
import Spinner from "@/Components/spinner";
import { fetchLocationInformation } from "@/Store/reducers";



export const LocationDetailsContainer = ({ route }) => {
  const { scannedData } = route.params;
  const dispatch = useDispatch();
  const status = useSelector((state) => state.location.status);

  useEffect(() => {
    const {name, address, description} = JSON.parse(scannedData);
    dispatch(fetchLocationInformation({name, address, description}));
  }, [])

  if(status === RequestStatus.LOADING) {
    return <Spinner />
  }
  else if(status === RequestStatus.ERROR) {
    return <View style={styles.container}><Text>Something went wrong!</Text></View>
  }

  return (
    <LocationDetails />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
