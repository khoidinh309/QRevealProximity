import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 
const styles = StyleSheet.create({
  buttonFlexBox: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  textFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  image1Icon: {
    width: windowWidth - 100,
    marginTop: 80,
  },
  title: {
    fontSize: windowWidth < 300 ? 24 : 28,
    fontFamily: 'PoppinsBold',
    lineHeight: 42,
    color: "#1a1a1a",
    width: windowWidth,
    eight: '100%',
  },
  text: {
    fontSize: windowWidth < 300 ? 15 : 17,
    lineHeight: 23,
    fontFamily: 'PoppinsThin',
    color: Color.grey,
    width: windowWidth,
    height: '100%',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  titleText: {
    // marginLeft: -179,
    // top: 485,
    width: windowWidth,
    marginTop: 36,
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
    // marginLeft: -104,
    top: windowHeight - 150,
    borderRadius: 10,
    backgroundColor: "#dd6140",
    width: windowWidth/2,
    height: 58,
    position: 'absolute',
    // flexDirection: "row",    
    // paddingHorizontal: 28,
    // paddingVertical: 15,
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
    width: windowWidth,
    height: windowHeight,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    overflow: "hidden",
  },
});

export default Onboarding3;
