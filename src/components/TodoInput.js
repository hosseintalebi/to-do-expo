import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";
export default class TodoInput extends Component {
  constructor() {
    super();
    this.onChangeInputText = this.onChangeInputText.bind(this);
    this.onSubmitEditing = this.onSubmitEditing.bind(this);
  }
  render() {
    const { inputText } = this.props;
    return (
      <TextInput
        style={styles.input}
        type="text"
        placeholder="What do you want to be done?"
        value={inputText}
        onChangeText={this.onChangeInputText}
        onSubmitEditing={this.onSubmitEditing}
      />
    );
  }

  onChangeInputText(text) {
    console.log(text);
    this.props.inputTextChanged(text);
  }

  onSubmitEditing() {
    console.log(this.props.inputText);
    this.props.addTodo(this.props.inputText);
  }
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: "#c9c9c9"
  }
});
