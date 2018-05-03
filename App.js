import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './TaskList';

export default class App extends React.Component {
  state = {
    todos: [
      {
        task: 'Learn React Native'
      }
    ]
  }
  render() {
    return (
      <View style={styles.container}>
        <TaskList  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
