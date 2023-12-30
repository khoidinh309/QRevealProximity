import Onboarding2 from "./Onboarding2";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

type WelcomeScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.ONBOARD2
>;

export const Onboarding2Container = ({
    navigation,
  }: WelcomeScreenNavigatorProps) => {
    const onNavigate = (screen: RootScreens) => {
      navigation.navigate(screen);
    };
  
    return <Onboarding2 onNavigate={onNavigate} />;
  };
