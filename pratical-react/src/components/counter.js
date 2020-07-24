import React, { Component } from "react";

class Counter extends Component {
  // We use consturctor for initial value from Patent React Components
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.num,
    };
  }
  componentDidMount() {
    console.log("Mounting...");
  }
  componentWillUnmount() {
    console.log("Unmount...");
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
