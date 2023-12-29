import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image, TextInput } from "react-native";
import { RootScreens } from "..";
import { useFonts } from 'expo-font'; 
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Login = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
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
      <Text style={[styles.login1, styles.loginTypo]}>Login</Text>

      <View style={[styles.loginInner, styles.parentLayout]}>
        <View style={[styles.passwordParent, styles.parentLayout]}>
          <TextInput 
		  	style={[styles.password, styles.passwordFlexBox]}
			placeholder={'Email address'}
			
		  >
           
          </TextInput>
		  <Image
            style={[styles.mailIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("@/Assets/img/mail.png")}
          />
          <View style={styles.groupChild} />
        </View>
      </View> 

      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.passwordParent, styles.parentLayout]}>
          <TextInput 
		  	style={[styles.password, styles.passwordTypo]}
			placeholder={'Password'}
		  >
			</TextInput>
          <Image
            style={[styles.mailIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("@/Assets/img/lock.png")}
          />
          <View style={[styles.groupChild, styles.frameItemBorder]} />
        </View>
        <Image
          style={[styles.viewIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("@/Assets/img/View.png")}
        />
      </View>

      <Pressable
        style={[styles.rectangleParent, styles.frameChildLayout]}
        onPress={() => {}}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.login2, styles.login2Typo]}>Login</Text>
      </Pressable>

      <View style={styles.orConnectWithWrapper}>
        <Text style={[styles.orConnectWith, styles.passwordTypo]}>
          Or connect with
        </Text>
      </View>

      <View style={styles.facebook1Parent}>
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

      

      <Text style={[styles.forgetPassword, styles.passwordTypo]}>
        Forget password
      </Text>

      <Pressable style={styles.notResigteredParent} >
        <Text style={[styles.notResigtered, styles.signUpNowPosition]}>
          Not resigtered?
        </Text>
        <Text style={[styles.signUpNow, styles.signUpNowPosition]} onPress={() => props.onNavigate(RootScreens.SIGNUP)}>
          Sign up now
        </Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  loginShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  loginTypo: {
    fontFamily: 'PoppinsSemiBold',
    fontWeight: "600",
  },
  passwordTypo: {
    textAlign: "left",
    fontFamily: 'PoppinsReg',
    position: "absolute",
  },
  frameChildLayout: {
    height: 45,
    borderRadius: Border.br_3xs,
    width: 318,
    position: "absolute",
  },
  login2Typo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    height: 39,
    width: 39,
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  frameItemBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  passwordFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  signUpNowPosition: {
    bottom: 0,
    textAlign: "left",
    position: "absolute",
  },
  parentLayout: {
    height: 31,
    width: 317,
    position: "absolute",
  },
  login1: {
    // marginLeft: -138,
    top: 175,
    fontSize: 40,
    color: "#000",
    textAlign: "center",
    width: 284,
    height: 70,
    // left: "50%",
    position: "absolute",
  },
  orConnectWith: {
    marginLeft: -59.5,
    color: Color.colorGray,
    fontSize: FontSize.size_mini,
    top: 0,
    // left: "50%",
  },
  orConnectWithWrapper: {
    // marginLeft: -60,
    top: 605,
    width: '100%',
    height: 23,
    // left: "50%",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorDodgerblue,
    shadowRadius: 4,
    elevation: 4,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  login2: {
    marginTop: -18.5,
    marginLeft: -28,
    color: Color.colorWhite,
    top: "50%",
    fontFamily: 'PoppinsSemiBold',
    fontWeight: "600",
    // left: "50%",
  },
  rectangleParent: {
    top: 536,
    // left: 45,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  instagram1Icon: {
    marginLeft: 18,
  },
  facebook1Parent: {
    // marginLeft: -75,
    top: 638,
    flexDirection: "row",
    padding: 11,
    // left: "50%",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  mailIcon: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  emailAddress: {
    left: 36,
    color: Color.colorDodgerblue,
    fontFamily: 'PoppinsReg',
    top: 0,
  },
  frameItem: {
    top: 32,
    left: -1,
    borderColor: Color.colorDodgerblue,
    borderTopWidth: 2,
    width: 319,
    height: 2,
  },
  mailParent: {
    marginLeft: -159,
    top: 332,
    height: 33,
    width: 317,
    left: "50%",
    position: "absolute",
  },
  loginChild: {
    top: 1,
    left: 537,
    width: 414,
    height: 895,
    position: "absolute",
  },
  loginInner: {
    top: 334,
    // left: 49,
  },
  forgetPassword: {
    top: 453,
    right: 42,
    color: "#469fd1",
    width: 157,
    fontSize: FontSize.size_mini,
  },
  notResigtered: {
    width: 150,
    left: 0,
    color: Color.colorGray,
    fontFamily: 'PoppinsReg',
    fontSize: FontSize.size_mini,
  },
  signUpNow: {
    left: 148,
    fontSize: 18,
    color: "#dd6140",
    width: 150,
    fontFamily: 'PoppinsSemiBold',
    fontWeight: "600",
  },
  notResigteredParent: {
    bottom: 60,
    left: 61,
    width: 300,
    height: 27,
    position: "absolute",
  },
  password: {
    left: 35,
    fontSize: 16,
    color: Color.colorGray,
    top: 0,
	  width: 300,
  },
  groupChild: {
    top: 31,
    borderColor: Color.colorGray,
    borderTopWidth: 1,
    height: 1,
    left: 0,
    width: 318,
    borderStyle: "solid",
  },
  passwordParent: {
    left: 0,
    top: 0,
  },
  viewIcon: {
    marginTop: -11.5,
    left: 286,
    top: "50%",
  },
  groupParent: {
    top: 405,
    // left: 49,
  },
  statusBarLight: {
    left: 27,
    width: 387,
    height: 42,
    top: 0,
    position: "absolute",
  },
  login: {
    // borderRadius: 40,
    shadowRadius: 23,
    elevation: 23,
    flex: 1,
    width: "100%",
    // height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    // marginLeft: -10,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
