import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "./src/components/TodoList";
import { Provider } from "unstated";
import TodoListContainer from "./src/containers/TodoList";

let todoList = new TodoListContainer();

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider inject={[todoList]}>
          <TodoList />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 50
    //justifyContent: "center"
  }
});
