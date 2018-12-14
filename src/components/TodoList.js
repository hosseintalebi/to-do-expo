import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import _ from "lodash";
import { Subscribe } from "unstated";

import TodoListContainer from "../containers/TodoList";

import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import Title from "./Title";

import { ALL, COMPLETED, ACTIVE } from "../data/constants";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      next_todo_id: 1
    };
    this.addTodo = this.addTodo.bind(this);
  }

  renderTodoItems(todoListProp) {
    const { state, toggleDone, removeTodo, filter } = todoListProp;
    console.log(state.todoList);
    const filteredList = _.filter(state.todoList, todo => {
      switch (filter) {
        case ACTIVE:
          return !todo.done;
        case COMPLETED:
          return todo.done;
        default:
          return true;
      }
    });
    return filteredList
      .sort((a, b) => a.id < b.id)
      .map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          toggleDone={toggleDone}
          removeTodo={removeTodo}
        />
      ));
  }

  addTodo(todoListProp) {
    return inputText => {
      const { addTodo, inputTextChanged } = todoListProp;
      const { next_todo_id } = this.state;
      if (!!inputText && !!inputText.trim()) {
        addTodo({ text: inputText.trim(), id: next_todo_id });
        inputTextChanged("");
        this.setState({ next_todo_id: next_todo_id + 1 });
      }
    };
  }

  renderFooter(todoListProp) {
    const { state, changeFilter } = todoListProp;
    const { filter, todoList } = state;
    if (_.size(todoList)) {
      return (
        <View style={styles.footer}>
          <View
            style={{
              ...styles.filterBotton,
              ...(filter === ALL ? styles.filterBottonActive : {})
            }}
            onPress={() => changeFilter(ALL)}
          >
            <Text>All</Text>
          </View>
          <View
            style={{
              ...styles.filterBotton,
              ...(filter === COMPLETED ? styles.filterBottonActive : {})
            }}
            onPress={() => changeFilter(COMPLETED)}
          >
            <Text>Completed</Text>
          </View>
          <View
            style={{
              ...styles.filterBotton,
              ...(filter === ACTIVE ? styles.filterBottonActive : {})
            }}
            onPress={() => changeFilter(ACTIVE)}
          >
            <Text>Active</Text>
          </View>
        </View>
      );
    }
  }
  render() {
    return (
      <Subscribe to={[TodoListContainer]}>
        {todoList => {
          return (
            <View style={styles.todoList}>
              <Title>
                <Text style={styles.title}>ToDo</Text>
              </Title>
              <View style={styles.inputWrapper}>
                <TodoInput
                  inputText={todoList.state.inputText}
                  inputTextChanged={todoList.inputTextChanged}
                  addTodo={this.addTodo(todoList)}
                />
              </View>
              <View style={styles.todoItemContainer}>
                {this.renderTodoItems(todoList)}
              </View>
              {this.renderFooter(todoList)}
            </View>
          );
        }}
      </Subscribe>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    paddingBottom: 5,
    fontSize: 44,
    color: "#e74c3c"
  },
  todoList: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  inputWrapper: {
    width: "50%",
    minWidth: 300,
    display: "flex"
  },
  todoItemContainer: {
    padding: 10,
    width: "50%",
    minWidth: 270
  },

  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  filterBotton: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 3
  },

  filterBottonActive: {
    borderWidth: 1,
    borderColor: "rgba(231, 76, 60, 0.5)"
  }
});

export default TodoList;
