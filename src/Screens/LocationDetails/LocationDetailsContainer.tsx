import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";
import { LocationDetails } from "./LocationDetails";
import { RouteProp } from "@react-navigation/native";
import { ScannerStackParamList } from "../Scanner/utils/NavigationParams";
import { HomeScreens } from "..";
import { View, Text } from "native-base";

type DetailScreenRouteProp = RouteProp<ScannerStackParamList, HomeScreens.LOCATION_DETAILS>;

export const LocationDetailsContainer: React.FC<{ route: DetailScreenRouteProp }> = ({ route }) => {
  const {scannedData} = route.params;
  const a = 'acc';
  console.log(route);

  return (
    <LocationDetails data={scannedData} />
  );
};
