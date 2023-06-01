import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import OnboardStack from './src/navigation/OnboardStack';
import AppStack from './src/navigation/AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): JSX.Element {
  const [name, setName] = useState<string | null>('');

  async function getName() {
    try {
      const data = await AsyncStorage.getItem('@name');
      setName(data);
    } catch (e) {
      setName('User');
    }
  }

  useEffect(() => {
    // hide splash screen
    SplashScreen.hide();
    getName();
  }, []);

  return (
    <NavigationContainer>
      {name ? <AppStack /> : <OnboardStack />}
    </NavigationContainer>
  );
}

export default App;
