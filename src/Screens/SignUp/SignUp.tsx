import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image, TextInput } from "react-native";
// import { Image } from "expo-image";
import { useFonts } from "expo-font";import { RootScreens } from "..";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const SignUp = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  const [fontsLoaded, error] = useFonts({
  "Poppins-Regular": require("@/Assets/font/poppins/Poppins-Regular.ttf"),
  "Poppins-SemiBold": require("@/Assets/font/poppins/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <View style={styles.register}>
      <Text style={[styles.register1, styles.register1Position]}>Register</Text>
      <View style={styles.orConnectWithWrapper}>
        <Text style={[styles.orConnectWith, styles.orConnectWithTypo]}>
          Or connect with
        </Text>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.frameChildLayout]}
        onPress={() => {}}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.register2, styles.registerTypo]}>Register</Text>
      </Pressable>
      <View style={styles.facebook1Parent}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("@/Assets/img/facebook.png")}
        />
        <Image
          style={[styles.instagram1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("@/Assets/img/instagram.png")}
        />
        <Image
          style={[styles.instagram1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("@/Assets/img/pinterest.png")}
        />
      </View>

      <Text style={[styles.bySigninInContainer, styles.orConnectWithTypo]}>
        <Text
          style={styles.bySigninIn}
        >{`By signin in you are agreeing our `}</Text>
        <Text style={styles.termAndPrivacy}>Term and privacy policy</Text>
      </Text>

      <View style={styles.emailAddressParent}>
          <TextInput 
            style={[styles.emailAddress, styles.emailAddressTypo]}
            placeholder={'Email address'}
          >
          </TextInput>
        <Image
          style={styles.mailIcon}
          resizeMode="cover"
          source={require("@/Assets/img/mail.png")}
        />
        <View style={[styles.groupItem, styles.groupPosition]} />
      </View>

      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.confirmPasswordParent, styles.groupParentLayout]}>
          <TextInput 
            style={[styles.confirmPassword, styles.emailAddressTypo]}
            placeholder={'Confirm Password'}
          >            
          </TextInput>
          <Image
            style={styles.lockIcon}
            resizeMode="cover"
            source={require("@/Assets/img/lock.png")}
          />
          <View style={[styles.groupItem, styles.groupPosition]} />
        </View>
        <Image
          style={[styles.viewIcon, styles.viewIconPosition]}
          resizeMode="cover"
          source={require("@/Assets/img/View.png")}
        />
        <View style={[styles.groupContainer, styles.groupParentLayout]}>
          <View style={[styles.groupContainer, styles.groupParentLayout]}>
            <TextInput 
              style={[styles.confirmPassword, styles.emailAddressTypo]}
              placeholder={'Password'}
            >
            </TextInput>
            <Image
              style={styles.lockIcon}
              resizeMode="cover"
              source={require("@/Assets/img/lock.png")}
            />
            <View style={[styles.groupItem, styles.groupPosition]} />
          </View>
          <Image
            style={[styles.viewIcon1, styles.viewIconPosition]}
            resizeMode="cover"
            source={require("@/Assets/img/View.png")}
          />
        </View>
      </View> 
      
      <Pressable
        style={[styles.alreadyHaveAnAccountParent, styles.alreadyPosition]}
      >
        <Text style={[styles.alreadyHaveAn, styles.alreadyPosition]}>
          Already have an account?
        </Text>
        <Text
          style={[styles.login, styles.registerTypo]}
          onPress={() => props.onNavigate(RootScreens.LOGIN)}
        >Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  register1Position: {
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  orConnectWithTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
  },
  frameChildLayout: {
    height: 45,
    borderRadius: Border.br_3xs,
    width: 318,
    position: "absolute",
  },
  registerTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  iconLayout: {
    height: 39,
    width: 39,
    overflow: "hidden",
  },
  emailAddressTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    top: 31,
    position: "absolute",
  },
  alreadyPosition: {
    // marginLeft: 0,
    // left: "15%",
    // transform: {translateX: -50},
    position: "absolute",
  },
  groupParentLayout: {
    width: 317,
    position: "absolute",
  },
  viewIconPosition: {
    left: 286,
    width: 24,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  register1: {
    marginLeft: -142,
    top: 155,
    fontSize: 40,
    color: "#1a1a1a",
    width: 284,
    height: '100%',
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  orConnectWith: {
    // marginLeft: -59.5,
    textAlign: "center",
    color: Color.colorGray_100,
    top: 0,
    // left: "50%",
    position: "absolute",
  },
  orConnectWithWrapper: {
    // marginLeft: -59,
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
    backgroundColor: "#3f88eb",
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
    borderRadius: Border.br_3xs,
  },
  register2: {
    // marginLeft: -32,
    // top: 8,
    fontSize: 20,
    color: Color.colorWhite,
    textAlign: "center",
    // left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -159,
    top: 536,
    left: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  instagram1Icon: {
    marginLeft: 18,
  },
  facebook1Parent: {
    marginLeft: -87,
    top: 638,
    flexDirection: "row",
    padding: 11,
    left: "50%",
    position: "absolute",
  },
  emailAddress: {
    left: 36,
    width: 300,
  },
  mailIcon: {
    marginTop: -15.5,
    right: 294,
    maxWidth: "100%",
    height: 24,
    top: "50%",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    right: 0,
    left: 1,
  },
  emailAddressParent: {
    top: 260,
    right: 48,
    left: 40,
    height: 31,
    position: "absolute",
  },
  registerChild: {
    top: 1,
    left: 537,
    width: 414,
    height: 895,
    position: "absolute",
  },
  alreadyHaveAn: {
    bottom: 37,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
  },
  login: {
    // marginLeft: -24,
    bottom: 0,
    fontSize: 18,
    color: "#dd6140",
    textAlign: "center",
    // left: "50%",
    position: "absolute",
  },
  alreadyHaveAnAccountParent: {
    bottom: '5%',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bySigninIn: {
    color: Color.colorGray_100,
    marginBottom: 10,
  },
  termAndPrivacy: {
    color: "#469fd1",
  },
  bySigninInContainer: {
    // marginLeft: -160,
    top: 463,
    width: '100%',
    height: '100%',
    textAlign: "center",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    // left: "50%",
    paddingHorizontal: 30,
    // paddingVertical: 2,
    position: "absolute",
  },
  confirmPassword: {
    left: 35,
    width: 300,
  },
  lockIcon: {
    width: 24,
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupItem: {
    left: 0,
    width: 318,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    top: 31,
  },
  confirmPasswordParent: {
    top: 71,
    height: 31,
    left: -10,
  },
  viewIcon: {
    marginTop: 24,
  },
  groupContainer: {
    height: 31,
    left: -5,
    top: 0,
  },
  viewIcon1: {
    marginTop: -14.5,
  },
  groupParent: {
    top: 331,
    left: 49,
    height: 102,
  },
  statusBarLight: {
    left: 27,
    width: 387,
    height: 42,
    top: 0,
    position: "absolute",
  },
  register: {
    // borderRadius: 40,
    shadowRadius: 23,
    elevation: 23,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
  },
});

export default SignUp;
