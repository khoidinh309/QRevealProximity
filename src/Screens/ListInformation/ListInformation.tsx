import { i18n, LocalizationKey } from "@/Localization";
import React,{ useEffect, useState } from "react";
import { View, StyleSheet, Dimensions,TouchableOpacity,Image,FlatList,TouchableWithoutFeedback } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import { DatePickerInput } from "react-native-paper-dates";
import { registerTranslation, en } from "react-native-paper-dates";
import { Avatar, TextInput, Button, Text } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch, } from 'react-redux';
import { HomeScreens } from "..";
import { RootScreens } from "..";
import AppText from '../../Components/AppText';
import { saveLang } from '../../redux/actions/saveLang';

/* import {
  SvgBack
} from 'src/Assets/svg'; */
import Svg, {
  Circle,
  Rect,
  G,
  Path,
  Defs,
  RadialGradient,
  Stop,
} from "react-native-svg"
import { red400 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
export interface IListInformationProps {
  data: User | undefined;
  isLoading: boolean;
}
interface typeCarousl {
  image: any;
};
const { width, height } = Dimensions.get('window');
const pix = width / 390
export const ListInformation = (props: IListInformationProps) => {
  registerTranslation('en', en)
  const { data, isLoading } = props;
  const navigation = useNavigation();
  const [lang, setLang] = useState('EN');


  const [sourceFlag, setSourceFlag] = useState(<Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
>
    <Path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        fill="#F0F0F0"
    />
    <Path
        d="M2.48 4.694A11.956 11.956 0 00.414 8.87h6.243L2.481 4.694zM23.587 8.87a11.957 11.957 0 00-2.068-4.176L17.344 8.87h6.243zM.413 15.13a11.958 11.958 0 002.068 4.176l4.175-4.176H.413zM19.306 2.48A11.957 11.957 0 0015.13.414v6.243l4.176-4.175zM4.694 21.52a11.957 11.957 0 004.176 2.067v-6.243l-4.176 4.175zM8.87.413a11.957 11.957 0 00-4.176 2.068L8.87 6.656V.413zM15.13 23.587a11.96 11.96 0 004.176-2.068l-4.176-4.175v6.243zM17.344 15.13l4.175 4.176a11.957 11.957 0 002.068-4.176h-6.243z"
        fill="#0052B4"
    />
    <Path
        d="M23.898 10.435H13.565V.102a12.12 12.12 0 00-3.13 0v10.333H.102a12.12 12.12 0 000 3.13h10.333v10.333a12.12 12.12 0 003.13 0V13.565h10.333a12.12 12.12 0 000-3.13z"
        fill="#D80027"
    />
    <Path
        d="M15.13 15.13l5.355 5.355c.247-.246.481-.503.706-.77l-4.585-4.585H15.13zM8.87 15.13l-5.355 5.355c.246.247.503.482.77.706l4.585-4.585V15.13zM8.87 8.87L3.515 3.515a12.03 12.03 0 00-.706.77L7.394 8.87H8.87zM15.13 8.87l5.355-5.355a11.996 11.996 0 00-.77-.706L15.13 7.394V8.87z"
        fill="#D80027"
    />
</Svg>);
  const [showPicker, setShowPicker] = useState(false);
  const dispatch = useDispatch();
  //const langSave = useSelector((state: any) => state.savelang.langSave);
  const _renderItem = ({ item, index }: { item: any; index: number }) => {
    return (

        <TouchableWithoutFeedback
            
            onPress={() => _onCheckVn(item)}>
            <View
                style={{ width: '100%', flexDirection: 'row' }}
            >
                <View style={{ flex: 1 }}></View>
                <View style={{ width: '100%', marginRight: 30 * pix, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 6 * pix, }}>
                    <AppText style={[styles.TextItem, { color: '#16C1F3' }]}>{item.value}</AppText>
                    {/* <item.source style={styles.ImageItem} /> */}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};
const _onCheckVn = (itemmm: any) => {
  if (itemmm.lang === 'en') {
      setLang('EN');
      
      //dispatch(saveLang('en'));
      setSourceFlag(<Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <Path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#F0F0F0"
        />
        <Path
            d="M2.48 4.694A11.956 11.956 0 00.414 8.87h6.243L2.481 4.694zM23.587 8.87a11.957 11.957 0 00-2.068-4.176L17.344 8.87h6.243zM.413 15.13a11.958 11.958 0 002.068 4.176l4.175-4.176H.413zM19.306 2.48A11.957 11.957 0 0015.13.414v6.243l4.176-4.175zM4.694 21.52a11.957 11.957 0 004.176 2.067v-6.243l-4.176 4.175zM8.87.413a11.957 11.957 0 00-4.176 2.068L8.87 6.656V.413zM15.13 23.587a11.96 11.96 0 004.176-2.068l-4.176-4.175v6.243zM17.344 15.13l4.175 4.176a11.957 11.957 0 002.068-4.176h-6.243z"
            fill="#0052B4"
        />
        <Path
            d="M23.898 10.435H13.565V.102a12.12 12.12 0 00-3.13 0v10.333H.102a12.12 12.12 0 000 3.13h10.333v10.333a12.12 12.12 0 003.13 0V13.565h10.333a12.12 12.12 0 000-3.13z"
            fill="#D80027"
        />
        <Path
            d="M15.13 15.13l5.355 5.355c.247-.246.481-.503.706-.77l-4.585-4.585H15.13zM8.87 15.13l-5.355 5.355c.246.247.503.482.77.706l4.585-4.585V15.13zM8.87 8.87L3.515 3.515a12.03 12.03 0 00-.706.77L7.394 8.87H8.87zM15.13 8.87l5.355-5.355a11.996 11.996 0 00-.77-.706L15.13 7.394V8.87z"
            fill="#D80027"
        />
    </Svg>)
  }
  if (itemmm.lang === 'vi') {
      setLang('VN');
      
      //dispatch(saveLang('vi'));
      setSourceFlag(<Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <Path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#D32F2F"
        />
        <Path
            d="M14.64 13.276l4.272-3.129h-5.278L12 5.088l-1.634 5.06H5.088l4.272 3.128-1.633 5.06L12 15.207l4.272 3.129-1.633-5.06z"
            fill="#FFEB3B"
        />
    </Svg>)
  }
  setShowPicker(false)
};
  const listLanguage = [
    {
        stt: 0,
        lang: 'vi',
        value: 'VN',
        source: <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <Path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#D32F2F"
        />
        <Path
            d="M14.64 13.276l4.272-3.129h-5.278L12 5.088l-1.634 5.06H5.088l4.272 3.128-1.633 5.06L12 15.207l4.272 3.129-1.633-5.06z"
            fill="#FFEB3B"
        />
    </Svg>
    },
    {
        stt: 1,
        lang: 'en',
        value: 'EN',
        source: <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <Path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#F0F0F0"
        />
        <Path
            d="M2.48 4.694A11.956 11.956 0 00.414 8.87h6.243L2.481 4.694zM23.587 8.87a11.957 11.957 0 00-2.068-4.176L17.344 8.87h6.243zM.413 15.13a11.958 11.958 0 002.068 4.176l4.175-4.176H.413zM19.306 2.48A11.957 11.957 0 0015.13.414v6.243l4.176-4.175zM4.694 21.52a11.957 11.957 0 004.176 2.067v-6.243l-4.176 4.175zM8.87.413a11.957 11.957 0 00-4.176 2.068L8.87 6.656V.413zM15.13 23.587a11.96 11.96 0 004.176-2.068l-4.176-4.175v6.243zM17.344 15.13l4.175 4.176a11.957 11.957 0 002.068-4.176h-6.243z"
            fill="#0052B4"
        />
        <Path
            d="M23.898 10.435H13.565V.102a12.12 12.12 0 00-3.13 0v10.333H.102a12.12 12.12 0 000 3.13h10.333v10.333a12.12 12.12 0 003.13 0V13.565h10.333a12.12 12.12 0 000-3.13z"
            fill="#D80027"
        />
        <Path
            d="M15.13 15.13l5.355 5.355c.247-.246.481-.503.706-.77l-4.585-4.585H15.13zM8.87 15.13l-5.355 5.355c.246.247.503.482.77.706l4.585-4.585V15.13zM8.87 8.87L3.515 3.515a12.03 12.03 0 00-.706.77L7.394 8.87H8.87zM15.13 8.87l5.355-5.355a11.996 11.996 0 00-.77-.706L15.13 7.394V8.87z"
            fill="#D80027"
        />
    </Svg>
    },
]
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
            style={[styles.styleItemheader, { backgroundColor: '#FFFFFF', borderColor: '#EFEFEF',paddingLeft:10 }]}>
              <Image
                style={{
                  resizeMode: 'cover',
                  width: 60,
          height: 60,
          borderRadius: 60 / 2,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "blue"
                }}
                source={{
                  uri: 'https://www.w3schools.com/bootstrap4/img_avatar3.png',
                }}
        />
        <View >
              <Text allowFontScaling={false} style={[styles.styleText,  { color: '#002336' }]}>{data?.username}</Text>
              </View>
              {/* <View >
              <Text allowFontScaling={false} style={[styles.styleText,  { color: '#002336' }]}>Profile Information</Text>
              </View> */}
        </TouchableOpacity>
      {/* <ScrollView style={[styles.ScrollStyle, { backgroundColor: NewColor[themes].background.screen }]}> */}
      
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: width, justifyContent: 'space-between', paddingHorizontal: 15,paddingTop:20 }}>
      <Text style={{textAlign:"left", width:width,padding:10,fontSize:20,fontWeight:"800"}}> Manager
        {/* {i18n.t(LocalizationKey.PROFILEINFOR)} */}
      </Text>
        <TouchableOpacity onPress={() => navigation.navigate(HomeScreens.PROFILE)}
            style={[styles.styleItem, { backgroundColor: '#FFFFFF', borderColor: '#EFEFEF' }]}>
              <Text allowFontScaling={false} style={[styles.styleText,  { color: '#002336' }]}>Profile Information</Text>
              <View style={{ marginHorizontal: width * 0.02, width: '10%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Svg
                    width={9}
                    height={16}
                    viewBox="0 0 9 16"
                    fill="none"
                    {...props}
                >
                <Path
                    d="M1.51 16a1.424 1.424 0 01-.576-.119 1.498 1.498 0 01-.49-.344 1.607 1.607 0 01-.328-.52 1.686 1.686 0 010-1.229c.076-.194.188-.371.328-.52l4.972-5.255L.64 2.725a1.65 1.65 0 01-.437-1.126C.203 1.177.36.772.64.473a1.5 1.5 0 01.488-.35 1.425 1.425 0 011.156 0c.183.081.349.2.489.35l5.798 6.39c.275.298.429.7.429 1.118 0 .418-.154.82-.43 1.118l-6.008 6.39a1.51 1.51 0 01-.477.367c-.18.088-.376.137-.574.144z"
                    fill={'#4b4b4d'}
                />
                </Svg>
              </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>''}
            style={[styles.styleItem, { backgroundColor: '#FFFFFF', borderColor: '#EFEFEF' }]}>
              <Text allowFontScaling={false} style={[styles.styleText,  { color: '#002336' }]}>Account Password</Text>
              <View style={{ marginHorizontal: width * 0.02, width: '10%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Svg
                    width={9}
                    height={16}
                    viewBox="0 0 9 16"
                    fill="none"
                    {...props}
                >
                <Path
                    d="M1.51 16a1.424 1.424 0 01-.576-.119 1.498 1.498 0 01-.49-.344 1.607 1.607 0 01-.328-.52 1.686 1.686 0 010-1.229c.076-.194.188-.371.328-.52l4.972-5.255L.64 2.725a1.65 1.65 0 01-.437-1.126C.203 1.177.36.772.64.473a1.5 1.5 0 01.488-.35 1.425 1.425 0 011.156 0c.183.081.349.2.489.35l5.798 6.39c.275.298.429.7.429 1.118 0 .418-.154.82-.43 1.118l-6.008 6.39a1.51 1.51 0 01-.477.367c-.18.088-.376.137-.574.144z"
                    fill={'#4b4b4d'}
                />
                </Svg>
              </View>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: width, justifyContent: 'space-between', paddingHorizontal: 15,paddingTop:10 }}>
      <Text style={{textAlign:"left", width:width,padding:10,fontSize:20,fontWeight:"800"}}>
        {/* {i18n.t(LocalizationKey.PROFILEINFOR)} */} Other
      </Text>
      <View style={[styles.styleItem, { borderColor: '#EFEFEF', backgroundColor: '#FFFFFF', zIndex: 3 }]}>
                    {/* <AppText style={[styles.Text, { color: '#000' }]}>Language</AppText> */}
                    <Text allowFontScaling={false} style={[styles.styleText,  { color: '#002336' }]}>Language</Text>
                    <View style={{ height: 70 * pix, width: 71 * pix, marginTop: 36 * pix, borderRadius: 50 * pix }}>
                        {showPicker ?
                            <View style={{ flexDirection: 'row' }}>
                                <FlatList
                                    style={{ backgroundColor: '#F4F4F4', borderRadius: 10 * pix, borderWidth: 1, borderColor: '#E1E1E1' }}
                                    data={listLanguage}
                                    renderItem={_renderItem}
                                    keyExtractor={(item, index) => index.toString()}
                                    showsVerticalScrollIndicator={false}
                                />
                            </View>
                            :
                            <TouchableOpacity style={styles.ViewPickYear} onPress={() => setShowPicker(true)}>
                                <View style={{ backgroundColor: '#F4F4F4', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 6* pix,marginRight:40, borderRadius: 20 * pix, width: 80 * pix }}>
                                    <AppText style={[styles.TextPickYear, { color: '#000' }]}>{lang}</AppText>
                                    {sourceFlag}
                                </View>
                            </TouchableOpacity>}
                    </View>
                </View>
        <TouchableOpacity onPress={() => ''}
            style={[styles.styleItem, { backgroundColor: '#FFFFFF', borderColor: '#EFEFEF' }]}>
              <Text allowFontScaling={false} style={[styles.styleText,  { color: '#002336' }]}>Seting</Text>
              <View style={{ marginHorizontal: width * 0.02, width: '10%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Svg
                    width={9}
                    height={16}
                    viewBox="0 0 9 16"
                    fill="none"
                    {...props}
                >
                <Path
                    d="M1.51 16a1.424 1.424 0 01-.576-.119 1.498 1.498 0 01-.49-.344 1.607 1.607 0 01-.328-.52 1.686 1.686 0 010-1.229c.076-.194.188-.371.328-.52l4.972-5.255L.64 2.725a1.65 1.65 0 01-.437-1.126C.203 1.177.36.772.64.473a1.5 1.5 0 01.488-.35 1.425 1.425 0 011.156 0c.183.081.349.2.489.35l5.798 6.39c.275.298.429.7.429 1.118 0 .418-.154.82-.43 1.118l-6.008 6.39a1.51 1.51 0 01-.477.367c-.18.088-.376.137-.574.144z"
                    fill={'#4b4b4d'}
                />
                </Svg>
              </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ''}
            style={[styles.styleItem, { backgroundColor: '#FFFFFF', borderColor: '#EFEFEF' }]}>
              <Text allowFontScaling={false} style={[styles.styleText,  { color: '#002336' }]}>Support</Text>
              <View style={{ marginHorizontal: width * 0.02, width: '10%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Svg
                    width={9}
                    height={16}
                    viewBox="0 0 9 16"
                    fill="none"
                    {...props}
                >
                <Path
                    d="M1.51 16a1.424 1.424 0 01-.576-.119 1.498 1.498 0 01-.49-.344 1.607 1.607 0 01-.328-.52 1.686 1.686 0 010-1.229c.076-.194.188-.371.328-.52l4.972-5.255L.64 2.725a1.65 1.65 0 01-.437-1.126C.203 1.177.36.772.64.473a1.5 1.5 0 01.488-.35 1.425 1.425 0 011.156 0c.183.081.349.2.489.35l5.798 6.39c.275.298.429.7.429 1.118 0 .418-.154.82-.43 1.118l-6.008 6.39a1.51 1.51 0 01-.477.367c-.18.088-.376.137-.574.144z"
                    fill={'#4b4b4d'}
                />
                </Svg>
              </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(RootScreens.LOGIN)}
            style={[styles.styleItem, { backgroundColor: '#FFFFFF', borderColor: '#EFEFEF' }]}>
              
              <View style={{ marginHorizontal: width * 0.02, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Text allowFontScaling={false} style={[styles.styleText,  { color: '#8b0000',fontWeight:800 }]}>Logout</Text>
              </View>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
    paddingTop:10,
    //paddingBottom:170
  },
  styleItemheader: {
    height: 80,
    width: width - width * 0.075,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    //elevation: 5,
    marginBottom: 0,
    paddingVertical: 20,
    borderWidth: 1,
  },
  styleItem: {
    height: 65,
    width: width - width * 0.075,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    //elevation: 5,
    marginBottom: 0,
    paddingVertical: 20,
    borderWidth: 1,
  },
  Icon: {
    width: 50,
    height: 50,
  },
  styleText: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    paddingLeft:10
  },
  ButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 8 * pix,
    paddingHorizontal: 20 * pix,
    borderRadius: 10 * pix,
    marginTop: 36 * pix,
    marginHorizontal: 20 * pix,
    height: 60 * pix,

},
Text: {
  flex: 1,
  fontSize: 16,
  fontWeight: '600',
},
TextItem: {
  flex: 1,
  fontSize: 14,
  fontWeight: '400',
  fontStyle: 'normal',
  marginLeft: 10 * pix,
},
ImageItem: {
  width: 20 * pix,
  height: 20 * pix,
},
ViewPickYear: {
  flexDirection: 'row'
},
TextPickYear: {
  flex: 1,
  marginLeft: 10 * pix,
},
});
