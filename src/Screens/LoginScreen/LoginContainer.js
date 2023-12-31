import Login from "./Login";

export const LoginContainer = ({ navigation }) => {  

  const onNavigate = (screen) => {
    navigation.navigate(screen);
  };
  
  return <Login onNavigate={onNavigate} />;
};
