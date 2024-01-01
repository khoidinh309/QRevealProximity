import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorComponent = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8d7da',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  errorText: {
    color: '#721c24',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ErrorComponent;
