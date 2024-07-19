import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';
import RamazanScreen from './RamazanScreen';
import ZikirmatikScreen from './ZikirmatikScreen';
import DerinUykuyaDalScreen from './DerinUykuyaDalScreen';
import YaSekurScreen from './YaSekurScreen';
import YaMutaliScreen from './YaMutaliScreen';
import YaVehhabScreen from './YaVehhabScreen';
import YaHafidScreen from './YaHafidScreen';
import KendineTerapiYapScreen from './KendineTerapiYapScreen'; 
import YaBaisScreen from './YaBaisScreen';
import YaGafurScreen from './YaGafurScreen';
import YaHabirScreen from './YaHabirScreen';
import YaHakScreen from './YaHakScreen';
import KendiniMotiveEtScreen from './KendiniMotiveEtScreen'; 
import YaHalikScreen from './YaHalikScreen'; 
import YaSehidScreen from './YaSehidScreen'; 
import DahaKolayOgrenScreen from './DahaKolayOgrenScreen'; 
import YaHafizScreen from './YaHafizScreen'; 
import YaMuidScreen from './YaMuidScreen'; 
import DogruIletisimiKurScreen from './DogruIletisimiKurScreen'; 
import YaAfuvvScreen from './YaAfuvvScreen'; 
import YaAlimScreen from './YaAlimScreen'; 
import YaHalimScreen from './YaHalimScreen'; 

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Ana Sayfa' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ title: 'Profili Düzenle' }} />
        <Stack.Screen name="Ramazan" component={RamazanScreen} options={{ title: 'Ramazana Özel' }} />
        <Stack.Screen name="Zikirmatik" component={ZikirmatikScreen} options={{ title: 'Zikirmatik' }} />
        <Stack.Screen name="DerinUykuyaDal" component={DerinUykuyaDalScreen} options={{ title: 'Derin Uykuya Dal' }} />
        <Stack.Screen name="YaSekur" component={YaSekurScreen} options={{ title: 'Ya Şekur' }} />
        <Stack.Screen name="YaMutali" component={YaMutaliScreen} options={{ title: 'Ya Mutali' }} />
        <Stack.Screen name="YaVehhab" component={YaVehhabScreen} options={{ title: 'Ya Vehhab' }} />
        <Stack.Screen name="YaHafid" component={YaHafidScreen} options={{ title: 'Ya Hafid' }} />
        <Stack.Screen name="KendineTerapiYap" component={KendineTerapiYapScreen} options={{ title: 'Kendine Terapi Yap' }} />
        <Stack.Screen name="YaBais" component={YaBaisScreen} options={{ title: 'Ya Bais' }} />
        <Stack.Screen name="YaGafur" component={YaGafurScreen} options={{ title: 'Ya Gafur' }} />
        <Stack.Screen name="YaHabir" component={YaHabirScreen} options={{ title: 'Ya Habir' }} />
        <Stack.Screen name="YaHak" component={YaHakScreen} options={{ title: 'Ya Hak' }} />
        <Stack.Screen name="KendiniMotiveEt" component={KendiniMotiveEtScreen} options={{ title: 'Kendini Motive Et' }} />
        <Stack.Screen name="YaHalik" component={YaHalikScreen} options={{ title: 'Ya Halik' }} />
        <Stack.Screen name="YaSehid" component={YaSehidScreen} options={{ title: 'Ya Sehid' }} />
        <Stack.Screen name="DahaKolayOgren" component={DahaKolayOgrenScreen} options={{ title: 'Daha Kolay Öğren' }} />
        <Stack.Screen name="YaHafiz" component={YaHafizScreen} options={{ title: 'Ya Hafiz' }} />
        <Stack.Screen name="YaMuid" component={YaMuidScreen} options={{ title: 'Ya Muid' }} />
        <Stack.Screen name="DogruIletisimiKur" component={DogruIletisimiKurScreen} options={{ title: 'Doğru İletişimi Kur' }} />
        <Stack.Screen name="YaAfuvv" component={YaAfuvvScreen} options={{ title: 'Ya Afuvv' }} />
        <Stack.Screen name="YaAlim" component={YaAlimScreen} options={{ title: 'Ya Alim' }} />
        <Stack.Screen name="YaHalim" component={YaHalimScreen} options={{ title: 'Ya Halim' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
