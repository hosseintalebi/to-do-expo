import { Container } from "unstated";
import _ from "lodash";
import { ALL } from "../data/constants";

export default class TodoListContainer extends Container {
  state = { todoList: {}, inputText: "", filter: ALL };

  inputTextChanged = inputText => {
    this.setState({ inputText });
  };
  addTodo = todo => {
    this.setState(state => {
      return {
        todoList: {
          ...state.todoList,
          [todo.id]: {
            text: todo.text,
            done: false,
            id: todo.id
          }
        }
      };
    });
  };
  toggleDone = todo => {
    this.setState(state => {
      return {
        todoList: {
          ...state.todoList,
          [todo.id]: {
            ...state.todoList[todo.id],
            done: !todo.done
          }
        }
      };
    });
  };
  removeTodo = id => {
    this.setState(state => {
      console.log("remove");

      console.log({ todoList: { ..._.omit(state.todoList, id) } });
      return {
        todoList: {
          ..._.omit(state.todoList, id)
        }
      };
    });
  };
  changeFilter = filter => {
    console.log("change filt");
    this.setState({ filter });
  };
}
