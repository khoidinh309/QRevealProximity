import Onboarding3 from "./Onboarding3";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
type WelcomeScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.ONBOARD3
>;

export const Onboarding3Container = ({
    navigation,
  }: WelcomeScreenNavigatorProps) => {
    const onNavigate = (screen: RootScreens) => {
      navigation.navigate(screen);
    };
  
    return <Onboarding3 onNavigate={onNavigate} />;
  };
