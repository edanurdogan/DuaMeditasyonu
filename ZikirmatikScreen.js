import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput, Alert, ActivityIndicator } from 'react-native';

const ZikirmatikScreen = ({ route }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [zikirList, setZikirList] = useState([]);
  const [selectedZikir, setSelectedZikir] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const zikirName = route.params?.zikir || 'Zikir';

  const handleSave = async () => {
    if (name.trim() === '') {
      Alert.alert('Hata', 'Lütfen bir isim girin.');
      return;
    }

    setIsLoading(true);

    try {
      const newZikir = { id: Date.now().toString(), name, count };

      setZikirList([...zikirList, newZikir]);
      Alert.alert('Kaydedildi', `Zikir adı: ${name}, Sayı: ${count}`);
      setName('');
      setCount(0);
    } catch (error) {
      Alert.alert('Hata', 'Zikir kaydedilemedi.');
      console.error("Zikir kaydetme hatası:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectZikir = (itemValue) => {
    const selected = zikirList.find(zikir => zikir.id === itemValue);
    if (selected) {
      setSelectedZikir(selected);
      setCount(selected.count);
      setName(selected.name);
    }
  };

  const handleDelete = async () => {
    if (selectedZikir) {
      setIsLoading(true);
      try {
        setZikirList(zikirList.filter(zikir => zikir.id !== selectedZikir.id));
        setSelectedZikir(null);
        setName('');
        setCount(0);
        Alert.alert('Silindi', `Zikir adı: ${selectedZikir.name} silindi.`);
      } catch (error) {
        Alert.alert('Hata', 'Zikir silinemedi.');
        console.error("Zikir silme hatası:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      Alert.alert('Hata', 'Lütfen silmek için bir zikir seçin.');
    }
  };

  return (
    <ImageBackground source={require('./assets/yildiz.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.headerText}>ZİKİRMATİK</Text>
        <TouchableOpacity style={styles.circle} onPress={() => setCount(count + 1)}>
          <Text style={styles.circleText}>{count}</Text>
        </TouchableOpacity>
        <Text style={styles.zikirText}>{zikirName}</Text>
        <TextInput
          style={styles.input}
          placeholder="Zikir Adı"
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Kaydet</Text>
        </TouchableOpacity>
        <Picker
          selectedValue={selectedZikir ? selectedZikir.id : null}
          style={styles.picker}
          onValueChange={(itemValue) => handleSelectZikir(itemValue)}
        >
          <Picker.Item label="Kaydedilen Zikirlerim" value={null} />
          {zikirList.map(zikir => (
            <Picker.Item key={zikir.id} label={`${zikir.name}: ${zikir.count}`} value={zikir.id} />
          ))}
        </Picker>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>Sil</Text>
        </TouchableOpacity>
        {isLoading && <ActivityIndicator size="large" color="#ffffff" />}
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
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  circleText: {
    color: '#000000',
    fontSize: 48,
  },
  zikirText: {
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#4b3621',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  picker: {
    height: 50,
    width: '80%',
    color: '#ffffff',
    backgroundColor: '#4b3621',
    borderRadius: 10,
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  deleteButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default ZikirmatikScreen;
