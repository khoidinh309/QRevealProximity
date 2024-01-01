import { Image, StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import { FontFamily, Padding, Border, Color } from "../GlobalStyles";
import { RootScreens } from "..";
import { i18n, LocalizationKey } from "@/Localization";
import { useFonts } from 'expo-font';

export const Onboarding1 = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  const [fontsLoaded] = useFonts({
    'PoppinsBold': require('@/Assets/font/poppins/Poppins-Bold.ttf'),
    'PoppinsThin': require('@/Assets/font/poppins/Poppins-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }



    return (
    <View style={[styles.onboarding1, styles.button1ShadowBox]}>
      
      <Image
        style={styles.image2Icon}
        resizeMode="cover"
        source={require("@/Assets/img/wellcome.png")}
      />
      <View style={styles.textBlock}>
        <Text style={styles.welcomeToQreveal}>Welcome to QReveal</Text>
        <Text style={styles.simplifyScanDiscover}>
          Simplify, Scan, Discover: Navigate the World with QR Ease!
        </Text>
      </View>
      <View style={styles.actions}>
        <Pressable style={styles.buttonLayout} onPress={() => props.onNavigate(RootScreens.LOGIN)}>
          <Text style={[styles.skip, styles.skipTypo]}>
            {/* {i18n.t(LocalizationKey.SKIP)} */}
            Skip
          </Text>
        </Pressable>
        <Pressable
          style={[styles.button1, styles.buttonLayout]}
          onPress={() => props.onNavigate(RootScreens.ONBOARD2)}
        >
          <Text style={[styles.next, styles.skipTypo]}>
            {/* {i18n.t(LocalizationKey.NEXT)} */}
            Next
          </Text>
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
    letterSpacing: 0,
    textAlign: "center",
  },
  buttonLayout: {
    padding: Padding.p_3xs,
    width: windowWidth/3,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
  },
  image2Icon: {
    marginTop: 80,
    width: windowWidth,
  },
  welcomeToQreveal: {
    fontSize: windowWidth < 300 ? 24 : 28,
    letterSpacing: -0.3,
    lineHeight: 42,
    fontWeight: "600",
    fontFamily: 'PoppinsBold',
    color: "#1a1a1a",
    textAlign: "center",
    width: windowWidth,
  },
  simplifyScanDiscover: {
    fontSize: windowWidth < 300 ? 15 : 17,
    lineHeight: 25,
    fontFamily: 'PoppinsThin',
    color: "#808080",
    width: windowWidth,
    marginTop: 8,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  textBlock: {
    marginTop: 36,
    width: windowWidth,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
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
    width: windowWidth,
    flexDirection: "row",
    height: '100%',
    display: "flex",
    justifyContent: 'center',
    position: "absolute",
    top: windowHeight - 150,
  },
  onboarding1: {
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 23,
    elevation: 23,
    flex: 1,
    width: windowWidth,
    height: windowHeight ,
    display: 'flex',
    alignItems: 'center',
    overflow: "hidden",
  },
});

export default Onboarding1;
