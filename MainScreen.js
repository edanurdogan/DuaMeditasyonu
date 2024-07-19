import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/yildiz.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.grid}>
          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#4b3621' }]} onPress={() => navigation.navigate('Ramazan')}>
            <Text style={styles.gridText}>Ramazana Özel</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#567d46' }]} onPress={() => navigation.navigate('DerinUykuyaDal')}>
            <Text style={styles.gridText}>Derin uykuya dal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#8fa3b0' }]} onPress={() => navigation.navigate('KendineTerapiYap')}> 
            <Text style={styles.gridText}>Kendine terapi yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#a17c83' }]} onPress={() => navigation.navigate('KendiniMotiveEt')}>
            <Text style={styles.gridText}>Kendini motive et</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#c9b1bd' }]} onPress={() => navigation.navigate('DahaKolayOgren')}>
            <Text style={styles.gridText}>Daha kolay öğren</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#b7d5a5' }]} onPress={() => navigation.navigate('DogruIletisimiKur')}>
            <Text style={styles.gridText}>Doğru iletişimi kur</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#555555' }]} onPress={() => navigation.navigate('Zikirmatik')}>
            <Text style={styles.gridText}>ZİKİRMATİK</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.profileButtonText}>Profil</Text>
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
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridItem: {
    width: '40%',
    margin: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  gridText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  profileButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 50,
  },
  profileButtonText: {
    color: '#000000',
    fontSize: 16,
  },
});

export default MainScreen;
