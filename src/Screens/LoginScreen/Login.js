import { useState } from "react";
import { Text, StyleSheet, View, Pressable, Image, TextInput, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootScreens } from "..";
import { useFonts } from 'expo-font'; 
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";
import { loginAsync } from "@/Store/reducers/auth";
import RequestStatus from "@/Store/reducers/requestStatus";
import Spinner from "@/Components/spinner";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Login = ({ onNavigate }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const authError = useSelector((state) => state.auth.error);

  const [fontsLoaded] = useFonts({
    'PoppinsBold': require('@/Assets/font/poppins/Poppins-Bold.ttf'),
    'PoppinsReg': require('@/Assets/font/poppins/Poppins-Regular.ttf'),
    'PoppinsSemiBold': require('@/Assets/font/poppins/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleLogIn = () => {
    console.log('Email: ', username);
    console.log('Password: ', password);
    dispatch(loginAsync({ username, password }));
  }

  if(authStatus === RequestStatus.LOADING) {
    return (
      <View style={styles.container}>
        <Spinner />
      </View>
    )
  }
  else if(authStatus === RequestStatus.ERROR) {
    return (
      <View style={[styles.login]}>
        <View style={{height: windowHeight*0.2, display: 'flex', justifyContent: 'center',
          alignItems: 'center', width: windowWidth
        }}>
          <Text style={[styles.loginTypo]}>Login</Text>
        </View>
        <View style={{height: windowHeight*0.4, display: 'flex', justifyContent: 'center',
          alignItems: 'center', width: windowWidth
        }}>
          <Text style={[styles.loginTypo]}>Error: {authError}</Text>
        </View>
      </View>
    )
  }
  
  return (
    <View style={[styles.login, styles.loginShadowBox]}>
      <View style={{height: windowHeight*0.2, display: 'flex', justifyContent: 'center',
        alignItems: 'center', width: windowWidth
      }}>
        <Text style={[styles.loginTypo]}>Login</Text>
      </View>

      <View style={[styles.inputWrapper]}>
        <View style={[styles.inputLine]}>
          <Image
            style={[styles.iconLayout]}
            resizeMode="cover"
            source={require("@/Assets/img/mail.png")}
          />
          <TextInput 
		  	    style={[styles.inputField]}
			      placeholder={'Email address'}
            onChangeText={(text) => setUsername(text)}
            value={username}
		      >
          </TextInput>
        </View>
        <View style={styles.line} />
      </View> 
      
      <View style={[styles.inputWrapper, styles.parentLayout]}>
        <View style={[styles.inputLine, styles.parentLayout]}>
          <Image
            style={[styles.iconLayout]}
            resizeMode="cover"
            source={require("@/Assets/img/lock.png")}
          />
          <TextInput 
		  	    style={[styles.inputField]}
			      placeholder={'Password'}
            onChangeText={(text) => setPassword(text)}
            value={password}
		      >
			    </TextInput>
          <Image
            style={[styles.viewIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("@/Assets/img/View.png")}
          />
        </View>
        <View style={[styles.line]} />
      </View>

      <View style={{display: 'flex', alignItems: 'flex-end', paddingEnd: windowWidth*0.15}}>
        <Text style={{fontFamily: 'PoppinsReg', color: '#469FD1'}}>Forget password?</Text>
      </View>

      <Pressable onPress={handleLogIn}>
        <View style={{width: windowWidth*0.7, height: windowHeight*0.08, backgroundColor: '#3F88EB',
          display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10,
          marginTop: windowHeight*0.05, alignSelf: 'center'
        }}>
          <Text style={{fontFamily: 'PoppinsSemiBold', color: '#fff', fontSize: 18}}>Login</Text>
        </View>
      </Pressable>

      <View style={{width: '100%', display: 'flex', alignItems: 'center', marginTop: 15}}>
        <Text style={{fontFamily: 'PoppinsReg', color: '#808080'}}>Or connect with</Text>
      </View>

      <View style={styles.socialSection}>
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("@/Assets/img/facebook.png")}
        />
        <Image
          style={[styles.instagram1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("@/Assets/img/instagram.png")}
        />
        <Image
          style={[styles.instagram1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("@/Assets/img/pinterest.png")}
        />
      </View>

      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 12}}>
        <Text style={{fontFamily: 'PoppinsReg', color: '#808080', alignSelf: 'center', marginEnd: windowWidth*0.02}}>Not resigtered?</Text>
        <Text style={{fontFamily: 'PoppinsSemiBold', color: '#DD6140', alignSelf: 'center'}} onPress={() => onNavigate(RootScreens.SIGNUP)}>Sign up now</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTypo: {
    fontFamily: 'PoppinsSemiBold',
    fontWeight: "600",
    fontSize: 36,
  },
  login: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.white,
  },
  inputWrapper: {
    marginTop: 10,
    width: windowWidth,
    height: windowHeight*0.1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLine: {
    display: 'flex',
    flexDirection: 'row',
    width: windowWidth*0.7,
  },
  line: {
    width: windowWidth*0.7,
    height: 1,
    backgroundColor: '#808080',
    marginTop: 2
  },
  iconLayout: {
    marginEnd: 12
  },
  inputField: {
    fontSize: 16,
    flex: 1
  },
  socialSection: {
    width: windowWidth,
    height: windowHeight*0.1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: '20%'
  }
});

export default Login;
