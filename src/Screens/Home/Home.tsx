import { i18n, LocalizationKey } from "@/Localization";
import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image, Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, Center } from "native-base";
import { User } from "@/Services";
import qrCodeHeader from "../../../assets/qr_code_header.svg"
import QrIcon from '../../../assets/qr_icon.svg'
import { useNavigation } from "@react-navigation/native";
import { HomeScreens } from "..";

export interface IHomeProps {
  data: User | undefined;
  isLoading: boolean;
}

export const Home = () => {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
  const [windowHeight, setWindowHeight] = useState(Dimensions.get('window').height);
  const navigation = useNavigation();

  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular, Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handlePress = () => {
    navigation.navigate(HomeScreens.SCANNER_CAMERA);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, {height: windowHeight*0.2, width: windowWidth}]}>
        <View style={styles.header}> 
          <View style={{width: 80, height: 80, backgroundColor: "#fff", 
            display: 'flex', alignItems: "center",justifyContent: 'center',
            borderRadius: 40, marginRight: 10
          }}>
            <SvgXml
              width="30"
              height="30"
              xml={qrCodeHeader}
            />
            <Text style={{color: "#3F88EB"}}>QReveal</Text>
          </View>
          <View>
            <Text style={{color: "#fff", fontSize: 24, fontFamily: 'Poppins_600SemiBold'}}>
              QReveal
            </Text>
            <Text style={{color: "#fff", fontSize: 12}}>SIMPLIFY, SCAN AND DISCOVER</Text>
          </View>
        </View>
      </View>

      <View style={{height: windowHeight*0.12, width: windowWidth, 
        backgroundColor: '#fff', marginTop: 10, display: 'flex', flexDirection: 'row'
      }}>
        <View style={{marginLeft: 10, height: "95%", width: "20%", backgroundColor: '#rgba(126, 134, 158, 0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 35,
          position: 'relative'
        }}>
          <Image 
            source={require('../../../assets/user-image.png')} 
            style={{width: 50, height: 50}}
          />
          <View style={{position: 'absolute', width: 32, height: 32, 
            right: 0, bottom: 0, backgroundColor: "#ffffff", display: 'flex', alignItems: 'center',
            justifyContent: 'center', borderRadius: 16  
          }}>
            <Image 
              source={require('../../../assets/camera_icon.png')} 
              style={{width: 20, height: 20}}
            />
          </View>
        </View>
        <View style={{marginLeft: 10, display: 'flex',justifyContent: 'center'}}>
          <Text style={{fontSize: 20, fontFamily: 'Poppins_600SemiBold', padding: 0, margin: 0}}>Welcome</Text>
          <Text style={{fontSize: 16, fontFamily: 'Poppins_400Regular', padding: 0, margin: 0}}>Khoi Dinh!!</Text>
        </View>
      </View>
      <View style={{marginTop: 20, height: windowHeight*0.3, 
        width: windowWidth,
        display: 'flex', alignItems: 'center'
      }}>
        <View style={{marginVertical: 0, width: "80%", height: '100%', 
          padding: 20
        }}>
          <Image 
              source={require('../../../assets/hcmut.jpg')} 
              style={{width: '100%', height: '100%', borderRadius: 15}}
            />
        </View>
      </View>

      <View style={{marginTop: 40, display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 70, height: 70, 
              backgroundColor: '#DD6140', display: 'flex', justifyContent: 'center'
              , alignItems: 'center', borderRadius: 40}}>
            <View>
              <Pressable onPress={handlePress}>
                <SvgXml
                  width="40"
                  height="40"
                  xml={QrIcon}
                />
              </Pressable>
            </View>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    backgroundColor: "#469FD1",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    height: '100%',
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  }
});
