import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { firebase } from '../duameditasyonu/firebase';

const EditProfileScreen = ({ route, navigation }) => {
  const { firstName, email, password } = route.params;
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState(password);

  const handleSave = async () => {
    try {
      const user = firebase.auth().currentUser;
      if (user) {
        // Firestore'daki kullanıcı belgesini güncelle
        await firebase.firestore().collection('users').doc(user.uid).update({
          name: newFirstName,
          email: newEmail,
        });

        // Kullanıcının e-postasını güncelle
        if (newEmail !== email) {
          await user.verifyBeforeUpdateEmail(newEmail);
          Alert.alert('E-posta doğrulama', 'Yeni e-posta adresinize bir doğrulama bağlantısı gönderdik. Lütfen doğrulama işlemini tamamlayın.');
        }

        // Kullanıcının şifresini güncelle
        if (newPassword !== '********') {
          await user.updatePassword(newPassword);
        }

        Alert.alert('Başarılı!', 'Bilgiler güncellendi!');
        navigation.navigate('Profile', { firstName: newFirstName, email: newEmail, password: newPassword });
      }
    } catch (error) {
      console.error('Güncelleme hatası:', error);
      Alert.alert('Hata', error.message);
    }
  };

  return (
    <ImageBackground source={require('./assets/yildiz.jpg')} style={styles.background}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="İsminiz"
          value={newFirstName}
          onChangeText={setNewFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Mail adresiniz"
          value={newEmail}
          onChangeText={setNewEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifreniz"
          value={newPassword}
          secureTextEntry={true}
          onChangeText={setNewPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>KAYDET</Text>
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
  input: {
    width: '100%',
    backgroundColor: '#d3d3d3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    color: 'black',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default EditProfileScreen;
