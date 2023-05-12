import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Welcome = () => {
  const name = 'Steevel Salis';
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
    marginBottom:10,
  },
});

export default Welcome;
