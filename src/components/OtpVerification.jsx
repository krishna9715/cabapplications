// OtpVerification.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LoginStyles from './LoginStyles';

const OtpVerification = ({ navigation }) => {
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    // Handle OTP verification logic here
    console.log('Verifying OTP:', otp);
    // Navigate to the next screen or perform other actions
  };

  return (
    <View style={LoginStyles.container}>
      <Text style={LoginStyles.welcomeText}>Verify OTP</Text>
      <Text style={LoginStyles.instructionText}>Please Enter the OTP Sent to your Phone</Text>
      <TextInput
        style={LoginStyles.input}
        placeholder="Enter OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity style={LoginStyles.button} onPress={handleVerifyOTP}>
        <Text style={LoginStyles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
      <Text style={LoginStyles.termsText}>Resend OTP (30s)</Text>
    </View>
  );
};

export default OtpVerification;