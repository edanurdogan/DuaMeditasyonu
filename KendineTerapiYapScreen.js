import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const KendineTerapiYapScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/yildiz.jpg')} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#B0E0E6' }]} onPress={() => navigation.navigate('YaBais')}>
          <Text style={styles.gridText}>YA BAİS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#B0E0E6' }]} onPress={() => navigation.navigate('YaGafur')}>
          <Text style={styles.gridText}>YA GAFUR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#B0E0E6' }]} onPress={() => navigation.navigate('YaHabir')}>
          <Text style={styles.gridText}>YA HABİR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#B0E0E6' }]} onPress={() => navigation.navigate('YaHak')}>
          <Text style={styles.gridText}>YA HAK</Text>
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
  },
  gridItem: {
    width: '80%', // Butonları daha büyük yapmak için genişliği artırın
    margin: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  gridText: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default KendineTerapiYapScreen;
