import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const FAB = () => {
  return (
    // onPress={''}
    <Pressable style={styles.container}>
      <Text style={styles.title}>
        <Icon name="plus" size={32} color="#FFF" />
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    position: 'absolute',
    bottom: 15,
    right: 24,
    backgroundColor: '#5F5FFF',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 900,
  },
});

export default FAB;
