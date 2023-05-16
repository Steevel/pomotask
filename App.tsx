import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
// import {SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
// import OnboardStack from './src/navigation/OnboardStack';
import AppStack from './src/navigation/AppStack';

function App(): JSX.Element {
  useEffect(() => {
    // hide splash screen
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {/* <OnboardStack /> */}
      <AppStack />
    </NavigationContainer>
  );
}

export default App;
