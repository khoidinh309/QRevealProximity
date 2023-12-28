import Onboarding1 from "./Onboarding1";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

type WelcomeScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.ONBOARD1
>;

export const Onboarding1Container = ({
    navigation,
  }: WelcomeScreenNavigatorProps) => {
    const onNavigate = (screen: RootScreens) => {
      navigation.navigate(screen);
    };
  
    return <Onboarding1 onNavigate={onNavigate} />;
  };
