import React, { useEffect, useRef, useState } from 'react';
import {View, StyleSheet, Animated, Easing, Text, TextInput, TouchableOpacity} from 'react-native';

const Onboarding = () => {
  const [greetTextAnimation] = useState({
    translateY: new Animated.Value(180),
    fade: new Animated.Value(1),
  });
  // const moveToTop = useRef(new Animated.Value(180)).current;
  // const textOpacity = useRef(new Animated.Value(1)).current;

  const moveToTop = useRef(greetTextAnimation).current;

  const animateText = () => {
    Animated.sequence([
      Animated.timing(moveToTop.translateY, {
        toValue: 0,
        duration: 500,
        delay: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(moveToTop.fade, {
        toValue: 0.5,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();

  };

  useEffect(() => {
    animateText();

  });

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.greetingText, {transform: [{translateY: moveToTop.translateY}], opacity: moveToTop.fade}]}>
        Hi, it’s looks like {'\n'}you are new here !
        </Animated.Text>
        <Text style={styles.requestText}>To start the configurantion we only need your name</Text>
        <TextInput
        style={styles.nameInput}
        editable
        numberOfLines={1}
        maxLength={15}
        />
        <TouchableOpacity style={styles.continueBtn}>
          <Text >{'>'}</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    flexDirection: 'column',
    backgroundColor: '#5F5FFF',
    padding: 20,
  },
  greetingText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    transform: [{translateY: 0}],
    marginTop: '20%',
    opacity: 1,
  },
  requestText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    // display: 'none',
  },
  nameInput:{
    backgroundColor: '#fff',
    borderRadius: 10,

  },
  continueBtn:{
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Onboarding;
