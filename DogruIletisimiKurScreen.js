import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const DogruIletisimiKurScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/yildiz.jpg')} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#FAFAD2' }]} onPress={() => navigation.navigate('YaAfuvv')}>
          <Text style={styles.gridText}>YA AFÜVV</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#FAFAD2' }]} onPress={() => navigation.navigate('YaAlim')}>
          <Text style={styles.gridText}>YA ALİM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#FAFAD2' }]} onPress={() => navigation.navigate('YaHalim')}>
          <Text style={styles.gridText}>YA HALİM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#FAFAD2' }]} onPress={() => navigation.navigate('YaHalik')}>
          <Text style={styles.gridText}>YA HALIK</Text>
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
    width: '80%',
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

export default DogruIletisimiKurScreen;
