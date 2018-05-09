import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
  },
  buttonDone: {
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
    padding: 5,
  }
});

class TaskRow extends React.Component {
  onDonePressed() {
    this.props.onDone(this.props.todo);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.todo.task}</Text>
        <TouchableHighlight
          onPress={this.onDonePressed.bind(this)}
          style={styles.buttonDone}
        >
          <Text>Done</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

TaskRow.propTypes = {
  onDone: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
  }).isRequired,
}

export default TaskRow;
