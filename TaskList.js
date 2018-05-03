import React from 'react';
import PropTypes from 'prop-types';
import {
  ListView,
  StyleSheet,
  View,
} from 'react-native';

import TaskRow from './TaskRow';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'flex-start',
  }
});

class TaskList extends React.Component {
  constructor(props, context) {
    super(props, context);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: dataSource.cloneWithRows(props.todos),
    }
  }

  renderRow(todo) {
    return (
      <TaskRow todo={todo} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          key={this.props.todos}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TaskList;
