// NavigationParams.ts

import { HomeScreens } from "@/Screens";

export type ScannerStackParamList = {
  [HomeScreens.LOCATION_DETAILS]: undefined;
  'Detail': { scannedData: string };
};
