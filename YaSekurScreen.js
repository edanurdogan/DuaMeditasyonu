import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const YaSekurScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/yildiz.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Eş Şekur esmasının zikir adedi 526 olmaktadır. Eş Şekur esmasını zikreden kişiye Allahu Teala rızkını bollaştırmakta ve nimetlerin devamlı olmasını sağlamaktadır. Eş Şekur ismi şerifini zikretmek gözler için faydalı bir zikirdir. Eş Şekur esmasını zikreden kişi vücudunda hafiflik ve zindelik hissetmektedir.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Zikirmatik', { zikir: 'Ya Şekur' })}>
          <Text style={styles.buttonText}>Zikri Başlat</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#567d46',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default YaSekurScreen;
