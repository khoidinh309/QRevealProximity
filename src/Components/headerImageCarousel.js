import React, { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import firebase from 'firebase/compat/app';
import { firebaseConfig } from '../../config';

const HeaderImageCarousel = ({ folderName }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const fetchImages = async () => {
      const storageRef = firebase.storage().ref();
      const folderRef = storageRef.child('images/' + folderName);
      const imageRefs = await folderRef.listAll();

      const imageUrls = await Promise.all(
        imageRefs.items.map(async (itemRef) => {
          const url = await itemRef.getDownloadURL();
          return url;
        })
      );

      setImages(imageUrls);
    };

    fetchImages();
  }, [folderName]);

  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled // Add pagingEnabled prop
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width: 200, height: 200 }} />
        )}
        style={{ marginTop: -50 }}
      />
    </View>
  );
};

export default HeaderImageCarousel;
