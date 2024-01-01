import React, { useEffect, useState } from 'react';
import { View, Image, ActivityIndicator, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import firebase from 'firebase/compat/app';
import { firebaseConfig } from '../../config';

const HeaderImage = ({ folderName }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
  const [windowHeight, setWindowHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  
    if (folderName) {
      const storageRef = firebase.storage().ref();
      const folderRef = storageRef.child('images/'+ folderName);
  
      folderRef.listAll().then((res) => {
        const imagePromises = res.items.map((item) => item.getDownloadURL());
        Promise.all(imagePromises).then((urls) => {
          setImages(urls);
          setLoading(false);
        });
      });
      console.log(images)
    }
  }, [folderName]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{marginTop: -50, position: 'relative', height: 0.3*windowHeight}}>
      <Carousel
        data={images}
        renderItem={({ item }) => <Image source={{ uri: item }} 
        style={{ width: '100%', height: '100%' }} />}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
      />
    </View>
  );
};

export default HeaderImage;
