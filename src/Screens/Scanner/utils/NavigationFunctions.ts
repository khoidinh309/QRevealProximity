// NavigationFunctions.ts

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScannerStackParamList } from './NavigationParams';
import { HomeScreens } from "@/Screens";

export const useNavigateToDetail = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScannerStackParamList>>();

  const navigateToDetail = (scannedData: string) => {
    navigation.navigate(HomeScreens.LOCATION_DETAILS, { scannedData });
  };

  return navigateToDetail;
};
