import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setAllHistory } from '@/Store/reducers';
import { Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useFonts } from '@expo-google-fonts/poppins';
import LoadingPage from '@/Components/loadingHistorySpinner';
import { Dimensions, FlatList } from 'react-native';
import RequestStatus from '@/Store/reducers/requestStatus';
import ErrorComponent from '@/Components/error';
import qrCodeHeader from "../../../assets/qr_code_header.svg"
import { SvgXml } from 'react-native-svg';
import deleteIcon from "../../../assets/delete-icon.svg"
import { Spinner } from 'native-base';
import { DateTransform } from './utils';
import { useNavigateToDetail } from '../Scanner/utils/NavigationFunctions';
import { selectHistory, todayHistory, DeleteScanHistory } from '@/Store/reducers';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const History = () => {
  const status = useSelector(state => state.history.status);
  const [isAllHistory, setIsAllHistory] = React.useState(false);
  const navigateToDetail = useNavigateToDetail();
  const scannedData = useSelector(state => isAllHistory ? selectHistory(state) : todayHistory(state));
  const dispatch = useDispatch();
  const [fontsLoaded] = useFonts({Poppins_600SemiBold, Poppins_700Bold, Poppins_500Medium});

  if (!fontsLoaded) {
    return <Spinner />;
  }

  const handleShowDetails = (locationName) => {
    const data = `{
      "name": "${locationName}",
      "address": "none",
      "description": "none"
    }`;
    navigateToDetail(data);
  };

  const handleDeleteItem = (id) => {
    dispatch(DeleteScanHistory(id));
  }

  const Item = ({locationName, creationTime, id}) => (
    <Pressable style={styles.item} onPress={() => handleShowDetails(locationName)}>
      <View>
        <View style={{width: '100%', display: 'flex', flexDirection: 'row', 
          justifyContent: 'space-between', alignItems: "center", padding: 8
        }}>
          <View>
            <Text>{locationName}</Text>
            <Text>{DateTransform(creationTime)}</Text>
          </View>
          <Pressable onPress={() => handleDeleteItem(id)}>
            <SvgXml
              width="30"
              height="30"
              xml={deleteIcon}
            />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );

  let content;

  if(status === RequestStatus.LOADING) {
    content = <LoadingPage />;
  }
  else if(status === RequestStatus.COMPLETE) {
    content = <FlatList
      data={scannedData}
      renderItem={({item}) => <Item locationName={item.locationName} creationTime={item.creationTime} id={item.id} />}
      keyExtractor={item => item.id}
      style={{width: '75%', height: '100%', display: 'flex'}}
    />;
  }
  else if(status === RequestStatus.ERROR) {
    content = <ErrorComponent />;
  }

  const handSwitchMode = (payload) => {
    setIsAllHistory(payload);
  }

  return (
    <View style={{}}>
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

      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginTop: 10
      }}>
        <Text style={{fontFamily: 'Poppins_700Bold'}}>Lịch sử quét mã</Text>
      </View>

      <View style={{display: 'flex', flexDirection: 'row', width: windowWidth,
        height: windowHeight*0.07, justifyContent: 'space-around', alignItems: 'center',
        marginTop: 10, paddingHorizontal: '10%'
      }}>
        <Pressable onPress={() => handSwitchMode(false)} style={[styles.button, (isAllHistory === false? {backgroundColor: '#FE7D55'} : {backgroundColor: '#fff'})]}>
          <View>
            <Text style={[styles.buttonText, (isAllHistory === false ? {color: '#fff'}: {color: '#333'})]}>
              Hôm nay
            </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => handSwitchMode(true)} style={[styles.button, (isAllHistory? {backgroundColor: '#FE7D55'} : {backgroundColor: '#fff'})]}>
          <View>
            <Text style={[styles.buttonText, (isAllHistory? {color: '#fff'}: {color: '#333'})]}>Tất cả</Text>
          </View>
        </Pressable>
      </View>
      <View style={{height: 0.5*windowHeight, width: windowWidth, 
        marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {content}
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
  },
  button: {
    width: '35%', 
    height: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 15,
    borderWidth: 1,
  },
  buttonText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
  },
  item: {
    backgroundColor: '#D2CECE',
    width: '100%',
    height: windowHeight*0.08,
    marginTop: 10,
    borderRadius: 14
  },
  title: {
    fontSize: 14,
  },
});

export default History;
