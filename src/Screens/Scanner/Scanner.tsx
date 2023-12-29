import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml  } from "react-native-svg";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button } from "react-native";
import scannerFormFrame from '../../../assets/scanner-front-frame.svg';
import { useNavigateToDetail } from "./utils/NavigationFunctions";


export const Scanner = () => {
  const [hasPermission, setHasPermission] = useState({firstTime: false, hasPermission: false});
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState('Not scan yet');
  const navigateToDetail = useNavigateToDetail();
  const navigation = useNavigation();

  const askForCameraPermission = () => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission({firstTime: true, hasPermission: status == 'granted'});
    })()
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setScanned(false);
      setHasPermission({firstTime: true, hasPermission: false});
      (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission({firstTime: true, hasPermission: status == 'granted'}); 
      })();
    });

    return unsubscribe;
  }, [navigation]);

  const handleBarCodeScanned = ({type, data}: {type: Int16Array, data: string}) => {
    setScanned(false),
    setData(data);
    navigateToDetail(data);
  }

  if(hasPermission.firstTime === false) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    )
  }

  if(hasPermission.hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No access to camera</Text>
        <Button title="Allow Camera" onPress={() => askForCameraPermission()} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} 
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View style={{width: '100%', height: '100%', display: 'flex', 
                  alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <SvgXml
            width="200"
            height="200"
            xml={scannerFormFrame}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: 'relative'
  },
  barcodebox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: '125%',
    width: '125%',
    overflow: 'hidden',
    borderRadius: 0,
    backgroundColor: 'transparent'
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
  },
});
