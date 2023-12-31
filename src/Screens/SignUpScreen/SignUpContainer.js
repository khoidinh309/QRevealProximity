import SignUp from "./SignUp";

export const SignUpContainer = ({ navigation }) => {
    const onNavigate = (screen) => {
      navigation.navigate(screen);
    }; 

    return <SignUp onNavigate={onNavigate} />;
};
