import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
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
    <View style={[styles.onboarding2, styles.button1ShadowBox]}>
      <Image
        style={styles.undrawMyCurrentLocationReIcon}
        resizeMode="cover"
        source={require("@/Assets/img/unlock.png")}
      />
      <View style={styles.titleParent}>
        <Text style={[styles.title, styles.textFlexBox]}>
          Unlock Location Insights
        </Text>
        <Text style={[styles.text, styles.textFlexBox]}>
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

const styles = StyleSheet.create({
  button1ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  textFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
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
    width: 149,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    height: 54,
  },
  onboarding2Child: {
    top: 1,
    left: 537,
    width: 414,
    height: 895,
    position: "absolute",
  },
  undrawMyCurrentLocationReIcon: {
    marginLeft: -177,
    top: 130,
    width: 355,
    height: 319,
    left: "50%",
    position: "absolute",
  },
  title: {
    // height: "44.79%",
    top: "0%",
    left: "0%",
    fontSize: 28,
    fontWeight: "600",
    fontFamily: 'PoppinsSemiBold',
    color: "#1a1a1a",
    width: "100%",
  },
  text: {
    height: "55.5%",
    width: "100%",
    top: "110%",
    // left: "7.12%",
    fontSize: 17,
    lineHeight: 23,
    fontWeight: "500",
    fontFamily: 'PoppinsThin',
    color: "#808080",
  },
  titleParent: {
    height: "10.71%",
    width: "100%",
    top: "54.13%",
    // right: "8.33%",
    bottom: "35.16%",
    // left: "8.57%",    
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
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
    marginLeft: -163,
    top: 668,
    width: 327,
    flexDirection: "row",
    height: 54,
    left: "50%",
    position: "absolute",
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
  onboarding2: {
    // borderRadius: 40,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 23,
    elevation: 23,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboarding2;
