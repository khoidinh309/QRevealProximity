import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";
import { RootScreens } from "..";
import { i18n, LocalizationKey } from "@/Localization";
import { useFonts } from 'expo-font'; 

const Onboarding3 = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  const [fontsLoaded] = useFonts({
    'PoppinsBold': require('@/Assets/font/poppins/Poppins-Bold.ttf'),
    'PoppinsThin': require('@/Assets/font/poppins/Poppins-Light.ttf'),
    'PoppinsSemiBold': require('@/Assets/font/poppins/Poppins-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.onboarding3}>
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("@/Assets/img/start.png")}
      />
      <View style={[styles.titleText, styles.buttonFlexBox]}>
        <Text style={[styles.title, styles.textFlexBox]}>
          Scan and explore
        </Text>
        <Text style={[styles.text, styles.textFlexBox]}>
          Explore more easy together with QR code
        </Text>
      </View>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => props.onNavigate(RootScreens.LOGIN)}
      >
        <Text style={styles.getStarted}>Get Started</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  onboarding3Child: {
    top: 1,
    left: 537,
    width: 414,
    height: 895,
    position: "absolute",
  },
  image1Icon: {
    marginLeft: -177,
    top: 130,
    width: 355,
    height: 319,
    left: "50%",
    position: "absolute",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    fontFamily: 'PoppinsSemiBold',
    color: "#1a1a1a",
    width: 400,
    height: 50,
  },
  text: {
    fontSize: 17,
    lineHeight: 23,
    fontFamily: 'PoppinsThin',
    color: Color.grey,
    width: 356,
    height: 40,
    marginTop: 19,
  },
  titleText: {
    marginLeft: -179,
    top: 485,
    width: 359,
  },
  getStarted: {
    fontSize: 21,
    letterSpacing: 0.4,
    lineHeight: 21,
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: 'PoppinsBold',
    color: Color.typographyButton,
    textAlign: "center",
  },
  button: {
    marginLeft: -104,
    top: 665,
    borderRadius: 10,
    backgroundColor: "#dd6140",
    width: 208,
    height: 58,
    flexDirection: "row",    
    paddingHorizontal: 28,
    paddingVertical: 15,
  },
  statusBarLight: {
    top: 10,
    right: -21,
    left: 13,
    maxWidth: "100%",
    height: 42,
    position: "absolute",
    overflow: "hidden",
  },
  onboarding3: {
    // borderRadius: 40,
    backgroundColor: Color.typographyButton,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 23,
    elevation: 23,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Onboarding3;
