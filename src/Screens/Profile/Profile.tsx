import { i18n, LocalizationKey } from "@/Localization";
import React,{ useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import { DatePickerInput } from "react-native-paper-dates";
import { registerTranslation, en } from "react-native-paper-dates";
import { Avatar, TextInput, Button, Text } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
export interface IProfileProps {
  data: User | undefined;
  isLoading: boolean;
}

export const Profile = (props: IProfileProps) => {
  registerTranslation('en', en)
  const { width, height } = Dimensions.get('window');
  const { data, isLoading } = props;
  const [inputDate, setInputDate] = useState<Date>();
  const [username, setUsername] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [text, setText] = React.useState("");
  const genderList = [
    {
      label: "Male",
      value: 1,
    },
    {
      label: "Female",
      value: 2,
    },
    {
      label: "Others",
      value: 0,
    },
  ];
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [gender, setGender] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{textAlign:"left", width:width,padding:10,fontSize:20,fontWeight:"800"}}
      >
        {i18n.t(LocalizationKey.PROFILEINFOR)}
      </Text>
          <TextInput
            mode="outlined"
            label="Username"
            value={username}
            style={{width:width-15}}
            onChangeText={setUsername}
            right={<TextInput.Icon icon="account-outline" />}
            outlineColor="#767680"
            activeOutlineColor="#001356"
            outlineStyle={{
              borderRadius: 12,
              borderWidth: 1,
            }}
            
          />
          
          <View style={{height:65}}>
            
          <DatePickerInput
            locale="en"
            label="Birthday"
            mode="outlined"
            value={inputDate}
            style={{width:width-15}}
            onChange={(d) => setInputDate(d)}
            inputMode="start"
            //left={<TextInput.Icon icon="cake-variant-outline" />}
            outlineColor="#767680"
            activeOutlineColor="#001356"
            outlineStyle={{
              borderRadius: 12,
              borderWidth: 1,
            }}
          />
          </View>
          <TextInput
              mode="outlined"
              label="Type Your City"
              value={location}
              style={{width:width-15}}
              onChangeText={setLocation}
              right={<TextInput.Icon icon="map-marker-outline" />}
              outlineColor="#767680"
              activeOutlineColor="#001356"
              outlineStyle={{
                borderRadius: 12,
                borderWidth: 1,
              }}
          />
        <View style={{width:width-15}}>
        <DropDown
            label="Gender"
            mode="outlined"
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={gender}
            setValue={setGender}
            list={genderList}
            inputProps={{
              right: <TextInput.Icon icon={"gender-male-female"} />,
              outlineColor: "#767680",
              activeOutlineColor: "#001356",
              outlineStyle: {
                borderRadius: 12,
                borderWidth: 1,
              },
            }}
            dropDownStyle={{
              backgroundColor: "#DDE1FF",
              borderRadius: 12,
              width:500,
            }}
            dropDownItemStyle={{
              backgroundColor: "#DDE1FF",
            }}
            dropDownItemSelectedStylre={{
              backgroundColor: "#001356",
            }}
            activeColor="#FFFFFF"
        />
        </View>
          <TextInput
                mode="outlined"
                label="Email"
                value={email}
                style={{width:width-15}}
                onChangeText={setEmail}
                right={<TextInput.Icon icon="email-outline" />}
                outlineColor="#767680"
                activeOutlineColor="#001356"
                outlineStyle={{
                  borderRadius: 12,
                  borderWidth: 1,
                }}
                //editable={false}
          />
      
      <View>
                <Button
                style={{
                  backgroundColor: "#16C1F3",
                  
                  marginVertical: 32,
                  borderRadius: 12,
                  width:width -20
                }}
                >
                  Save
                  </Button>
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
});
