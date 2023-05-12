import React, {useEffect} from 'react';
// import {SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Onboarding from './src/screens/Onboarding';
import Welcome from './src/screens/Welcome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  useEffect(() => {
    // hide splash screen
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {/* <SafeAreaView style={{flex: 1}}> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}

export default App;
