import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import { FontFamily, Padding, Border, Color } from "../GlobalStyles";
import { RootScreens } from "..";
import { i18n, LocalizationKey } from "@/Localization";
import { useFonts } from 'expo-font';

export const Onboarding2 = (props: {
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
    <View style={[styles.onboarding2]}>
      <Image
        style={styles.undrawMyCurrentLocationReIcon}
        resizeMode="cover"
        source={require("@/Assets/img/unlock.png")}
      />

      <View style={styles.titleParent}>
        <Text style={[styles.title]}>
          Unlock Location Insights
        </Text>
        <Text style={[styles.text]}>
          Obtain information by scanning
        </Text>
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.buttonFlexBox} onPress={() => props.onNavigate(RootScreens.LOGIN)}>
          <Text style={[styles.skip, styles.skipTypo]}>Skip</Text>
        </Pressable>
        <Pressable
          style={[styles.button1, styles.buttonFlexBox]}
          onPress={() => props.onNavigate(RootScreens.ONBOARD3)}
        >
          <Text style={[styles.next, styles.skipTypo]}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 
const styles = StyleSheet.create({
  button1ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  skipTypo: {
    fontFamily: 'PoppinsBold',
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0,
  },
  buttonFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth/3,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    height: 54,
  },
  undrawMyCurrentLocationReIcon: {
    marginTop: 80,
    width: windowWidth-100,
  },
  title: {
    fontSize: windowWidth < 300 ? 24 : 28,
    lineHeight: 42,
    fontFamily: 'PoppinsBold',
    color: "#1a1a1a",
    width: windowWidth,
    textAlign: 'center',
  },
  text: {
    height: '100%',
    marginTop: 17,
    width: windowWidth,
    textAlign: 'center',
    fontSize: windowWidth < 300 ? 15 : 17,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: 'PoppinsThin',
    color: "#808080",
  },
  titleParent: {
    // height: "100%",
    width: windowWidth,
    display: 'flex',
    alignItems: 'center',
  },
  skip: {
    fontSize: 15,
    color: Color.blue,
  },
  next: {
    fontSize: 16,
    color: Color.white,
  },
  button1: {
    backgroundColor: Color.blue,
    shadowColor: "rgba(0, 48, 120, 0.1)",
    shadowRadius: 30,
    elevation: 30,
    marginLeft: 29,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  actions: {
    top: windowHeight - 150,
    width: windowWidth,
    flexDirection: "row",
    height: 54,
    display: "flex",
    justifyContent: 'center',
    position: "absolute",
  },
  onboarding2: {
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 23,
    elevation: 23,
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Onboarding2;
