import React, {useEffect, useState, useCallback} from "react";
import { View, Text, StyleSheet, Dimensions, Image, Pressable } from "react-native";
import { useFonts } from 'expo-font';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { SvgXml  } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import LocationIcon from '../../../assets/location.svg';
import QrIcon from '../../../assets/qr_icon.svg'
import { HomeScreens } from "..";

interface ScannedData {
  data: string
}


export const LocationDetails:React.FC<ScannedData> = ({data}) => {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
  const [windowHeight, setWindowHeight] = useState(Dimensions.get('window').height);
  const navigation = useNavigation();

  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handlePress = () => {
    navigation.navigate(HomeScreens.SCANNER_CAMERA);
  }

  return (
    <View style={styles.container}>
      <View style={{marginTop: 26, position: 'relative', height: 0.3*windowHeight}}>
        <Text style={{zIndex: 1, textAlign: 'center',
          fontSize: 24, color: '#fff', fontFamily: 'Poppins_400Regular', marginTop: 10}}>
          Thông tin
        </Text>
        <Image source={require('../../../assets/h6-hcmut.jpg')}
          style={{width: windowWidth, height: 0.3*windowHeight, 
          position: 'absolute', top: 0
          }}
        />
      </View>
      <View style={{marginTop: 20, marginLeft: 20}}>
        <Text style={{fontFamily: 'Poppins_400Regular', color: '#3F88EB', position: 'relative', fontSize: 24}}>
          BK-DAn.B1
        </Text>
        <View style={{display: 'flex', flexDirection: 'row', width: windowWidth*0.75}}>
          <SvgXml
            width="20"
            height="20"
            xml={LocationIcon}
          />
          <Text style={{marginLeft: 10}}>Di an, Binh Duong</Text>
        </View>
        <View style={{marginTop: 20, height: windowHeight*0.25}}>
          <Text style={{fontSize: 24, fontFamily: "Poppins_400Regular"}}>Thông tin địa điểm</Text>
          <Text style={{fontFamily: 'Poppins_400Regular', textAlign: 'justify', marginEnd: 10}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo maxime consequatur deserunt harum mollitia animi ipsum maiores? Voluptatem vero nobis repellendus cum voluptas aliquid odit vel eveniet ut minus.
          </Text>
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
});
