import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
    // <Stack.Navigator>
    //   <Stack.Screen
    //     name="Home"
    //     component={Home}
    //     options={{headerShown: false}}
    //   />
    // </Stack.Navigator>
  );
};

export default AppStack;
