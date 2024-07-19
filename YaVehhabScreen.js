import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const YaVehhabScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/yildiz.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>
        Ya Vehhab ismi insanlar tarafından zikredildiği zaman o kişinin rızkı artar, 
        maddi sıkıntılarından kurtulmasına yardımcı olur ve kişiler refaha erer. 
        Mahlukata karşı güçlü bir heybetli şekilde görünür. Dua okunur iken 7 kez zikir 
        okunduğu zaman bu duanın kabul edilmesine neden olur.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Zikirmatik', { zikir: 'Ya Vehhab' })}>
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
    paddingHorizontal: 20,
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4b3621',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default YaVehhabScreen;

