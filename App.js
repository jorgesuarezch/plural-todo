import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Navigator // TODO: update deprecated component see https://facebook.github.io/react-native/docs/navigation.html
} from 'react-native-deprecated-custom-components';
import TaskList from './TaskList';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native'
        },
        {
          task: 'Learn Redux'
        }
      ],
    }
  }

  onAddStarted() {
    this.nav.push({
      name: 'taskform'
    });
  }

  renderScene(route, nav) {
    switch (route.name) {
      case 'taskform': {
        return (
          <Text
            style={{
              paddingTop: 20
            }}
          >
            Here goes the task form!
           </Text>
        );
      }
      default:
        return (
          <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            todos={this.state.todos}
          />
        );
    }
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
    return (
      <Navigator
        ref={(nav => this.nav = nav)}
        configureScene={this.configureScene}
        initialRoute={{ name: 'tasklist', index: 0 }}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}
