import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Onboarding = ({navigation}) => {
  const [name, setName] = React.useState('');

  async function saveName() {
    if (name) {
      try {
        await AsyncStorage.setItem('@name', name);
      } catch (e) {
        // saving error
      }
      console.log('btn', name);
      navigation.navigate('Welcome', {name: name});
    }
  }

  // Animations
  const greetTextAnimation = {
    translateY: new Animated.Value(180),
    fade: new Animated.Value(1),
  };
  // const moveToTop = useRef(new Animated.Value(180)).current;
  // const textOpacity = useRef(new Animated.Value(1)).current;

  const initialInputState = {
    fade: new Animated.Value(0),
  };

  const displayInput = useRef(initialInputState).current;
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

  const animateInput = () => {
    Animated.timing(displayInput.fade, {
      toValue: 1,
      delay: 1500,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateText();
    animateInput();
  });

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.greetingText,
          {
            transform: [{translateY: moveToTop.translateY}],
            opacity: moveToTop.fade,
          },
        ]}>
        Hi, it’s looks like {'\n'}you are new here !
      </Animated.Text>
      <Animated.Text style={[styles.requestText, {opacity: displayInput.fade}]}>
        To start the configurantion we only need your name
      </Animated.Text>
      <Animated.View style={[{opacity: displayInput.fade}]}>
        <TextInput
          editable
          value={name}
          onChangeText={text => setName(text)}
          style={styles.nameInput}
          numberOfLines={1}
          maxLength={15}
        />
        <TouchableOpacity style={styles.continueBtn} onPress={saveName}>
          <Text style={styles.btnText}>{'>'}</Text>
        </TouchableOpacity>
      </Animated.View>
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
  nameInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  continueBtn: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  btnText: {
    color: '#5F5FFF',
    fontSize: 52,
    marginBottom: 6,
    marginLeft: 4,
  },
});

export default Onboarding;
