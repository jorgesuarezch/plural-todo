import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {
  Navigator // TODO: update deprecated component see https://facebook.github.io/react-native/docs/navigation.html
} from 'react-native-deprecated-custom-components';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

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

  onCancel() {
    this.nav.pop();
  }

  onAdd(task) {
    this.state.todos.push({ task });
    this.setState({
      todos: this.state.todos
    });
    this.nav.pop();
  }

  onDone(todo) {
    const filteredTodos = this.state.todos.filter((filterTodo) => filterTodo !== todo);
    this.setState({
      todos: filteredTodos,
    })
  }

  renderScene(route, nav) {
    switch (route.name) {
      case 'taskform': {
        return (
          <TaskForm
            onCancel={this.onCancel.bind(this)}
            onAdd={this.onAdd.bind(this)}
          />
        );
      }
      default:
        return (
          <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            onDone={this.onDone.bind(this)}
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
