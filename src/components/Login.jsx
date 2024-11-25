// Login.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import LoginStyles from './LoginStyles';

const Login = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOTP = () => {
    // Handle OTP sending logic here
    console.log('Sending OTP to:', phoneNumber);
    // Navigate to the OTP verification screen
    navigation.navigate('OtpVerification');
  };

  return (
    <View style={LoginStyles.container}>
      <Image
        // source={require('./path/to/image.png')}
        style={LoginStyles.logo}
      />
      <Text style={LoginStyles.welcomeText}>Welcome to</Text>
      <Text style={LoginStyles.appName}>VijayConnect</Text>
      <Text style={LoginStyles.instructionText}>Login with your Phone Number</Text>
      <TextInput
        style={LoginStyles.input}
        placeholder="eg. 8888679067"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={LoginStyles.button} onPress={handleSendOTP}>
        <Text style={LoginStyles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
      <Text style={LoginStyles.termsText}>
        By Continuing, You Agree to the VijayConnect's Terms & Conditions
      </Text>
    </View>
  );
};

export default Login;