import React, { Component } from "react";
import shortid from "shortid";

class TodoForm extends Component {
  state = {
    text: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="todo..."
        />
        <button onClick={this.submit}>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
