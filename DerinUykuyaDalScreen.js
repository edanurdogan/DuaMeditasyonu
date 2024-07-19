import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const DerinUykuyaDalScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/yildiz.jpg')} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('YaSekur')}>
          <Text style={styles.buttonText}>YA ŞEKUR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('YaMutali')}>
          <Text style={styles.buttonText}>YA MUTALİ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.zikirmatikButton} onPress={() => navigation.navigate('Zikirmatik')}>
          <Text style={styles.footerText}>ZİKİRMATİK</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a semi-transparent overlay
    paddingHorizontal: 20,
  },
  button: {
    width: '80%',
    backgroundColor: '#567d46',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  zikirmatikButton: {
    marginTop: 20,
  },
  footerText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default DerinUykuyaDalScreen;