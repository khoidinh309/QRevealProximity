import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

const LoadingPage = () => {
  return (
    <View style={styles.container}>
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255, 255, 255, 0.75)"
        source={require('./page_loader.json')}
        animationStyle={styles.spinner}
        speed={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: 100,
    height: 100,
  },
});

export default LoadingPage;
