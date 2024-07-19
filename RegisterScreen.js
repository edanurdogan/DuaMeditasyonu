import { View, Text, TextInput, Alert, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { firebase } from "../duameditasyonu/firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // const handleSignUp = async () => {
  //   try {
  //     const userCredential = await firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(mail, password);
  //     const user = userCredential.user;
  //     const userId = user.uid;

  //     // Firestore'a kullanıcı verilerini kaydetme
  //     await firebase.firestore().collection("Users").doc(userId).set({
  //       name: name,
  //       lastName: lastName,
  //       mail: mail,
  //       password: password,
  //       userId:userId,
  //     });

  //     Alert.alert("Kayıt", "Doğrulama e-postası gönderildi.");
  //     await user.sendEmailVerification();
  //     navigation.goBack();
  //   } catch (error) {
  //     console.error("Kayıt hatası:", error);
  //   }
  // };
  


  const createAccount = async () => {
    if (!name || !email || !password) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Hata", "Lütfen geçerli bir email adresi girin.");
      return;
    }

    try {
          const userCredential = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
          const user = userCredential.user;
          const userId = user.uid;
    
          // Firestore'a kullanıcı verilerini kaydetme
          await firebase.firestore().collection("users").doc(userId).set({
            name: name,
            email: email,
            password: password,
            userId:userId,
          });
    
          Alert.alert("Kayıt", "Kayıt İşlemi Başarı ile gerçekleşti.");
          console.log("Kayıt İşlemi Başarı ile gerçekleşti.");

          navigation.navigate("Login")
        } catch (error) {
          console.error("Kayıt hatası:", error);
        }
  };

  return (
    <ImageBackground source={require('./assets/yildiz.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>KAYIT OL</Text>
        <TextInput
          style={styles.input}
          placeholder="Adınız:"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Mail Adresiniz:"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifreniz:"
          placeholderTextColor="#ccc"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={createAccount}>
          <Text style={styles.buttonText}>Kayıt Ol</Text>
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
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    color: 'white',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
});

export default RegisterScreen;
