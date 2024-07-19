import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const YaAlimScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/yildiz.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>
        El-Alîm faziletlerinde “Yâ Alîm ism-i şerifini günde yüz kere okuyarak zikreden ve bunu sürekli olarak yapan kişilerin kalbi, şüphelerden ve evhamlardan arınır. 
        Mü'min manasına ve bu duygu ve düşünce ölçülerine inanarak “Yâ Alîm ism-i şerifini zikreden ve zikre devam eden kişiler ilim ve irfan yolunda yükselirler.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Zikirmatik', { zikir: 'Ya Alim' })}>
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

export default YaAlimScreen;

