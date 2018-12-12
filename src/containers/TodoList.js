import { Container } from "unstated";

import { ALL } from "../data/constants";

export default class TodoListContainer extends Container {
  state = {
    todoList: {},
    inputText: "",
    filter: ALL
  };

  inputTextChanged = inputText => {
    this.setState({ inputText });
  };
  addTodo = todo => {
    this.setState({
      todoList: {
        ...this.state.todoList,
        [todo.id]: {
          text: todo.text,
          done: false,
          id: todo.id
        }
      }
    });
  };
  toggleDone = todo => {
    this.setState({
      todoList: {
        ...this.state.todoList,
        [todo.id]: {
          ...this.state.todoList[todo.id],
          done: !todo.done
        }
      }
    });
  };
  removeTodo = todo => {
    this.setState({
      todoList: {
        ..._.omit(this.state.todoList, todo.id)
      }
    });
  };
  changeFilter = filter => {
    this.setState({ filter });
  };
}
