import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Home = () => {
  const name = 'Steevel';

  return (
    <View style={styles.container}>
      <View style={styles.startContainer}>
        <Text style={styles.greetingText}>Welcome back, {name} !</Text>
        {/* <View style={styles.btnContainer}> */}
        <TouchableOpacity style={styles.startTimerBtn}>
          <Text style={styles.startTimerBtnText}>Start Pomodoro</Text>
        </TouchableOpacity>
        {/* </View> */}
      </View>
      <View style={styles.tasksContainer}>
        <Text style={styles.titleText}>To-do List</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#5F5FFF',
  },
  tasksContainer: {
    height: '70%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FCFCFC',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#323232',
  },
  greetingText: {
    color: '#FCFCFC',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  startContainer: {
    display: 'flex',
    alignItems: 'baseline',
    padding: 20,
  },
  // btnContainer: {
  //   display: 'flex',
  //   justifyContent: 'flex-start',
  //   alignItems: 'baseline',
  // },
  startTimerBtn: {
    elevation: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 30,
    backgroundColor: '#FCFCFC',
  },
  startTimerBtnText: {
    fontSize: 20,
    color: '#5F5FFF',
    paddingBottom: 1,
  },
});

export default Home;
