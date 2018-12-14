import React from "react";

import { StyleSheet, Text, View, CheckBox } from "react-native";

export default function({ todo, toggleDone, removeTodo }) {
  return (
    <View style={styles.todoItem}>
      <CheckBox
        value={todo.done}
        onPress={() => {
          console.log("check");
          toggleDone(todo);
        }}
      />
      <View style={styles[todo.done ? "todoTextDone" : "todoText"]}>
        <Text>{todo.text}</Text>
      </View>
      <View
        style={styles.removeTodo}
        onPress={() => {
          console.log("del");
          removeTodo(todo.id);
        }}
      >
        <Text
          onPress={() => {
            console.log("del");
            removeTodo(todo.id);
          }}
        >
          X
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ededed",
    fontSize: 24,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 5,
    paddingLeft: 5
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
