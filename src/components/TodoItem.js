import React from "react";

import { StyleSheet, Text, View, CheckBox } from "react-native";

export default function({ todo, toggleDone, removeTodo }) {
  return (
    <View style={styles.todoItem}>
      <CheckBox
        value={todo.done}
        onClick={() => toggleDone(todo.id, !todo.done)}
      />
      <View style={styles[todo.done ? "todoTextDone" : "todoText"]}>
        <Text>{todo.text}</Text>
      </View>
      <View style={styles.removeTodo} onClick={() => removeTodo(todo.id)}>
        <Text>X</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    display: "flex",
    borderBottomWidth: 1,
    borderBottomColor: "#ededed",
    fontSize: 24,
    alignItems: "center",
    padding: "10px 5px"
  },
  todoTextDone: {
    textDecorationLine: "line-through",
    color: "#999",
    paddingLeft: 10
  },
  todoText: {
    color: "#666",
    paddingLeft: 10
  },
  removeTodo: {
    marginLeft: "auto",
    marginRight: 5,
    fontSize: 18,
    color: "#aaa"
  }
});
