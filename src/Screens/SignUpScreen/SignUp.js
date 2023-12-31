import { useState } from "react";
import { Text, StyleSheet, View, Pressable, Image, TextInput, Dimensions } from "react-native";
import { RootScreens } from "..";
import { useFonts } from 'expo-font'; 
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SignUp = ({ onNavigate }) => {

  const [fontsLoaded] = useFonts({
    'PoppinsBold': require('@/Assets/font/poppins/Poppins-Bold.ttf'),
    'PoppinsReg': require('@/Assets/font/poppins/Poppins-Regular.ttf'),
    'PoppinsSemiBold': require('@/Assets/font/poppins/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.login, styles.loginShadowBox]}>
      <View style={{height: windowHeight*0.15, display: 'flex', justifyContent: 'center',
        alignItems: 'center', width: windowWidth
      }}>
        <Text style={[styles.loginTypo]}>Register</Text>
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

      <View style={[styles.inputWrapper, styles.parentLayout]}>
        <View style={[styles.inputLine, styles.parentLayout]}>
          <Image
            style={[styles.iconLayout]}
            resizeMode="cover"
            source={require("@/Assets/img/lock.png")}
          />
          <TextInput 
		  	    style={[styles.inputField]}
			      placeholder={'Confirm Password'}
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

      <View style={{display: 'flex', alignItems: 'center', paddingHorizontal: windowWidth*0.15}}>
        <Text style={{fontFamily: 'PoppinsReg', textAlign: 'center'}}>
          By signing in you are agreeing to our{" "}
          <Text style={{ color: '#469FD1', fontFamily: 'PoppinsReg' }}>Term and Privacy Policy</Text>
        </Text>
      </View>

      <Pressable>
        <View style={{width: windowWidth*0.7, height: windowHeight*0.08, backgroundColor: '#3F88EB',
          display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10,
          marginTop: windowHeight*0.05, alignSelf: 'center'
        }}>
          <Text style={{fontFamily: 'PoppinsSemiBold', color: '#fff', fontSize: 18}}>Register</Text>
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
        <Text style={{fontFamily: 'PoppinsReg', color: '#808080', alignSelf: 'center', marginEnd: windowWidth*0.02}}>Have an account?</Text>
        <Text style={{fontFamily: 'PoppinsSemiBold', color: '#DD6140', alignSelf: 'center'}} onPress={() => onNavigate(RootScreens.LOGIN)}>Log in now</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default SignUp;
