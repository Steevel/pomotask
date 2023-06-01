import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = ({route, navigation}) => {
  // const [name, setName] = useState<string | null>('');
  const {name} = route.params;

  // async function getName() {
  //   try {
  //     const data = await AsyncStorage.getItem('@name');
  //     setName(data);
  //     setTimeout(() => {
  //       navigation.navigate('AppStack');
  //     }, 1500);
  //   } catch (e) {
  //     setName('User');
  //   }
  // }

  useEffect(() => {
    // getName();
    setTimeout(() => {
      navigation.navigate('AppStack');
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomText}>Hi {name}</Text>
      <Text style={styles.welcomText}>Welcome to Pomotask 🎉</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 20,
    padding: 20,
    backgroundColor: '#5F5FFF',
  },
  welcomText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Welcome;
