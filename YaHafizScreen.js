import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const YaHafizScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/yildiz.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>
        Bu ismi şerifi üzerinde taşıyan ve zikreden kimse bereketini bulur, hatta yırtıcı hayvanlar arasında uyursa zarar görmez. 
        El-Hafiz Her gün 10 kere zikrine devam eden zarara uğramaz. Ateş, su, cin, insan şerrinden korunur.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Zikirmatik', { zikir: 'Ya Hafiz' })}>
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

export default YaHafizScreen;

