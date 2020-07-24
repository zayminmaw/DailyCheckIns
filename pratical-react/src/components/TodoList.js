import React, { Component } from "react";
import TodoFrom from "./TodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  state = {
    todos: [],
    show: "all",
    toggleAC: true,
  };
  addTodo = (todo) => {
    const todos = [todo, ...this.state.todos];
    this.setState({
      todos,
    });
  };
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };
  updateShow = (s) => {
    this.setState({
      show: s,
    });
  };
  del = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };
  removec = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    });
  };

  render() {
    let todos = [];
    if (this.state.show === "all") {
      todos = this.state.todos;
    } else if (this.state.show === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.show === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }
    return (
      <div>
        <TodoFrom onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            del={() => this.del(todo.id)}
            id={todo.id}
            todo={todo}
          />
        ))}
        <div>
          Todo left : {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateShow("all")}>All</button>
          <button onClick={() => this.updateShow("active")}>Active</button>
          <button onClick={() => this.updateShow("complete")}>Complete</button>
        </div>
        <div>
          {this.state.todos.some((todo) => todo.complete) ? (
            <div>
              <button onClick={this.removec}>Remove Complete</button>
            </div>
          ) : null}
        </div>
        <div>
          <button
            onClick={() =>
              this.setState({
                todos: this.state.todos.map((todo) => ({
                  ...todo,
                  complete: this.state.toggleAC,
                })),
                toggleAC: !this.state.toggleAC,
              })
            }
          >
            Toggle All Complete {`${this.state.toggleAC}`}
          </button>
        </div>
      </div>
    );
  }
}

export default TodoList;
