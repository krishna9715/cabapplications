// SplashScreen.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  console.log('SplashScreen is rendering');
  return (
    <View style={styles.container}>
      <Image
        // source={require('../path/to/image.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>VijayConnect</Text>
      <Text style={styles.subText}>Made in India</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subText: {
    fontSize: 16,
    color: '#888',
    marginTop: 10,
  },
});

export default SplashScreen;