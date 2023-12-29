import SignUp from "./SignUp";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
type WelcomeScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.SIGNUP
>;

export const SignUpContainer = ({
    navigation,
  }: WelcomeScreenNavigatorProps) => {
    const onNavigate = (screen: RootScreens) => {
      navigation.navigate(screen);
    }; 
    return <SignUp onNavigate={onNavigate} />;
  };
// export const SignUpContainer = () => {
//     return <SignUp/>;
// };