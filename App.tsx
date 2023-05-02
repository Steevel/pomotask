import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Onboarding from './screens/Onboarding';

function App(): JSX.Element {
  useEffect(() => {
    // hide splash screen
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Onboarding/>
    </SafeAreaView>
  );
}

export default App;
